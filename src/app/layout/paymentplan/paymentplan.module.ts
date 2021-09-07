import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PaymentplanComponent } from './paymentplan.component';
import { AddpaymentplanComponent } from './addpaymentplan/addpaymentplan.component';


const routes : Routes  = [
  {
    path : '', component : PaymentplanComponent
  }
]

@NgModule({
  declarations: [PaymentplanComponent, AddpaymentplanComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents : [
    AddpaymentplanComponent
  ]
})
export class PaymentplanModule { }
