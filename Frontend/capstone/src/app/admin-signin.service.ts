import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signin } from './signin'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeSigninService {

  constructor(public http:HttpClient) { }

  checkLoginDetails(signin:Signin):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn",signin,
    {responseType:'text'});
  }

  loginAccountCreate(signin:Signin):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp",signin,
    {responseType:'text'});
  }
}
