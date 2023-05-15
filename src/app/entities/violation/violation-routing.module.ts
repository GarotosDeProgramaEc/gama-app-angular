import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViolationComponent} from "./violation.component";
import {AuthGuard} from "../../service/auth-guard.service";

const routes: Routes = [
  { path: '', component: ViolationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViolationRoutingModule { }
