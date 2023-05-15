import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FineComponent} from "./fine.component";
import {AuthGuard} from "../../service/auth-guard.service";

const routes: Routes = [
  { path: '', component: FineComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FineRoutingModule { }
