import { Validators } from "@angular/forms";
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

export const addValidators = (validation: ValidationType[]) => {

  const result = validation.reduce((acc: any, current: ValidationType) => {
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