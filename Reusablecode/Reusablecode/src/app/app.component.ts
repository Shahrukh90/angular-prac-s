import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reusablecode';
  
  data=[
    {
      name:'bruce',
      age:23
    },
    {
      name:'peter',
      age:23
    },
    {
      name:'sam',
      age:23
    }
  ]
}
