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

  msg?:string=""
  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    let flag = 0;
    this.loginSer.checkUserInfo().subscribe(result=> {
      for(let ll of result){
        if(ll.user == login.user && ll.pass == login.pass){
          flag++;
          this.router.navigate(["user-panel"/*, login.user*/]);
        }
      }
        if(flag>0){
          this.msg="Successfully login"
        }
        else{
          this.msg="Failure login"
        }
    });
    flag = 0;
  }

}