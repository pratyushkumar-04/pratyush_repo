import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
{ path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },
  {path:'addcustomer',component:AddCustomerComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'addtrasaction',component:AddTransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
