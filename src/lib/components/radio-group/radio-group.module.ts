import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
import { UnvalidIcon } from '../unvalid-icon/unvalid-icon.module';

@NgModule({
    declarations: [
        RadioGroupComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, UnvalidIcon],
    exports: [RadioGroupComponent],
})
export class RadioGroup { }
