//import statements
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminSigninService } from '../admin-signin.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  signinRef = new FormGroup({
    adminID: new FormControl(),
    adminePassword: new FormControl()
  });

  constructor(public signinSer: AdminSigninService, public router:Router) { }
  msg?:string;
  ngOnInit(): void {
  }

  checkUser() {
    let login = this.signinRef.value;
    this.signinSer.checkLoginDetails(login).
    subscribe(result=>{
      if(result=="Success"){
        //this.router.navigate(["home",login.email]);
        this.router.navigate(["admin-dashboard"/*,login.email*/])
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.signinRef.reset();
  }

}
