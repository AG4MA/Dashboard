import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './pages/private/private.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'private/app-navigation',
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
  // {
  /*path: 'auth/login',
  loadChildren: () =>
    import('./pages/public/login/login.module').then(
      (m) => m.LoginPageModule
    ),
  canActivate: [AuthGuard]*/
  // },
  {
    path: '**',
    redirectTo: 'private/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
