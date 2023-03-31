import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { UnvalidIcon } from '../unvalid-icon/unvalid-icon.module';


@NgModule({
    declarations: [
        SelectComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, UnvalidIcon],
    exports: [SelectComponent],
})
export class Select { }
