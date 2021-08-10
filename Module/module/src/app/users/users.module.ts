import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { Module2Component } from './module2/module2.component';



@NgModule({
  
  declarations: [
    UserlistComponent,
    Module2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserlistComponent,
    Module2Component
  ]

})
export class UsersModule { }
