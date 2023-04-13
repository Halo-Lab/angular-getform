import { Component, HostListener, HostBinding, Input, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @ViewChild('formRef', { static: true }) formRef!: ElementRef;
  // @ContentChildren(InputComponent) inputs!: QueryList<ElementRef>;
  // @ContentChild(Checkbox) checkbox!: QueryList<ElementRef>;


  // errorMessages: { [key: string]: any } = {};
  constructor() { }

  ngOnInit() {
    [...this.formRef.nativeElement.children].forEach((el: ElementRef) => console.log(el))
    console.log(this.formRef.nativeElement.children, 'on init');
  }

  ngAfterContentInit() {
    // console.log(this.items, 'this.items')
    // console.log(this.checkbox, 'checkbox ngAfterContentInit');
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.formGroup.invalid) return;

    const formData = new FormData();

    for (let value in this.formGroup.value) {
      formData.append(value, this.formGroup.value[value]);
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
