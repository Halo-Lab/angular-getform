import { FormControl, Validators } from "@angular/forms";
import { TValidationItem } from "./types";

export const getErrorMessages = (validation: TValidationItem[]) => {
  const res: any = {};
  validation.forEach((item) => {
    if (item.type === 'required' || item.type === 'requiredTrue') res.required = item.errorMessage;
    if (item.type === 'minLength') res.minLength = item.errorMessage;
    if (item.type === 'min') res.min = item.errorMessage;
    if (item.type === 'maxLength') res.maxLength = item.errorMessage;
    if (item.type === 'max') res.max = item.errorMessage;
    if (item.type === 'email') res.email = item.errorMessage;
    if (item.type === 'pattern') res.pattern = item.errorMessage;
  });
  return res;
};

export const addValidators = (validation: TValidationItem[]) => {

  const result = validation.reduce((acc: any, current: TValidationItem) => {
    switch (current.type) {
      case 'requiredTrue':
        return [...acc, Validators.requiredTrue]

      case 'required':
        return [...acc, Validators.required];

      case 'minLength':
        return [
          ...acc,
          Validators.minLength(Number(current.value)) || 2,
        ];

      case 'maxLength':
        return [
          ...acc,
          Validators.maxLength(Number(current.value) || 10),
        ];

      case 'max':
        return [
          ...acc,
          Validators.max(Number(current.value) || 100),
        ];

      case 'min':
        return [...acc, Validators.min(Number(current.value) || 0)];

      case 'email':
        return [...acc, Validators.email];

      case 'pattern':
        return [
          ...acc,
          Validators.pattern(
            String(current.value) || '[a-zA-Z" "]+'
          ),
        ];

      default:
        return acc;
    }
  }, [])
  return result
}