import { OnInit } from '@angular/core';
import { TooltipPosition } from './tooltip.enums';
import * as i0 from "@angular/core";
export declare class TooltipComponent implements OnInit {
    position: TooltipPosition;
    tooltip: string;
    left: number;
    top: number;
    visible: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "lib-tooltip", never, {}, {}, never, never, false, never>;
}
