import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {
  commentViewEnable = false;
  constructor() { }

  ngOnInit(): void {
    this.ratingStar();
  }

  commentView() {
    this.commentViewEnable = true;
  }

  ratingStar() {
    // $(".stars").mousemove(function (e) {
    //   var gLeft = $(".stars .stars-ghost").offset().left,
    //     pX = e.pageX;

    //   $(".stars .stars-ghost").width(pX - gLeft);

    // });
  }
}
