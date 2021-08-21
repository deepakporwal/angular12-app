import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SampleDemoComponent } from './sample-demo/sample-demo.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'samples',component : SampleDemoComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'recipe', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'tour-heros', loadChildren: () => import('./tour-heros/tour-heros.module').then(m => m.TourHerosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
