import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TDashService {

  

  getUserData(){

    let apiurl="http://localhost:3000/users";
    return this.http.get(apiurl);
  }
  getData(){
    let apiurl1="http://localhost:3333/Myapp/countries";
    return this.http.get(apiurl1);
  }
     
   


  constructor(private http: HttpClient) { }
}
