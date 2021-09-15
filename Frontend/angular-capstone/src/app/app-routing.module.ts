import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  {path:"home/:uname",component:DashboardComponent},
  {path:"user-panel",component:UserPanelComponent},
  {path:"user-signin",component:UserSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
