import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {User} from 'src/app/interfaces/user';
import { Observable, observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';



@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  user: any;

  constructor(
    private afAuth: AngularFireAuth // Angular fire authentication service
  ) { }

  // register method with createUserWithEmailAndPassword returns user data
  register(userData: User, collection: string): Observable<any> {
    return new Observable( observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(userData.mail, userData.password).then(
        data => {
          console.log('data here at logout fire auth', data);
          observer.next(data);
          observer.complete();
        }, error => {
          console.log('error here at logout fire auth', error);
          observer.error(error);
          observer.complete();
        });
    });
  }

  // Login Method returns Userdata
  login(userData: User) {
    return new Observable( observer => {
      this.afAuth.auth.signInWithEmailAndPassword(userData.mail, userData.password).then(
        data => {
          console.log('data here at Login fire auth', data);
          observer.next(data);
          observer.complete();
        }, error => {
          console.log('error here at Login fire auth', error);
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  // Check Auth state (test)
  checkAuthState() {
    this.afAuth.auth.onAuthStateChanged( user => {
      console.log('user here at logout fire auth', user);
    }, error => {
      console.log('error here at logout fire auth', error);
    });
  }

  // Logout Method return void
  logout() {
    return new Observable( observer => {
      this.afAuth.auth.signOut().then(
        data => {
          this.user = null;
          console.log('data here at logout fire auth', data);
          observer.next(true);
          observer.complete();
        }, error => {
          console.log('error here at logout fire auth', error);
          observer.error(error);
          observer.complete();
        });
    });
  }
  // isLoggedIn() {
  //   // console.log(this.afAuth, 'user here');
  //   return this.afAuth.user !== null;
  // }


  // FireBase auth state
  authState() {
      return this.afAuth.authState.pipe(first());
  }

  // IsLoggedIn method if info is true returns loggedInfo else returns whether user is logged in or not
  isLoggedIn(info?: boolean) {
    return new Observable(observer => {
      if ( !isNullOrUndefined(this.user)) {
        if (info) {
          observer.next(this.user);
        } else {
          observer.next(true);
        }
        observer.complete();
      } else {
        // returns user information signed in
        this.authState().pipe(
          tap(user => {
            console.log(user, ' user here');
            if (!isNullOrUndefined( user)) {
              console.log(user, 'user');
              if (info) {
                observer.next(user);
              } else {
                observer.next(true);
              }
              observer.complete();
              this.user = user;
              // do something
            } else {
              if (info) {
                observer.error('no User Found');
              } else {
                observer.next(false);
              }
              observer.complete();
              // do something else
            }
          })
        ).subscribe();
      }
    });
  }
}
