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
  confirm_add_mini_comp = false;

  newProductRef = new FormGroup({
    productName: new FormControl(),
    productPrice: new FormControl(),
    productQuantity : new FormControl()
  });
  
  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 

  ngOnInit(): void {
  }

  set_minicomps_false(){
    this.add_mini_comp = false;
    this.delete_mini_comp = false;
    this.update_mini_comp = false;
    this.view_mini_comp = false;
    this.confirm_add_mini_comp = false;
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

  storeProductInfo() {
    this.set_minicomps_false();
    this.confirm_add_mini_comp = true;
  }
  

  

}
