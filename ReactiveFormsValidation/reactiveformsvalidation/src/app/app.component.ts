import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveformsvalidation';
  loginform = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  getData(){
    console.warn(this.loginform.value);
  }
  get email():any{return this.loginform.get('email')}
  get password():any{return this.loginform.get('password')}


}
