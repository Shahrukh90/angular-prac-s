import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummydataService {

  constructor(private http:HttpClient) { }
  getData(){
    let url='https://dummy.restapiexample.com/api/v1/employees';
    return this.http.get(url);
  }
}
