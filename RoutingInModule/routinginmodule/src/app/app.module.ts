import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module'
import {AdminpanelModule} from './adminpanel/adminpanel.module'
@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AdminpanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
