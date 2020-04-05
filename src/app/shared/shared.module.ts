import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FieldErrorDisplayComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    FieldErrorDisplayComponent,
    NgxLoadingModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
