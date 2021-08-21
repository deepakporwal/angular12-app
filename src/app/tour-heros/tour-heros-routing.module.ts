import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourHerosComponent } from './tour-heros.component';

const routes: Routes = [{ path: '', component: TourHerosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourHerosRoutingModule { }
