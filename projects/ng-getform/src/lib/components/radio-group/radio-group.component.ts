import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidationType } from '../../types';
import { addValidators, getErrorMessages } from '../../helpers';
import { FormService } from '../../service/form.service';


const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};

@Component({
  selector: 'lib-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [RADIO_VALUE_ACCESSOR],
})

export class RadioGroupComponent implements ControlValueAccessor, OnInit {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() items: { name: string, value: string }[] = [];
  @Input() orientation: string = 'vertical';
  @Input() control: FormControl = new FormControl();
  @Input() validator!: ValidationType[];

  @HostBinding('attr.class') @Input() className?: string = '';

  errorMessage!: any;
  innerValue!: string | number;
  validate: boolean = false;

  constructor(private formService: FormService) {
    this.formService.validate.subscribe((val) => this.validate = val)
  }

  ngOnInit() {
    if (this.validator) {
      addValidators(this.control, this.validator);
      this.errorMessage = getErrorMessages(this.validator);
    }
    this.innerValue = this.control.value;
  }

  writeValue(value: string | number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  change(value: string | number) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched(value);
  }
}

