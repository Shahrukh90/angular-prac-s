import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import {UserComponent} from './user/user.component'

const routes: Routes = [
  {path:"admin panel admin",component:AdminComponent},{path:"admin panel user",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpanelRoutingModule { }
