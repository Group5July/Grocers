import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; //import
import { EmployeeSigninService } from '../employee-signin.service';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css']
})
export class EmployeeSigninComponent implements OnInit {

  signinRef = new FormGroup({
    employeeID: new FormControl(),
    employeePassword: new FormControl()
  });

  constructor(public signinSer: EmployeeSigninService, public router:Router) { }
  msg?:string;
  ngOnInit(): void {
  }

  checkUser() {
    let login = this.signinRef.value;
    this.signinSer.checkLoginDetails(login).
    subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["home",login.email]);
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.signinRef.reset();
  }

}
