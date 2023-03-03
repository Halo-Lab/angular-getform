import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputComponent implements OnInit {
    inputId: string;
    control: FormControl<any>;
    label?: string;
    placeholder?: string;
    type: string;
    isSubmitted: boolean;
    multiRows: boolean;
    errorMessages: any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "lib-input", never, { "inputId": "inputId"; "control": "control"; "label": "label"; "placeholder": "placeholder"; "type": "type"; "isSubmitted": "isSubmitted"; "multiRows": "multiRows"; "errorMessages": "errorMessages"; }, {}, never, never, false, never>;
}
