import {CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePipe, registerLocaleData} from '@angular/common';
import {NgbAccordionModule, NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


import localePt from '@angular/common/locales/pt';
import {CurrencyMaskModule} from "ng2-currency-mask";
import {NgSelectModule} from "@ng-select/ng-select";
import {FineComponent} from "./fine.component";
import {FineRoutingModule} from "./fine-routing.module";

registerLocaleData(localePt);


@NgModule({
  declarations: [FineComponent

  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    FineRoutingModule,
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
export class FineModule {
}
