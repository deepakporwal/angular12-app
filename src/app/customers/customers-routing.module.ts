import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerManageComponent } from './customer-manage/customer-manage.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: 'manage', component: CustomerManageComponent },
  { path: '', component: CustomerListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
