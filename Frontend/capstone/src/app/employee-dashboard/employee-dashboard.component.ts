import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

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
  
  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 

  ngOnInit(): void {
  }

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

}
