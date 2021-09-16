import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';

const routes: Routes = [
  {path:"signin", component:EmployeeSigninComponent},
  {path:"employee-dashboard/:user", component:EmployeeDashboardComponent},
  {path:"", redirectTo:"home", pathMatch:"prefix"} //empty val passed then goto login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
