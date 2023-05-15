import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {UserUpdateComponent} from "./user-update.component";

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'new', component: UserUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
