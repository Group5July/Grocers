import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSigninService } from '../user-signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(
    public loginSer:UserSigninService,
    public router:Router
  ) { }   //DI for Login Service
    
  ngOnInit(): void {
  }
  flag :Number=0;
  msgerror?:string;
  msg?:string=""
  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    let flag = 0;
    this.loginSer.checkUserInfo(login).subscribe(result=> {
      
        if(result == "Success"){
          flag++;
          this.router.navigate(["user-panel"/*, login.user*/]);
        }
        else{
          this.msg="Failure login"
          flag+=1;
          if(flag == 3){
            this.msgerror="Account locked"
          }

        }
      },
      error=>console.log(error)
    )
  }

}