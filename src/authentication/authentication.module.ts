import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// firebase module
import {FirebaseModule} from 'src/firebase/firebase.module';

// components
import {IonRegButtonComponent} from './components/ion-reg-button/ion-reg-button.component';
import {AuthLoginButtonComponent} from './components/auth-login-button/auth-login-button.component';
import {AuthLogoutButtonComponent} from './components/auth-logout-button/auth-logout-button.component';

// services
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [IonRegButtonComponent, AuthLoginButtonComponent, AuthLogoutButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    FirebaseModule
  ],
  exports : [IonRegButtonComponent, AuthLoginButtonComponent, AuthLogoutButtonComponent],
  providers : [AuthService]
})
export class AuthenticationModule { }
