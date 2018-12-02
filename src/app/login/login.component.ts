import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor() {
    this.loginForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(4)])
    })

  }

  ngOnInit() {
  }

  signIn() {
    console.log('Form submitted ....');
    console.log(this.loginForm.value);
    
    
  }

  getUserNameRequiredMessage(){
    return this.username.hasError('required')?'username can not be left blank' : '';
  }

  getPasswordRequiredMessage(){   
    return this.password.hasError('required')?'password can not be left blank' : '';
  }

  getPasswordMinLengthMessage(){   
    return this.password.hasError('minlength')?'password at least must be of 4 character length' : '';
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
