import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SampleDemoComponent } from './sample-demo/sample-demo.component';

const routes: Routes = [{
  path : 'samples',component : SampleDemoComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : '**', component : LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
