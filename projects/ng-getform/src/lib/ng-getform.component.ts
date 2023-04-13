import { Component, HostListener, HostBinding, Input, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TooltipPosition } from './components/tooltip/tooltip.enums';
// import { addValidators, getErrorMessages } from './helpers';

@Component({
  selector: 'lib-ng-getform',
  templateUrl: './ng-getform.component.html',
  styleUrls: ['./ng-getform.component.scss'],
})
export class NgGetformComponent implements OnInit, AfterContentInit {
  @Input() targetUrl: string = '';
  @Input() successCallback?: () => void;
  @Input() formGroup: FormGroup = new FormGroup({});

  @HostBinding('attr.class') @Input() className?: string = '';

  isFormSubmitted = false;
  isLoading = false;

  constructor() { }

  ngOnInit() { }

  buttonClickHander() {
    console.log('test 230')
  }

  ngAfterContentInit() {

  }

  onSubmit() {
    console.log(this.formGroup)
    this.isFormSubmitted = true;
    // console.log(this.formGroup.value);

    if (this.formGroup.invalid) {
      console.log('unvalid')
      return;
    }

    // const formData = new FormData();

    // for (let value in this.formGroup.value) {
    //   console.log(value, this.formGroup.value[value])
    //   formData.append(value, this.formGroup.value[value]);
    // }
    // console.log(formData)

    this.isLoading = true;
    fetch(this.targetUrl as string, {
      method: 'post',
      body: this.formGroup.value,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        this.formGroup.reset();
        Object.keys(this.formGroup.controls).forEach((key) => {
          this.formGroup.get(key)?.setErrors(null);
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
