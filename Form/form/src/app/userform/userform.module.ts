import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersformComponent } from './usersform/usersform.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UsersformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    UsersformComponent
  ]
  
})
export class UserformModule { }
