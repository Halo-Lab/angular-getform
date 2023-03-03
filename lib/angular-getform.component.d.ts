import { TooltipPosition } from './components/tooltip/tooltip.enums';
import { TField } from './types';
import * as i0 from "@angular/core";
export declare class AngularGetformComponent {
    targetUrl: string;
    fields: TField[];
    formClassName?: string;
    btnClassName?: string;
    btnLabel?: string;
    successCallback?: () => void;
    isFormSubmitted: boolean;
    isLoading: boolean;
    form: any;
    errorMessages: {
        [key: string]: any;
    };
    ngOnInit(): void;
    constructor();
    onSubmit(): void;
    TooltipPosition: typeof TooltipPosition;
    x: number;
    y: number;
    coordinates: string;
    onMouseMove($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularGetformComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularGetformComponent, "lib-angular-getform", never, { "targetUrl": "targetUrl"; "fields": "fields"; "formClassName": "formClassName"; "btnClassName": "btnClassName"; "btnLabel": "btnLabel"; "successCallback": "successCallback"; }, {}, never, never, false, never>;
}
