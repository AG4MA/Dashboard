import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrivateModule { }
