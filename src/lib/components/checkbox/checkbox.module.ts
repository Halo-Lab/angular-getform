import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { UnvalidIcon } from '../unvalid-icon/unvalid-icon.module';

@NgModule({
    declarations: [
        CheckboxComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, UnvalidIcon],
    exports: [CheckboxComponent],
})
export class Checkbox { }
