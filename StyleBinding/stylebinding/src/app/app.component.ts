import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stylebinding';
  color="blue"
  err=true
  updateColor(){
    this.color="yellow"
  }
}
