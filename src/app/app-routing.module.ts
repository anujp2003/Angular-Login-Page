import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //   { path: 'loginpage', component: LoginpageComponent },
    //   { path: 'navigation', component: NavigationComponent },
    //   { path: 'reactive/:id/:Title/:Detail', component: ReactiveFormComponent },
    //   { path: 'registration', component: RegistrationComponent },
    //   { path: 'forgotpass', component: ForgotPasswordComponent },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
