import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AppNavigationComponent } from '../pages/private/app-navigation/app-navigation.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from '../pages/private/home/home.component';

const COMPONENTS = [
  SidebarComponent,
  AppNavigationComponent,
  HomeComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class SharedModule { }
