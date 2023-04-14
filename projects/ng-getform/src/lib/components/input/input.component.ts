import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationType } from '../../types';

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
  @Input() errorMessages: any;
  @Input() validator?: ValidationType[];

  @HostBinding('attr.class') @Input() className?: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.validator) {
      console.log(this.validator)
    }
  }
}
