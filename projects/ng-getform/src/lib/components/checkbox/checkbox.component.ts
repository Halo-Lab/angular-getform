import { Component, OnInit, Input, forwardRef, HostBinding } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { addValidators, getErrorMessages } from "../../helpers";
import { ValidationType } from "../../types";
import { FormService } from "../../service/form.service";
import { Subscription } from "rxjs";

let integer: number = 1;

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})

export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() validator!: ValidationType[];
  @HostBinding('attr.class') @Input() className?: string = '';

  id: string = ''
  isChecked!: boolean;
  errorMessage!: {};
  validate: boolean = false;
  // validateSub: Subscription = new Subscription();

  constructor(private formService: FormService) {
    this.id = `checkbox-${integer}`
    integer++
    this.formService.validate.subscribe((val) => this.validate = val);
  }

  ngOnInit() {
    if (this.validator) {
      // addValidators(this.control, this.validator);
      this.errorMessage = getErrorMessages(this.validator);
      // this.control.updateValueAndValidity();
    }
    this.isChecked = this.control?.value;
  }

  writeValue(value: boolean) {
    if (value !== this.isChecked) {
      this.isChecked = value;
    }
  }

  onChange: Function = () => { };
  onTouch: Function = () => { };

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  toggleValue(e: boolean) {
    this.isChecked = e;
    this.onChange(e);
  }
}
