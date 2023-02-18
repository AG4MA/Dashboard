import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'private/home',
    pathMatch: 'full',
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./pages/private/private.module').then(
        (m) => m.PrivateModule
      ),
    //canActivate: [AuthGuard]
  },
  {
    /*path: 'auth/login',
    loadChildren: () =>
      import('./pages/public/login/login.module').then(
        (m) => m.LoginPageModule
      ),
    canActivate: [AuthGuard]*/
  },
  {
    path: '**',
    redirectTo: 'private/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
