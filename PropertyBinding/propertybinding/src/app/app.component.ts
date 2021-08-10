import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propertybinding';

  name="bruce";
  disablecheckbox=true;
  
  enableCheckbox(){
    this.disablecheckbox=false;
  }
}
