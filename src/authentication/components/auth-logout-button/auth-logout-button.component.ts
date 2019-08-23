import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/authentication/services/auth.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-logout-button',
  templateUrl: './auth-logout-button.component.html',
  styleUrls: ['./auth-logout-button.component.scss'],
})
export class AuthLogoutButtonComponent implements OnInit {

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  logout(): void {
    this.authSrv.logOut().subscribe( data => {
      console.log(data, 'data here at logout button');
      if (!isNullOrUndefined(data)) {
        this.router.navigateByUrl('/login');
      }
    }, error => {
      console.log(error, 'error at log out button');
    });
  }

}
