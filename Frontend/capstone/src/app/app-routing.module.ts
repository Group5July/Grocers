import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';

const routes: Routes = [
  {path:"signin", component:EmployeeSigninComponent},
  //{path:"employee-dashboard/:user", component:EmployeeDashboardComponent},
  {path:"employee-dashboard", component:EmployeeDashboardComponent}, //for testing
  {path:"admin-dashboard", component:AdminDashboardComponent}, //for testing
  {path:"admin-signin", component:AdminSigninComponent},
  //{path:"employeelogout",component:DashboardComponent}, 
  //{path:"employeeDashboard",component:EmployeeDashboardComponent},

  {path:"employeelogout",component:EmployeeSigninComponent},
  {path:"", redirectTo:"home", pathMatch:"prefix"} //empty val passed then goto login
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }