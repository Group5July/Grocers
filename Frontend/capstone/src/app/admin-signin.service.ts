import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { EmployeeSignin } from './emplyeesignin'; 
import { AdminSignin } from './adminsignin'
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AdminSigninService {

  constructor(public http:HttpClient) { }


  checkLoginDetails(signin:AdminSignin):Observable<any>{
    return this.http.post("http://localhost:9090/admin/adminLogin",signin, {responseType:'text'});
  }

}
