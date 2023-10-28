import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OccurrenceComponent} from "./occurrence.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {OccurrenceUpdateComponent} from "./occurrence-update.component";

const routes: Routes = [
  { path: '', component: OccurrenceComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'new', component: OccurrenceUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccurrenceRoutingModule { }
