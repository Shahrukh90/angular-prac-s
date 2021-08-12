import { Component } from '@angular/core';
import { uservaildation } from './UserValidation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model';
  name='some thing';  

  std1:uservaildation={
    id:1,
    name:'bruce',
    email:'bruce@gmail.com',
    address:'401 lal marg'
  }         
  
}
