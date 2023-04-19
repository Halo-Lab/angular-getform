import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from '../tooltip/tooltip.module';
import { UnvalidIconComponent } from './unvalid-icon.component';
import { TooltipComponent } from '../tooltip/tooltip.component';


@NgModule({
    declarations: [
        UnvalidIconComponent,
        TooltipComponent
    ],
    imports: [CommonModule, TooltipModule],
    exports: [UnvalidIconComponent],
})
export class UnvalidIcon { }