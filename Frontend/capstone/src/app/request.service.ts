import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http:HttpClient) { }

  sendRequestDetails(request:Request):Observable<any>{
    return this.http.post("http://localhost:9090/api/request/storeRequest",request,
    {responseType:'text'});
  }

  getRequests(request:Request):Observable<any>{
    return this.http.post("http://localhost:9090/api/getRequests",request,
      {responseType: 'text'}
    )
  }
}
