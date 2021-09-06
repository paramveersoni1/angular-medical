import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Directives
import { AmountDirective } from './directives/amount.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NoRecordComponent } from '../layout/common/no-record/no-record.component';
import { ReplaceUnderscorePipe } from './pipe/remove-underscore';
import { LightboxModule } from 'ngx-lightbox';
import { NgxScrollToFirstInvalidModule } from '@ismaestro/ngx-scroll-to-first-invalid';
import { SelectLanguage } from './pipe/select-language';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SeeMoreComponent } from './components/see-more/see-more.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const directives = [NumberOnlyDirective, AmountDirective, NoRecordComponent, ReplaceUnderscorePipe, SelectLanguage,
    SeeMoreComponent, ProductDetailsComponent];

const imports = [FormsModule, LightboxModule, ReactiveFormsModule, HttpClientModule, NgxPaginationModule,
    NgxScrollToFirstInvalidModule, NgSelectModule];

@NgModule({
    declarations: [
        ...directives
    ],
    imports: [
        CommonModule, NgMultiSelectDropDownModule.forRoot(),
        ...imports,
        BsDatepickerModule.forRoot(), AccordionModule.forRoot(),
        ModalModule.forRoot()
    ],
    exports: [
        ...directives,
        ...imports,
        BsDatepickerModule, NgMultiSelectDropDownModule, AccordionModule,
        ModalModule
    ],
    entryComponents: [ProductDetailsComponent],
    providers: []
})
export class SharedModule {
}
