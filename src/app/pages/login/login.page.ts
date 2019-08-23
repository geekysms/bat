import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    mail: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(
  ) { }

  ngOnInit() {
    // console.log('got here');
    // this.loginForm.get('pwd').setValue('');
  }

  // needs to handle the ngSubmit case in future
  login(): void {
  }

}
