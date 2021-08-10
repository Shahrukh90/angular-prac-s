import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'for';
  arr=['peter','sam','bruce']
  obj=[
    {
      name:'peter',
      age:23,
      email:'test@Test.com'
    },
    {
      name:'sam',
      age:28,
      email:'test@Test.com'
    },{
      name:'bruce',
      age:30,
      email:'test@Test.com'
    },
  ]
}
