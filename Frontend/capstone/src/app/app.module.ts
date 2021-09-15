import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSigninComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
