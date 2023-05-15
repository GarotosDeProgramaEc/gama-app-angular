import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OccurrenceComponent} from "./occurrence.component";
import {AuthGuard} from "../../service/auth-guard.service";

const routes: Routes = [
  { path: '', component: OccurrenceComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccurrenceRoutingModule { }
