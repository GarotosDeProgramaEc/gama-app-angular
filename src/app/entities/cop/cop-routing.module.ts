import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CopComponent} from "./cop.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {CopUpdateComponent} from "./cop-update.component";

const routes: Routes = [
  { path: '', component: CopComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'new', component: CopUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopRoutingModule { }
