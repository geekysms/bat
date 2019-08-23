import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile : new FormControl('', Validators.required),
    mail : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    cpassword : new FormControl('', Validators.required)
  });

  constructor(
  ) { }

  ngOnInit() {
  }

  // needs to handle the ngSubmit case in future
  register(): void {
    console.dir('coming here');
  }

}
