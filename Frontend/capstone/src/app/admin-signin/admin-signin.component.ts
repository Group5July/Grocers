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
  msg?:string ='';

  signinRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(public signinSer: AdminSigninService, public router:Router) { }
  ngOnInit(): void {
  }

  checkAdmin(){
    let login = this.signinRef.value;

    this.signinSer.checkLoginDetails(login).subscribe(result=>{
      
      if (result=="found"){
        this.router.navigate(['admin-dashboard', login.username]);
      }
      else {
        this.msg = 'Invalid credentials. Please try again.'
      }
    });
  }


}
