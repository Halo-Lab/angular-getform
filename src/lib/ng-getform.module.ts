import { TooltipModule } from './components/tooltip/tooltip.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { NgGetformComponent } from './ng-getform.component';

@NgModule({
  declarations: [
    NgGetformComponent,
    TooltipComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TooltipModule],
  exports: [NgGetformComponent],
})
export class NgGetformModule {}
