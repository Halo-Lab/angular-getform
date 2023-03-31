import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../tooltip/tooltip.module';
import { UnvalidIconComponent } from './unvalid-icon.component';


@NgModule({
    declarations: [
        UnvalidIconComponent,
    ],
    imports: [CommonModule, TooltipModule],
    exports: [UnvalidIconComponent],
})
export class UnvalidIcon { }