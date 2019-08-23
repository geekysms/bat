import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/authentication/services/auth.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-button',
  templateUrl: './auth-login-button.component.html',
  styleUrls: ['./auth-login-button.component.scss'],
})
export class AuthLoginButtonComponent implements OnInit {
  @Input() userData: User;
  @Input() disabled: boolean;

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.authSrv.isLoggedIn(), 'check for login');
    this.isLoggedIn();
    // this.authSrv.isLoggedIn()
  }

  isLoggedIn() {
    this.authSrv.isLoggedIn().subscribe(data => {
      console.log(data, 'data here at reg button is logged in');
    }, error => {
      console.log(error, 'data here at reg button is logged in');
    });
  }

  login(): void {
    if (!(this.userData.mail || this.userData.password)) {
      console.log('please enter password or username');
    }
    // console.log('coming her');
    this.authSrv.login(this.userData).subscribe(data => {
      if (!isNullOrUndefined(data)) {
        this.router.navigateByUrl('/home');
      }
      console.log(data, 'data here at login button');
    }, error => {
      console.log(error, 'error here at login button');
    });
  }

}
