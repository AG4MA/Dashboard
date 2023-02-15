import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'private/home',
  pathMatch: 'full',
},
{
  /*path: 'auth/login',
  loadChildren: () =>
    import('./pages/public/login/login.module').then(
      (m) => m.LoginPageModule
    ),
  canActivate: [AuthGuard]*/
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class PrivateRoutingModule { }
