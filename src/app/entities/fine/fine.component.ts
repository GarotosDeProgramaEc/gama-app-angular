import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FineService} from "../../service/fine.service";
import {Fine} from "../model/fine.model";

@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrls: ['./fine.component.scss']
})
export class FineComponent {
  page = 1
  totalItems = 1
  pageSize = 10
  fines: Fine[] = []

  constructor(public router: Router, public fineService: FineService) {
  }

  new() {
    this.router.navigate(['fines/new'])
  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    // @ts-ignore
    this.fineService.getAll({page: this.page}).subscribe((res: paginatedApiResponse<Fine>) => {
      this.fines = res?.results || []
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
