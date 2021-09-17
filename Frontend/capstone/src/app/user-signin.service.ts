import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signin } from './user-signin.model';

@Injectable({
  providedIn: 'root'
})
export class UserSigninService {

  constructor(public http:HttpClient) { }

  checkUserInfo(loginCheck:Signin):Observable<any>{
    return this.http.post("http://locolhost:9090/api/user/signIn", loginCheck,{responseType:'text'}) ;
  }

}