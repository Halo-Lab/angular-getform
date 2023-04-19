import { Validators, FormControl, AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidationType } from "./types";

export const getErrorMessages = (validation: ValidationType[]) => {
  const res: any = {};
  validation.forEach((item) => {
    if (item.type === 'required' || item.type === 'requiredTrue') res.required = item.message;
    if (item.type === 'minLength') res.minLength = item.message;
    if (item.type === 'min') res.min = item.message;
    if (item.type === 'maxLength') res.maxLength = item.message;
    if (item.type === 'max') res.max = item.message;
    if (item.type === 'email') res.email = item.message;
    if (item.type === 'pattern') res.pattern = item.message;
  });
  return res;
};

export const addValidators = (control: FormControl, validation: ValidationType[]) => {
  validation.forEach((current: ValidationType) => {
    switch (current.type) {
      case 'requiredTrue':
        return control.setValidators(Validators.requiredTrue)

      case 'required':
        return control.addValidators(Validators.required);

      case 'minLength':
        return control.addValidators(Validators.minLength(Number(current.value)) || 2)

      case 'maxLength':
        return control.addValidators(Validators.maxLength(Number(current.value) || 10))

      case 'max':
        return control.addValidators(Validators.max(Number(current.value) || 100))

      case 'min':
        return control.addValidators(Validators.min(Number(current.value) || 0))

      case 'email':
        return control.addValidators(customEmailValidator())

      case 'pattern':
        return control.addValidators(Validators.pattern(
          String(current.value) || '[a-zA-Z" "]+'
        ))

      default:
        return null;
    }
  })
  control.updateValueAndValidity();
}

const customEmailValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const email = control.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      return { 'email': true }
    }
    return null
  }
}