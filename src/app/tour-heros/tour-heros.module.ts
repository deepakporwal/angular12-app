import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourHerosRoutingModule } from './tour-heros-routing.module';
import { TourHerosComponent } from './tour-heros.component';


@NgModule({
  declarations: [
    TourHerosComponent
  ],
  imports: [
    CommonModule,
    TourHerosRoutingModule
  ]
})
export class TourHerosModule { }
