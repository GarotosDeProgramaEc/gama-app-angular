import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {OccurrenceService} from "../../service/occurrence.service";
import {Occurrence} from "../model/occurrence.model";

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.scss']
})
export class OccurrenceComponent {
  page = 1
  pageSize = 10
  occurrences: Occurrence[] = []

  constructor(public router: Router, public occurrenceService: OccurrenceService) {
  }

  new() {
    this.router.navigate(['occurrences/new'])
  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.occurrenceService.getAll({page: this.page}).subscribe(res => {
      // @ts-ignore
      this.occurrences = res?.results || []
    })
  }

  previousPage() {
    this.page--
    this.loadAll()
  }

  nextPage() {
    this.page++
    this.loadAll()

  }
}
