import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Form Module
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Local Modules
import {AuthenticationModule} from 'src/authentication/authentication.module';

// Pages
import { RegisterPage } from './register.page';



const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthenticationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
