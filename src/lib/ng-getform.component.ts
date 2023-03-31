import { Component, HostListener, Input, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TooltipPosition } from './components/tooltip/tooltip.enums';
import { addValidators, getErrorMessages } from './helpers';

@Component({
  selector: 'lib-ng-getform',
  templateUrl: './ng-getform.component.html',
  styleUrls: ['./ng-getform.component.scss'],
})
export class NgGetformComponent {
  @Input() targetUrl: string = '';
  @Input() fields: any = [];
  @Input() btnLabel: string = 'Send form';
  @Input() successCallback?: () => void;

  @HostBinding('attr.class') @Input() className?: string = '';

  isFormSubmitted = false;
  isLoading = false;

  form: any = new FormGroup({});

  errorMessages: { [key: string]: any } = {};

  ngOnInit() {
    this.fields.forEach((field: any) => {
      if (field.validation) {
        this.errorMessages[field.name] = {
          ...getErrorMessages(field.validation),
        };
      }
      this.form.addControl(field.name, new FormControl(null, !field.validation
        ? []
        : addValidators(field.validation)))
    })
  }

  constructor() { }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log({ errors: this.errorMessages });

    if (this.form.invalid) return;

    const formData = new FormData();

    for (let value in this.form.value) {
      formData.append(value, this.form.value[value]);
    }

    this.isLoading = true;
    fetch(this.targetUrl as string, {
      method: 'post',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        this.form.reset();
        Object.keys(this.form.controls).forEach((key) => {
          this.form.get(key)?.setErrors(null);
        });
        if (typeof this.successCallback === 'function') this.successCallback();
      })
      .catch((err) => console.log({ err }))
      .finally(() => {
        this.isLoading = false;
      });
  }
  TooltipPosition: typeof TooltipPosition = TooltipPosition;
  x = 0;
  y = 0;
  coordinates = '';

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    this.x = $event.clientX;
    this.y = $event.clientY;
    this.coordinates = `${this.x},${this.y}`;
  }
}
