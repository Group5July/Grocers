import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserPanelComponent } from './user-panel/user-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserSigninComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
