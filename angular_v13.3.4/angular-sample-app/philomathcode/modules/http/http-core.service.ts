import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCoreService {

  constructor(private _http:HttpClient) { }

  getRequest(url:string)
  {
    return this._http.get(url);
  }
  postRequest(url:string, postData:any)
  {
    return this._http.post(url,postData);
  }
}
