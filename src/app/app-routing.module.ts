import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { AuthGuard } from './services/guards/auth.guard';
import { LayoutGuard } from './services/guards/layout.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginModule',
    data: { title: 'Login', breadcrumb: 'Login' }, canActivate: [AuthGuard]
  },
  {
    path: 'reset-password-respondent', loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
    data: { title: 'Reset Password Respondent', breadcrumb: 'Reset Password Respondent' }
  },
  {
    path: 'reset-password-client', loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
    data: { title: 'Reset Password Client', breadcrumb: 'Reset Password Client' }
  },
  {
    path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [LayoutGuard]
  },
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
