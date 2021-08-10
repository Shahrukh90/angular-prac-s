import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpollation';
  company="samsung";
  getData(){
    return "apple data";
  }
  obj={
    name:"angular",
    age:5
  }
  arr=['peter','sam'];
  a=200;
  b=300;

  siteUrl=window.location.href;
}
