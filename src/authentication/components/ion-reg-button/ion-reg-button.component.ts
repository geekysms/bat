import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'geeky-reg-button',
  templateUrl: './ion-reg-button.component.html',
  styleUrls: ['./ion-reg-button.component.scss'],
})
export class IonRegButtonComponent implements OnInit {
  @Input() userData: User;
  @Input() collection: string;
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

  register(): void {
    console.log(this.userData, 'this.userData');
    this.authSrv.register(this.userData, this.collection).subscribe(data => {
      console.log(data, 'data here at button reg');
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error, 'error here at button reg');
    });
    // this.authSrv.createUser(this.regData, this.collectionData);
  }

}
