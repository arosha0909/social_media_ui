import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function () {
    //   $("img").click(function () {
    //     var t = $(this).attr("src");
    //     $(".modal-body2").html("<img src='" + t + "' class='modal-img'>");
    //     $("#myModal").modal();
    //   });
    // });
  }

}
