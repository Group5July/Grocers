import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  viewCart_mini_comp = false;
  editProfile_mini_comp = false;
  fund_mini_comp = false;
  orderStatus_mini_comp = false;
  checkOut_mini_comp = false;
  
  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 

  ngOnInit(): void {
  }

  a_ViewCart(){
    this.set_minicomps_false();
    this.viewCart_mini_comp = true;
  }

  a_EditProfile(){
    this.set_minicomps_false();
    this.editProfile_mini_comp = true;
  }

  a_Fund(){
    this.set_minicomps_false();
    this.fund_mini_comp = true;
  }
  
  a_OrderStatus(){
    this.set_minicomps_false();
    this.orderStatus_mini_comp = true;
  }
  a_CheckOut(){
    this.set_minicomps_false();
    this.checkOut_mini_comp = true;
  }

  set_minicomps_false(){
    this.viewCart_mini_comp = false;
    this.editProfile_mini_comp = false;
    this.fund_mini_comp = false;
    this.orderStatus_mini_comp = false;
    this.checkOut_mini_comp = false;
  }

}