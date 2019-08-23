import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/authentication/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    // console.log(this.authSrv.isLoggedIn(), 'check for login');
    this.isLoggedIn(); // test remove later
    // this.authSrv.isLoggedIn()
  }


  isLoggedIn() {
    this.authSrv.isLoggedIn().subscribe(data => {
      console.log(data, 'data here at reg button is logged in');
    }, error => {
      console.log(error, 'data here at reg button is logged in');
    });
  }

}
