import { SampleRxjsComponent } from './sample-rxjs/sample-rxjs.component';
import { SampleReactFormComponent } from './sample-react-form/sample-react-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlBasicsComponent } from './html-basics/html-basics.component';
import { LoginComponent } from './login/login.component';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';
import { SampleDemoComponent } from './sample-demo/sample-demo.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'samples',component : SampleDemoComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'recipe', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'tour-heros', loadChildren: () => import('./tour-heros/tour-heros.module').then(m => m.TourHerosModule) },
  { path : 'users' ,component : UsersComponent},
  { path : 'users-det',component : SingleUserComponent },
  { path : 'html-basics',component : HtmlBasicsComponent },
  { path : 'material-basics',component : MaterialExamplesComponent },
  {
    path : 'sample-reactive-form',component : SampleReactFormComponent
  },
  {
    path : 'sample-rxjs',component : SampleRxjsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
