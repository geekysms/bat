import { Injectable } from '@angular/core';
import { User } from '../../app/interfaces/user';
import {FireAuthService} from 'src/firebase/services/fire-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: FireAuthService
  ) { }

  // Login service will call firebase auth service Login
  login(userData: User): Observable<any> {
    return new Observable( observer => {
      this.fireAuth.login(userData).subscribe( data => {
        if (data) {
          console.log('logged in successfully', data);
          observer.next(data);
        }
      }, error => {
        console.log('error in auth login service', error);
        observer.error(error);
      }, () => {
        observer.complete();
      });
    });
  }

  // Logout service will call firebase auth service Logout
  logOut(): Observable<any> {
    return new Observable( observer => {
      this.fireAuth.logout().subscribe(data => {
        console.log(data, 'data here at auth logout');
        observer.next(data);
      }, error => {
        console.log(error, 'error here at auth logout');
        observer.error(error);
      }, () => {
        observer.complete();
      });
    });
  }

  // Register service will call firebase auth service register
  register(userData: User, collection: string): Observable<any> {
    return new Observable(observer => {
      this.fireAuth.register(userData, collection).subscribe(
        data => {
          console.log(data, 'data here');
          observer.next(data);
        }, error => {
          console.log('error here', error);
          observer.error(error);
        }, () => {
          observer.complete();
        });
    });
  }

  // isLoggedIn service will call firebase auth service isLoggedIn()
  isLoggedIn(): Observable<any> {
    return new Observable(observer => {
      this.fireAuth.isLoggedIn().subscribe(data => {
        console.log(data, 'data here at is logged in auth service');
        observer.next(data);
        observer.complete();
      }, error => {
        console.log(error, 'error here at logged in auth service');
        observer.error(error);
        observer.complete();
      });
    });
  }

  // Login service will call firebase auth service isLoggedIn(info as true)
  getLoggedUserInfo() {
    return new Observable(observer => {
      this.fireAuth.isLoggedIn(true).subscribe(data => {
        console.log(data, 'data here at is getUserInfo auth service');
        observer.next(data);
        observer.complete();
      }, error => {
        console.log(error, 'error here at getUserInfo auth service');
        observer.error(error);
        observer.complete();
      });
    });
  }
}
