import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  validate = new BehaviorSubject<boolean>(false);

  constructor() { }

  endableFormValidation() {
    this.validate.next(true)
  }

  disableFormValidation() {
    this.validate.next(false);
  }
}
