import { Component } from '@angular/core';
import { UsersdataService } from './usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  name="";
  id=0;
  age=0;

  constructor(private user:UsersdataService){
    console.log(this.user.getData())
    let data=this.user.getData();
    this.name=data.name;
    this.id=data.id;
    this.age=data.age;
  }
}
