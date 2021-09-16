import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(
    public router:Router
  ) { }   //DI for Login Service

  ngOnInit(): void {
  }


  register(loginRef:NgForm){

  }
}
