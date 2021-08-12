import { Injectable } from '@angular/core';
import { uservaildation } from './UserValidation';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  data:uservaildation={
    id:1,
    name:'clark',
    email:'clark@gmail.com',
    address:'104 crypton'
  }
  
  
}
