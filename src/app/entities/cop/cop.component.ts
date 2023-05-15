import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Cop} from "../model/cop.model";
import {CopService} from "../../service/cop.service";

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.scss']
})
export class CopComponent {

  cops: Cop[] = []

  constructor(public router: Router, public copService: CopService) {
  }

  new() {
    this.router.navigate(['cops/new'])
  }

  ngOnInit(): void {
    // @ts-ignore
    this.copService.getAll().subscribe(res => {
      // @ts-ignore
      this.users = res?.results || []
    })
  }
}
