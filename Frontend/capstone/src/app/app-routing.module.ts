import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MainComponent} from './main/main.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"signin", component:EmployeeSigninComponent},

  {path:"employee-dashboard/:employeeID", component:EmployeeDashboardComponent},
  {path:"admin-dashboard", component:AdminDashboardComponent}, 

  {path:"admin-signin", component:AdminSigninComponent},
  {path:"user-signin",component:UserSigninComponent},
  {path:"user-signup",component:UserSignupComponent},
  {path:"employee-signin",component:EmployeeSigninComponent},
  {path:"user-panel",component:UserPanelComponent},
  {path:"home",component:MainComponent},
  {path:"employeeDashboard",component:EmployeeDashboardComponent},
  {path:"userDashboard",component:UserDashboardComponent},
  {path:"employeelogout",component:EmployeeSigninComponent},
  {path:"", redirectTo:"home", pathMatch:"prefix"} //empty val passed then goto login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }