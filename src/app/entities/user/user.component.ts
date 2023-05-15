import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../model/user.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users: User[] = []

  constructor(public router: Router, public userService: UserService, private toastr: ToastrService) {
  }

  new() {
    this.router.navigate(['users/new'])
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      // @ts-ignore
      this.users = res?.results || []
    })

  }
}
