import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// FireBase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import firebaseConfig from './firebase';
import { FireAuthService } from './services/fire-auth.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers : [FireAuthService]
})
export class FirebaseModule { }
