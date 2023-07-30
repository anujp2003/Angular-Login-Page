import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(public authService: AuthService) { }
  form = new FormGroup({
    firstname: new FormControl('', [Validators.maxLength(12)]),
    lastname: new FormControl('', [Validators.maxLength(12)]),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    date: new FormControl(''),
    gender: new FormControl(''),
  });
  hide = true;

  LoginUser() {
    console.log(this.form.value);
  }

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get date() {
    return this.form.get('date');
  }
 
}