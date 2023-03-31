import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ButtonComponent],
})
export class Button { }
