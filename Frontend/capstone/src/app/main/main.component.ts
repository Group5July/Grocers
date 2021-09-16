import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 

  ngOnInit(): void {

  }

  go_toadmin(){
  	this.router.navigate(["admin-signin"])
  }

  go_touser(){
  	this.router.navigate(["user-signin"])
  }

  go_toemployee(){
  	this.router.navigate(["signin"])
  }

}
