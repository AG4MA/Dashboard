import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DatabaseComponent } from "./database/database.component";
import { HomeComponent } from "./home/home.component";
import { ImpostazioniComponent } from "./impostazioni/impostazioni.component";
import { PrivateComponent } from "./private.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'database',
        component: DatabaseComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'impostazioni',
        component: ImpostazioniComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
