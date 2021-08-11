import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
import * as moment from 'moment';
// import {Permission} from "./permission";
import { Role } from "./user-types";

export class Util {

  public static dateFormat(date: Date): string {
    return moment(date).format("YYYY-MM-DD");
  }

  public static apiAuthUrl(path) {
    const url1 = Location.joinWithSlash(environment.api_url, 'api/auth');
    return Location.joinWithSlash(url1, path);
  }

  public static apiAdminUrl(path) {
    const url1 = Location.joinWithSlash(environment.api_url, 'api/admin');
    return Location.joinWithSlash(url1, path);
  }

  public static apiBaseUrl(path) {
    return Location.joinWithSlash(environment.api_url, path);
  }

  public static apiPublicUrl(path) {
    const url1 = Location.joinWithSlash(environment.api_url, 'api/public');
    return Location.joinWithSlash(url1, path);
  }

  public static orderId(id: number) {
    return "BB-" + id.toString().padStart(3, "0");
  }

  public static gotoHome() {
    location.href = environment.home_path;
  }

  public static removeUnderscore(value: string) {
    return value.replace(/_/g, " ");
  }

  public static titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  public static deepCopy<T>(object: T): T {
    return object ? <T>JSON.parse(JSON.stringify(object)) : null;
  }


  // static hasPermission(permission: Permission, user: User) {
  //   return user.role === Role.SUPER_ADMIN || (user.role === Role.ADMIN && user.permissions.includes(permission));
  // }
}
