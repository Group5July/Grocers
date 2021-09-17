import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  //---update ninfs
  send_mini_comp = false;
  unlock_mini_comp = false;
  update_mini_comp = false;
  edit_mini_comp = false;
  
  change_email = false;
  change_password = false;

  msg?:string;

  e_firstn?:string;
  e_lastn?:string;
  e_id?:string;
  e_email?:string;
  e_password?:string;


  //employeeId?:string;

  requestRef = new FormGroup({
    product_id:new FormControl(),
    employee_name:new FormControl()
  })
  
  updateDeRef = new FormGroup({
    emailID:new FormControl(),
    employeePassword:new FormControl()
  })

  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public requestSer:RequestService,
    public employeeSer:EmployeeService) { } 
  

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.e_id);
    console.log(this.e_id);
    
  }

  //--functions to manipulate nifs
  e_send(){
    this.set_minicomps_false();
    this.send_mini_comp = true;
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
    this.getEmployeeInfo();
  }
  
  e_logout(){
    this.router.navigate(["employeelogout"])
  }

  set_minicomps_false(){
    this.send_mini_comp = false;
    this.unlock_mini_comp = false;
    this.update_mini_comp = false;
    this.edit_mini_comp = false;
  }

  

  //--Sending Requests functions
  sendRequest(){
    let requestInfo = this.requestRef.value;
    
    this.requestSer.sendRequestDetails(requestInfo).subscribe(result=>this.msg = result,error=>console.log(error));
    this.requestRef.reset();
  }


  

  //-------UPdating Profile functions

  updateProfile(){

    this.change_password = false;
    this.change_email = false;
  }

  getEmployees(){

  }

  changeEmail(){
    this.change_email = true;
  }

  changePassword(){
    this.change_password = true;
  }

  updateEmployeeInfo(){
    
  }

  //--randon functions
  clear_msg(){
    this.msg = "";
  }

  getEmployeeInfo(){
    //THIS CODE IS STILL NOT WORKING AS I WOULD LIKE--
    let temp_emp:Employee = {employeeID:"1345"};
    
    //console.log(temp_emp);
    this.employeeSer.getEmployeeDetails(temp_emp).subscribe((data)=>{
      // console.log(typeof(data));
      // this.e_lastn = data.lastName;
      // this.e_firstn = data.firstName;
      // this.e_password = data.employeePassword;
      let first_string = data;
      //console.log(typeof(first_string)+ "type");
      //let found_emp = JSON.parse(first_string.slice(1,-1));
      console.log("Employee value" + first_string);
      // this.e_lastn = found_emp.lastName;
      // this.e_firstn = found_emp.firstName;
      // this.e_password = found_emp.employeePassword;
      // this.e_email = found_emp.emailID;

    })
    

    
    console.log(this.e_firstn);
    //this.e_password = "1234";
  }
  

}
