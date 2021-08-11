import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AppResponse } from '../models/response';
import { tap, map, catchError } from 'rxjs/operators';
import { Util } from '../common/util';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private userSource = new BehaviorSubject<User>(null);
  public onUserUpdate$ = this.userSource.asObservable();

  private static onLogin(token: string) {
    console.log('Logged in');
    AuthService.setToken(token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  public static setToken(token) {
    localStorage.setItem('token', token);
  }

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUser(): Observable<AppResponse<User>> {
    const token = AuthService.getToken();
    if (!token || AuthService.isTokenExpired(token)) {
      return of(null);
    }
    if (this.user) {
      return of({ success: true, data: this.user });
    }
    const ep = Util.apiAuthUrl('self');
    return this.httpClient.get<AppResponse<User>>(ep).pipe(
      tap((res) => {
        if (!res.data) {
          this.logout();
        }
        this.user = res.data;
        this.userSource.next(res.data);
      })
    );
  }

  login(email: string, password: string): Observable<AppResponse<string>> {

    const url = Util.apiPublicUrl('login');
    return this.httpClient.post<AppResponse<string>>(url, { email, password }).pipe(map(res => {
      if (res.data) {
        AuthService.onLogin(res.data);
      }
      return res;
    }),
      catchError((err, caught) => {
        console.log(err);
        return of({ success: false, message: err.toString(), data: null });
      }));
  }

  register(userData: User): Observable<AppResponse<string>> {
    const url = Util.apiPublicUrl('register');
    return this.httpClient.post<AppResponse<string>>(url, userData).pipe(map(res => {
      if (res.data) {
        AuthService.onLogin(res.data);
      }
      return res;
    }),
      catchError((err, caught) => {
        console.log(err);
        return of({ success: false, message: err.toString(), data: null });
      }));
  }

  public logout() {
    this.invalidate();
    localStorage.removeItem('token');
  }

  private invalidate() {
    this.user = null;
  }

  private static getTokenExpirationDate(token: string): Date {
    try {
      const decoded: any = jwt_decode(token);
      if (decoded.exp === undefined) {
        return null;
      }
      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    } catch (Error) {
      return null;
    }
  }

  private static isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}
