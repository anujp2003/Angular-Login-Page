import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(public authService: AuthService) { }
  form = new FormGroup({
    email: new FormControl('', Validators.email)

  });

  get email() {
    return this.form.get('email');
  }


}


