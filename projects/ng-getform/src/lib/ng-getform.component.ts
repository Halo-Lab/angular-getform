import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './service/form.service';

@Component({
  selector: 'lib-ng-getform',
  templateUrl: './ng-getform.component.html',
  styleUrls: ['./ng-getform.component.scss'],
})
export class NgGetformComponent implements OnInit {
  @Input() targetUrl: string = '';
  @Input() successCallback?: () => void;
  @Input() formGroup!: FormGroup;

  @HostBinding('attr.class') @Input() className?: string = '';
  isLoading = false;

  constructor(private formService: FormService) { }

  ngOnInit() { }

  resetForm() {
    this.formGroup.reset();
    Object.keys(this.formGroup.controls).forEach((key) => {
      this.formGroup.get(key)?.setErrors(null);
    });
  }

  onSubmit() {
    this.formService.endableFormValidation();
    if (this.formGroup.invalid) return;

    const formData: FormData = new FormData();
    for (const value in this.formGroup.value) {
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
        this.resetForm();
        this.formService.disableFormValidation();
        if (typeof this.successCallback === 'function') this.successCallback();
      })
      .catch((err) => console.log({ err }))
      .finally(() => {
        this.isLoading = false;
      });
  }
}
