import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DxCheckBoxModule, DxHtmlEditorModule, DxSelectBoxModule } from 'devextreme-angular';
import { MaterialModule } from '../material/material.module';
import { AppNavigationComponent } from '../pages/private/app-navigation/app-navigation.component';
import { DatabaseComponent } from '../pages/private/database/database.component';
import { HomeComponent } from '../pages/private/home/home.component';
import { ImpostazioniComponent } from '../pages/private/impostazioni/impostazioni.component';
import { BachecaComponent } from '../pages/private/team/bacheca/bacheca.component';
import { CalendarComponent } from '../pages/private/team/calendar/calendar.component';
import { TeamComponent } from '../pages/private/team/team.component';
import { TeamModule } from '../pages/private/team/team.module';
import { SidebarComponent } from './sidebar/sidebar.component';


const COMPONENTS = [
  SidebarComponent,
  AppNavigationComponent,
  DatabaseComponent,
  TeamComponent,
  ImpostazioniComponent,
  HomeComponent,
  BachecaComponent,
  CalendarComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DxCheckBoxModule,
    DxHtmlEditorModule,
    DxSelectBoxModule,
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class SharedModule { }
