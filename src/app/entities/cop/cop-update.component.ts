import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {Cop} from "../model/cop.model";
import {CopService} from "../../service/cop.service";

@Component({
  selector: 'app-cop-update',
  templateUrl: './cop-update.component.html',
  styleUrls: ['./cop.component.scss']
})
export class CopUpdateComponent {

  constructor(private fb: FormBuilder, private copService: CopService) {
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
    const cop = {
      ...this.editForm.value
    } as Cop

    this.copService.create(cop).subscribe()
  }
}
