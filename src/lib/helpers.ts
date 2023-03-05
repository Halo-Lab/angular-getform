import { TValidationItem } from './types';

export const getErrorMessages = (validations: TValidationItem[]) => {
  const res: any = {};
  validations.forEach((item) => {
    if (item.type === 'required') res.required = item.errorMessage;
    if (item.type === 'minLength') res.minLength = item.errorMessage;
    if (item.type === 'min') res.min = item.errorMessage;
    if (item.type === 'maxLength') res.maxLength = item.errorMessage;
    if (item.type === 'max') res.max = item.errorMessage;
    if (item.type === 'email') res.email = item.errorMessage;
    if (item.type === 'pattern') res.pattern = item.errorMessage;
  });
  return res;
};
