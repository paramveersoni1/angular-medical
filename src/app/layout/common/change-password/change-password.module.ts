import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ChangePasswordComponent } from './change-password.component';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ChangePasswordComponent
  ],
  entryComponents: [
    ChangePasswordComponent
  ]
})
export class ChangePasswordModule { }
