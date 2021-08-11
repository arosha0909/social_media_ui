import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  commentViewEnable = false;
  user: User;
  settingUrl = 'http://localhost:4200/user/profile-setting';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(u => {
      this.user = u.data;
    });
  }


  goToSetting() {
    this.router.navigate[('/profile-setting')];
  }


}
