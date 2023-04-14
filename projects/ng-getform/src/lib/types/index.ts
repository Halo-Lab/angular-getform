export type ValidationType = {
    type: string;
    errorMessage: string;
    value?: string | number | boolean;
};

export type TextInputProps = {
    type?: string;
    placeholder?: string;
    isMultiLine?: boolean;
    name: string;
    label?: string;
    validation?: ValidationType[];
};
export type CheckboxProps = {
    type: string,
    name: string,
    label: string,
    validation?: ValidationType[];
}

export type SelectProps = {
    type: string,
    name: string,
    options: string[],
    placeholder?: string,
    selectTitle?: string,
    searchEnabled?: boolean,
    validation?: ValidationType[];
}

export type RadioButtonItem = {
    name: string;
    value: string;
}

export type RadioGroupProps = {
    type: string,
    name: string,
    options: RadioButtonItem[],
    label?: string,
    orientation?: string,
    validation?: ValidationType[];
}

export type FileInputProps = {
    type: string,
    name: string,
    isMultipleFiles?: boolean
}

export type FileWProgress = File & {
    progress: number
}

export type NgGetFormProps = Array<TextInputProps | RadioGroupProps | SelectProps | CheckboxProps | FileInputProps>;