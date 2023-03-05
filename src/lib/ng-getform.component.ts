import { Component, HostListener, Input } from '@angular/core';
import { TooltipPosition } from './components/tooltip/tooltip.enums';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getErrorMessages } from './helpers';
import { TField } from './types';

@Component({
  selector: 'lib-ng-getform',
  templateUrl: './ng-getform.component.html',
  styleUrls: ['./ng-getform.component.scss'],
})
export class NgGetformComponent {
  @Input() targetUrl: string = '';
  @Input() fields: TField[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Your name',
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Required field',
        },
      ],
    },
  ];
  @Input() btnLabel?: string = '';
  @Input() successCallback?: () => void;

  isFormSubmitted = false;
  isLoading = false;

  form: any = new FormGroup({});

  errorMessages: { [key: string]: any } = {};

  ngOnInit() {
    console.log({ fields: this.fields });
    this.fields.forEach((field) => {
      if (field.validations)
        this.errorMessages[field.name] = {
          ...getErrorMessages(field.validations),
        };
      this.form.addControl(
        field.name,
        new FormControl(
          null,
          !field.validations
            ? []
            : field.validations.reduce((acc: any, current) => {
                if (current.type === 'required')
                  return [...acc, Validators.required];
                if (current.type === 'minLength')
                  return [
                    ...acc,
                    Validators.minLength(Number(current.value)) || 2,
                  ];
                if (current.type === 'maxLength')
                  return [
                    ...acc,
                    Validators.maxLength(Number(current.value) || 10),
                  ];
                if (current.type === 'max')
                  return [...acc, Validators.max(Number(current.value) || 100)];
                if (current.type === 'min')
                  return [...acc, Validators.min(Number(current.value) || 0)];
                if (current.type === 'pattern')
                  return [
                    ...acc,
                    Validators.pattern(String(current.value) || '[a-zA-Z" "]+'),
                  ];
                if (current.type === 'email') return [...acc, Validators.email];
                return [...acc];
              }, [])
        )
      );
    });
  }

  constructor() {}

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
