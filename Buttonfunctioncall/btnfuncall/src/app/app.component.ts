import { getLocaleDayNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'btnfuncall';
  name='ben'
  getName(){
    return alert(this.name)
  }

}


