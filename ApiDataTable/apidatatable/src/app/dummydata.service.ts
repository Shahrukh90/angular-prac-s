import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface data{
  id:any;
  email:any;
  first_name:any;
  last_name:any;
  avatar:any;
  data:any;
}

@Injectable({
  providedIn: 'root'
})
export class DummydataService {


  constructor(private http:HttpClient) { }
  getData():Observable<data>{
    let url='https://reqres.in/api/users?page=1';
    return this.http.get<data>(url);
  }
}
