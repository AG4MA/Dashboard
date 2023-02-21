import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { DatabaseComponent } from './database/database.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { TeamComponent } from './team/team.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';



@NgModule({
  declarations: [
  
    DatabaseComponent,
       BachecaComponent,
       TeamComponent,
       ImpostazioniComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
  ],
  exports: [],
})
export class PrivateModule { }
