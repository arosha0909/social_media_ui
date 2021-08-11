import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  commentViewEnable = false
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.getUser().subscribe(user => { console.log(user.data) });
  }

  commentView() {
    this.commentViewEnable = true;
  }

}
