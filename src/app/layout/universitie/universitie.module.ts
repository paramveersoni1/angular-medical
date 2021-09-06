import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UniversitieComponent } from './universitie.component';
import { AdduniComponent } from './adduni/adduni.component';


const routes : Routes  = [
  {
    path : '', component : UniversitieComponent
  }
]


@NgModule({
  declarations: [UniversitieComponent, AdduniComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    AdduniComponent
  ]
})
export class UniversitieModule { }
