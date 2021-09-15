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

  
  checkUser(loginRef:NgForm){

  }

}

