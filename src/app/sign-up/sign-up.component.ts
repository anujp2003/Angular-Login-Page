import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  public showPassword: boolean = false;
  form = new FormGroup({
    fullname: new FormControl('', [Validators.maxLength(12)]),

    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    date: new FormControl(''),
    gender: new FormControl(''),
  });
  hide = true;
  show = false;
  LoginUser() {
    console.log(this.form.value);
  }

  get fullname() {
    return this.form.get('fullname');
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
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
