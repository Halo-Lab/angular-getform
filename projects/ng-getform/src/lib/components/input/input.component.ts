import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationType } from '../../types';
import { addValidators, getErrorMessages } from '../../helpers';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() control!: FormControl;
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() type = 'text';
  @Input() multiRows = false;
  @Input() validator?: ValidationType[];

  @HostBinding('attr.class') @Input() className?: string = '';
  errorMessage!: {};

  constructor() { }

  ngOnInit(): void {
    if (this.validator) {
      addValidators(this.control, this.validator)
      this.errorMessage = getErrorMessages(this.validator)
    }
  }
}
