import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {User} from "../model/user.model";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserUpdateComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  editForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(100)]],
    firstName: ['', [Validators.required, Validators.maxLength(100)]],
    lastName: [''],
    documentNumber: [''],
    password: [''],
    email: [''],
  });

  @ViewChild('form')
  form?: NgForm;


  create(): void {
    const user = {
      ...this.editForm.value
    } as User

    this.userService.create(user).subscribe(res => {
      this.router.navigate(['users'])
    })
  }
}
