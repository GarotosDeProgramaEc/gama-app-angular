import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Fine} from "../model/fine.model";
import {FineService} from "../../service/fine.service";

@Component({
  selector: 'app-fine-update',
  templateUrl: './fine-update.component.html',
  styleUrls: ['./fine.component.scss']
})
export class FineUpdateComponent {

  constructor(private fb: FormBuilder, private fineService: FineService, private router: Router) {
  }

  editForm = this.fb.group({
    licensePlate: ['', [Validators.required, Validators.maxLength(100)]],
    latitude: ['', [Validators.required, Validators.maxLength(100)]],
    longitude: ['', [Validators.required, Validators.maxLength(100)]],
  });

  @ViewChild('form')
  form?: NgForm;


  create(): void {
    const fine = {
      ...this.editForm.value
    } as Fine

    this.fineService.create(fine).subscribe(res => {
      this.router.navigate(['violations'])

    })
  }
}
