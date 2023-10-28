import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {OccurrenceService} from "../../service/occurrence.service";
import {Router} from "@angular/router";
import {User} from "../model/user.model";

@Component({
  selector: 'app-occurrence-update',
  templateUrl: './occurrence-update.component.html',
  styleUrls: ['./occurrence.component.scss']
})
export class OccurrenceUpdateComponent {

  constructor(private fb: FormBuilder, private occurrenceService: OccurrenceService, private router: Router) {
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
    const occurrence = {
      ...this.editForm.value
    } as User

    this.occurrenceService.create(occurrence).subscribe(res => {
      this.router.navigate(['occurrences'])

    })
  }
}
