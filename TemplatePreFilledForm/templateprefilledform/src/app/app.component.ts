import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateprefilledform';
  user={
    email:'some@some.com',
    password:'12345'
  }
  onSubmit(data:any){
    console.warn(data)
  }
}
