import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { FormControl } from "@angular/forms";
import { addValidators, getErrorMessages } from "../../helpers";
import { ValidationType } from "../../types";
import { FormService } from "../../service/form.service";

let integer: number = 1;

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})

export class CheckboxComponent implements OnInit {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() validator!: ValidationType[];
  @HostBinding('attr.class') @Input() className?: string = '';

  id: string = ''
  isChecked!: boolean;
  errorMessage!: {};
  validate: boolean = false;

  constructor(private formService: FormService) {
    this.id = `checkbox-${integer}`
    integer++
    this.formService.validate.subscribe((val) => this.validate = val);
  }

  ngOnInit() {
    if (this.validator) {
      addValidators(this.control, this.validator);
      this.errorMessage = getErrorMessages(this.validator);
    }
    this.isChecked = this.control?.value;
  }

  toggleValue() {
    this.isChecked = !this.isChecked;
    this.control.setValue(this.isChecked)
  }
}
