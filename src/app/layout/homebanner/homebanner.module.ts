import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { HomebannerComponent } from './homebanner.component';
import { AddbannerComponent } from './addbanner/addbanner.component';

const routes : Routes  = [
  {
    path : '', component : HomebannerComponent
  }
]

@NgModule({
  declarations: [ HomebannerComponent, AddbannerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    AddbannerComponent
  ]
})
export class HomebannerModule { }
