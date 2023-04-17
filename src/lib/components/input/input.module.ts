import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { UnvalidIcon } from '../unvalid-icon/unvalid-icon.module';

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, UnvalidIcon],
    exports: [InputComponent],
})
export class Input { }
