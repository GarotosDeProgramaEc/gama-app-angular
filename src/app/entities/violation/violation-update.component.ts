import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Violation} from "../model/violation.model";
import {ViolationService} from "../../service/violation.service";

@Component({
  selector: 'app-violation-update',
  templateUrl: './violation-update.component.html',
  styleUrls: ['./violation.component.scss']
})
export class ViolationUpdateComponent {

  constructor(private fb: FormBuilder, private violationService: ViolationService, private router: Router) {
  }

  editForm = this.fb.group({
    code: ['', [Validators.required, Validators.maxLength(100)]],
    name: ['', [Validators.required, Validators.maxLength(100)]],
  });

  @ViewChild('form')
  form?: NgForm;


  create(): void {
    const violation = {
      ...this.editForm.value
    } as Violation

    this.violationService.create(violation).subscribe(res => {
      this.router.navigate(['violations'])

    })
  }
}
