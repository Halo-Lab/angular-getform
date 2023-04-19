import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgGetformComponent } from './ng-getform.component';

@NgModule({
  declarations: [
    NgGetformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgGetformComponent],
})
export class NgGetForm { }
