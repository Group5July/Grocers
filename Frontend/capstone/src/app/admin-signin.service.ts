import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeSignin } from './emplyeesignin'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AdminSigninService {

  constructor(public http:HttpClient) { }

  checkLoginDetails(signin:EmployeeSignin):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn",signin,
    {responseType:'text'});
  }

  loginAccountCreate(signin:EmployeeSignin):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp",signin,
    {responseType:'text'});
  }
}
