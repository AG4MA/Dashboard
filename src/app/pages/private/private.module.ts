import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BachecaComponent } from './bacheca/bacheca.component';
import { DatabaseComponent } from './database/database.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    DatabaseComponent,
    BachecaComponent,
    TeamComponent,
    ImpostazioniComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ],
  exports: [],
})
export class PrivateModule { }
