import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface data{
  id:string;
  email:string;
  first_name:string;
  last_name:string;
  avatar:string;
}

@Injectable({
  providedIn: 'root'
})

export class DummydataService {

  constructor(private http:HttpClient) { }
  getData():Observable<data>{
    let url='https://reqres.in/api/users?page=2';
    return this.http.get<data>(url);
  }
}
