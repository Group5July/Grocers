import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  send_mini_comp = false;
  unlock_mini_comp = false;
  update_mini_comp = false;
  edit_mini_comp = false;

  msg?:string;

  requestRef = new FormGroup({
    product_id:new FormControl(),
    employee_name:new FormControl()
  })
  
  constructor(public activateRoute:ActivatedRoute,public router:Router,public requestSer:RequestService) { } 
  

  ngOnInit(): void {
  }

  //this is to manipulate the *ngIfs
  e_send(){
    this.set_minicomps_false();
    this.send_mini_comp = true;
  
    //let requestInfo = this.requestRef.value;
    
  }

  sendRequest(){
    let requestInfo = this.requestRef.value;
    
    this.requestSer.sendRequestDetails(requestInfo).subscribe(result=>this.msg = result,error=>console.log(error));
    this.requestRef.reset();
  }

  updateEmployeeInfo(){
    
  }

  e_update(){
    this.set_minicomps_false();
    this.update_mini_comp = true;
  }

  e_unlock(){
    this.set_minicomps_false();
    this.unlock_mini_comp = true;
  }
  
  e_edit(){
    this.set_minicomps_false();
    this.edit_mini_comp = true;
  }
  
  e_logout(){
    this.router.navigate(["employeelogout"])
  }

  clear_msg(){
    this.msg = "";
  }

  set_minicomps_false(){
    this.send_mini_comp = false;
    this.unlock_mini_comp = false;
    this.update_mini_comp = false;
    this.edit_mini_comp = false;
  }

}
