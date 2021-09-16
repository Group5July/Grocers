import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  add_mini_comp = false;
  delete_mini_comp = false;
  update_mini_comp = false;
  view_mini_comp = false;
  add_employee_mini_comp = false;
  delete_employee_mini_comp = false;
  report_mini_comp = false;
  confirm_add_mini_comp = false;
  confirm_delete_mini_comp = false;
  confirm_update_mini_comp = false;
  confirm_add_employee = false;
  confirm_delete_employee = false;
  confirm_report = false;

  newProductRef = new FormGroup({
    productName: new FormControl(),
    productPrice: new FormControl(),
    productQuantity : new FormControl()
  });

  newEmployeeRef = new FormGroup({
    employeeFirstName: new FormControl(),
    employeeLastName: new FormControl(),
    employeeEmail : new FormControl(),
    employeePassword : new FormControl(),
  });

  
  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 

  ngOnInit(): void {
  }

  set_minicomps_false(){
    this.add_mini_comp = false;
    this.delete_mini_comp = false;
    this.update_mini_comp = false;
    this.view_mini_comp = false;
    this.add_employee_mini_comp = false;
    this.delete_employee_mini_comp = false;
    this.report_mini_comp = false;
    this.confirm_add_mini_comp = false;
    this.confirm_delete_mini_comp = false
    this.confirm_update_mini_comp = false;
    this.confirm_add_employee = false;
    this.confirm_delete_employee = false;
    this.confirm_report = false;
  }

  a_AddProducts(){
    this.set_minicomps_false();
    this.add_mini_comp = true;
  }

  a_DeleteProducts(){
    this.set_minicomps_false();
    this.delete_mini_comp = true;
  }

  a_UpdateProducts(){
    this.set_minicomps_false();
    this.update_mini_comp = true;
  }
  
  a_ViewRequests(){
    this.set_minicomps_false();
    this.view_mini_comp = true;
  }

  a_AddEmployee(){
    this.set_minicomps_false();
    this.add_employee_mini_comp = true;
  }

  a_DeleteEmployee(){
    this.set_minicomps_false();
    this.delete_employee_mini_comp = true;
  }

  a_GenerateReport(){
    this.set_minicomps_false();
    this.report_mini_comp = true;
  }

  storeProductInfo() {
    this.set_minicomps_false();
    this.confirm_add_mini_comp = true;
  }

  deleteProductInfo() {
    this.set_minicomps_false();
    this.confirm_delete_mini_comp = true;
  }

  updateProductInfo() {
    this.set_minicomps_false();
    this.confirm_update_mini_comp = true;
  }

  addEmployeeInfo() {
    this.set_minicomps_false();
    this.confirm_add_employee = true;
  }

  deleteEmployeeInfo() {
    this.set_minicomps_false();
    this.confirm_delete_employee = true;
  }

  leaveReport() {
    this.set_minicomps_false();
    this.confirm_report = true;
  }

}
