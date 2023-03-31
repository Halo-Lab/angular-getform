import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from './components/checkbox/checkbox.module';
import { Select } from './components/select/select.module';
import { NgGetformComponent } from './ng-getform.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipModule } from './components/tooltip/tooltip.module';
import { RadioGroup } from './components/radio-group/radio-group.module';
import { Button } from './components/button/button.module';
import { UnvalidIcon } from './components/unvalid-icon/unvalid-icon.module';
import { Input } from './components/input/input.module';

@NgModule({
  declarations: [
    NgGetformComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Checkbox,
    Select,
    RadioGroup,
    Button,
    Input,
    TooltipModule,
    UnvalidIcon],
  exports: [NgGetformComponent],
})
export class NgGetForm { }
