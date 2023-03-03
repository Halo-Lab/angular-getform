export type TValidationItem = {
    errorMessage: string;
    type: string;
    value: string | number | boolean;
};
export type TField = {
    type?: string;
    placeholder?: string;
    isMultiLine?: boolean;
    name: string;
    label?: string;
    validations?: TValidationItem[];
};
