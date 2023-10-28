import {CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePipe, registerLocaleData} from '@angular/common';
import {NgbAccordionModule, NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


import localePt from '@angular/common/locales/pt';
import {CurrencyMaskModule} from "ng2-currency-mask";
import {NgSelectModule} from "@ng-select/ng-select";
import {OccurrenceComponent} from "./occurrence.component";
import {OccurrenceRoutingModule} from "./occurrence-routing.module";
import {OccurrenceUpdateComponent} from "./occurrence-update.component";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(localePt);


@NgModule({
  declarations: [OccurrenceComponent,
    OccurrenceUpdateComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    OccurrenceRoutingModule,
    NgbDatepickerModule,
    FontAwesomeModule,
    CurrencyMaskModule,
    NgSelectModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class OccurrenceModule {
}
