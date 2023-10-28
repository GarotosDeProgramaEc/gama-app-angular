import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ViolationService} from "../../service/violation.service";
import {Violation} from "../model/violation.model";

@Component({
  selector: 'app-violation',
  templateUrl: './violation.component.html',
  styleUrls: ['./violation.component.scss']
})
export class ViolationComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  violations: Violation[] = []

  constructor(public router: Router, public violationService: ViolationService) {
  }

  new() {
    this.router.navigate(['violations/new'])
  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.violationService.getAll({page: this.page}).subscribe((res: paginatedApiResponse<Violation>) => {
      this.violations = res?.results || []
      this.page = res?.pageNumber || 0
      this.totalItems = res?.count || 0
      this.pageSize = res?.size || 0
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

  loadPage(page: number) {
    this.page = page

    this.loadAll()
  }
}
