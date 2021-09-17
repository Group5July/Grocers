import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { FormControl, FormGroup } from '@angular/forms';

const _:any = ('../assets/cart-management/savedcart.js')

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})


export class UserPanelComponent implements OnInit {

  raiseTicket_mini_comp = false;
  selectItem_mini_comp = false;
  deleteItem_mini_comp = false;
  viewCart_mini_comp = false;
  editProfile_mini_comp = false;
  fund_mini_comp = false;
  orderStatus_mini_comp = false;
  checkOut_mini_comp = false;

  confirm_raiseTicket_mini_comp = false;
  confirm_selectItem_mini_comp = false;
  confirm_deleteItem_mini_comp = false;
  confirm_viewCart_mini_comp = false;
  confirm_checkOut_mini_comp = false;
  confirm_orderStatus_mini_comp = false;
  confirm_editProfile_mini_comp = false;
  confirm_fund_mini_comp = false;
  


  newItemRef = new FormGroup({
    itemName: new FormControl(),
    itemPrice: new FormControl(),
    itemQuantity : new FormControl()
  });

  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 

  ngOnInit(): void {
  }

  u_RaiseTicket(){
    this.set_minicomps_false();
    this.raiseTicket_mini_comp = true;
  }

  u_SelectItem(){
    this.set_minicomps_false();
    this.selectItem_mini_comp = true;
  }

  u_DeleteItem(){
    this.set_minicomps_false();
    this.deleteItem_mini_comp = true;
  }

  u_ViewCart(){
    this.set_minicomps_false();
    this.viewCart_mini_comp = true;
  }

  u_CheckOut(){
    this.set_minicomps_false();
    this.checkOut_mini_comp = true;
  }

  u_EditProfile(){
    this.set_minicomps_false();
    this.editProfile_mini_comp = true;
  }

  u_OrderStatus(){
    this.set_minicomps_false();
    this.orderStatus_mini_comp = true;
  }

  u_Fund(){
    this.set_minicomps_false();
    this.fund_mini_comp = true;
  }
  
  u_logout(){
    this.router.navigate(["user-signin"])
  }


  raiseTicketInfo() {
    this.set_minicomps_false();
    this.confirm_raiseTicket_mini_comp = true;
  }

  selectItemInfo() {
    this.set_minicomps_false();
    this.confirm_selectItem_mini_comp = true;
  }

  deleteItemInfo() {
    this.set_minicomps_false();
    this.confirm_deleteItem_mini_comp = true;
  }

  viewCartInfo() {
    this.set_minicomps_false();
    this.confirm_viewCart_mini_comp = true;
  }

  checkOutInfo() {
    this.set_minicomps_false();
    this.confirm_checkOut_mini_comp = true;
  }

  orderStatusInfo() {
    this.set_minicomps_false();
    this.confirm_orderStatus_mini_comp = true;
  }

  editProfileInfo() {
    this.set_minicomps_false();
    this.confirm_editProfile_mini_comp = true;
  }

  fundInfo() {
    this.set_minicomps_false();
    this.confirm_fund_mini_comp = true;
  }



  set_minicomps_false(){

    this.raiseTicket_mini_comp = false;
    this.selectItem_mini_comp = false;
    this.deleteItem_mini_comp = false;
    this.viewCart_mini_comp = false;
    this.checkOut_mini_comp = false;
    this.orderStatus_mini_comp = false;
    this.editProfile_mini_comp = false;
    this.fund_mini_comp = false;

  }



}
