import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, HostListener, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class AngularGetformService {
    constructor() { }
}
AngularGetformService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AngularGetformService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["TOP"] = "top";
    TooltipPosition["BOTTOM"] = "bottom";
    TooltipPosition["DEFAULT"] = "top";
})(TooltipPosition || (TooltipPosition = {}));

const getErrorMessages = (validations) => {
    const res = {};
    validations.forEach((item) => {
        if (item.type === 'required')
            res.required = item.errorMessage;
        if (item.type === 'minLength')
            res.minLength = item.errorMessage;
        if (item.type === 'min')
            res.min = item.errorMessage;
        if (item.type === 'maxLength')
            res.maxLength = item.errorMessage;
        if (item.type === 'max')
            res.max = item.errorMessage;
        if (item.type === 'email')
            res.email = item.errorMessage;
        if (item.type === 'pattern')
            res.email = item.errorMessage;
    });
    return res;
};

class TooltipComponent {
    constructor() {
        this.position = TooltipPosition.DEFAULT;
        this.tooltip = '';
        this.left = 0;
        this.top = 0;
        this.visible = false;
    }
    ngOnInit() { }
}
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: TooltipComponent, selector: "lib-tooltip", ngImport: i0, template: "<div\n  class=\"tooltip\"\n  [ngClass]=\"['tooltip--' + position]\"\n  [class.tooltip--visible]=\"visible\"\n  [style.left]=\"left + 'px'\"\n  [style.top]=\"top + 'px'\"\n>\n  {{ tooltip }}\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.tooltip{width:368px;padding:12px;position:fixed;font-weight:500;font-size:16px;line-height:150%;color:#fff;background:#f27c74;border-radius:14px;opacity:0;font-family:Lora,serif}.tooltip:before{content:\"\";position:absolute}.tooltip--visible{opacity:1;transition:opacity .3s}.tooltip--bottom{transform:translate(calc(-100% + 28px));margin-top:24px}.tooltip--bottom:before{top:-8px;right:20px;width:0;height:0;border-style:solid;border-width:0 8px 11px 8px;border-color:transparent transparent #f27c74 transparent}.tooltip--top{transform:translate(calc(-100% + 28px)) translateY(calc(-100% - 24px));margin-bottom:24px}.tooltip--top:before{bottom:-8px;right:20px;width:0;height:0;border-style:solid;border-width:11px 8px 0 8px;border-color:#f27c74 transparent transparent transparent}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tooltip', template: "<div\n  class=\"tooltip\"\n  [ngClass]=\"['tooltip--' + position]\"\n  [class.tooltip--visible]=\"visible\"\n  [style.left]=\"left + 'px'\"\n  [style.top]=\"top + 'px'\"\n>\n  {{ tooltip }}\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.tooltip{width:368px;padding:12px;position:fixed;font-weight:500;font-size:16px;line-height:150%;color:#fff;background:#f27c74;border-radius:14px;opacity:0;font-family:Lora,serif}.tooltip:before{content:\"\";position:absolute}.tooltip--visible{opacity:1;transition:opacity .3s}.tooltip--bottom{transform:translate(calc(-100% + 28px));margin-top:24px}.tooltip--bottom:before{top:-8px;right:20px;width:0;height:0;border-style:solid;border-width:0 8px 11px 8px;border-color:transparent transparent #f27c74 transparent}.tooltip--top{transform:translate(calc(-100% + 28px)) translateY(calc(-100% - 24px));margin-bottom:24px}.tooltip--top:before{bottom:-8px;right:20px;width:0;height:0;border-style:solid;border-width:11px 8px 0 8px;border-color:#f27c74 transparent transparent transparent}\n"] }]
        }], ctorParameters: function () { return []; } });

class TooltipDirective {
    constructor(elementRef, appRef, componentFactoryResolver, injector) {
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.tooltip = '';
        this.position = TooltipPosition.DEFAULT;
        this.showDelay = 0;
        this.hideDelay = 0;
        this.componentRef = null;
    }
    onMouseEnter() {
        this.initializeTooltip();
    }
    onMouseLeave() {
        this.setHideTooltipTimeout();
    }
    onTouchStart($event) {
        $event.preventDefault();
        window.clearTimeout(this.touchTimeout);
        this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
    }
    onTouchEnd() {
        window.clearTimeout(this.touchTimeout);
        this.setHideTooltipTimeout();
    }
    initializeTooltip() {
        if (this.componentRef === null) {
            window.clearInterval(this.hideDelay);
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            const [tooltipDOMElement] = this.componentRef.hostView.rootNodes;
            this.setTooltipComponentProperties();
            document.body.appendChild(tooltipDOMElement);
            this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
        }
    }
    setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.tooltip = this.tooltip;
            this.componentRef.instance.position = this.position;
            const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            switch (this.position) {
                case TooltipPosition.BOTTOM: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(bottom);
                    break;
                }
                case TooltipPosition.TOP: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(top);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    showTooltip() {
        if (this.componentRef !== null) {
            this.componentRef.instance.visible = true;
        }
    }
    setHideTooltipTimeout() {
        this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        if (this.componentRef !== null) {
            window.clearInterval(this.showTimeout);
            window.clearInterval(this.hideDelay);
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.1", type: TooltipDirective, selector: "[tooltip]", inputs: { tooltip: "tooltip", position: "position", showDelay: "showDelay", hideDelay: "hideDelay" }, host: { listeners: { "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()", "touchstart": "onTouchStart($event)", "touchend": "onTouchEnd()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tooltip]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; }, propDecorators: { tooltip: [{
                type: Input
            }], position: [{
                type: Input
            }], showDelay: [{
                type: Input
            }], hideDelay: [{
                type: Input
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }], onTouchStart: [{
                type: HostListener,
                args: ['touchstart', ['$event']]
            }], onTouchEnd: [{
                type: HostListener,
                args: ['touchend']
            }] } });

class InputComponent {
    constructor() {
        this.inputId = '';
        this.control = new FormControl();
        this.label = '';
        this.placeholder = '';
        this.type = 'text';
        this.isSubmitted = false;
        this.multiRows = false;
    }
    ngOnInit() { }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: InputComponent, selector: "lib-input", inputs: { inputId: "inputId", control: "control", label: "label", placeholder: "placeholder", type: "type", isSubmitted: "isSubmitted", multiRows: "multiRows", errorMessages: "errorMessages" }, ngImport: i0, template: "<div class=\"formGroup\">\n  <label *ngIf=\"!!label\" [for]=\"inputId\">{{ label }}</label>\n  <div class=\"fieldContainer\">\n    <input\n      *ngIf=\"!multiRows\"\n      [ngClass]=\"{ isInvalid: isSubmitted && control?.errors }\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder || label\"\n      [id]=\"inputId\"\n      [formControl]=\"control\"\n      [name]=\"inputId\"\n    />\n    <textarea\n      *ngIf=\"multiRows\"\n      [ngClass]=\"{ isInvalid: isSubmitted && control?.errors }\"\n      [name]=\"inputId\"\n      [id]=\"inputId\"\n      [placeholder]=\"placeholder || label\"\n      [formControl]=\"control\"\n    ></textarea>\n    <div\n      *ngIf=\"isSubmitted && control?.errors\"\n      class=\"dangerIconWrapper\"\n      [tooltip]=\"\n        (control?.errors?.['required'] && (errorMessages?.['required']) ) ||\n        (control?.errors?.['pattern'] && (errorMessages?.['pattern']) ) ||\n        (control?.errors?.['minlength'] && (errorMessages?.['minLength']) ) ||\n        (control?.errors?.['min'] && (errorMessages?.['min']) ) ||\n        (control?.errors?.['maxlength'] && (errorMessages?.['maxLength'])  ) ||\n        (control?.errors?.['max'] && (errorMessages?.['max']) ) ||\n        (control?.errors?.['email'] && (errorMessages?.['email']) )\n      \"\n    >\n      <svg\n        width=\"24\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <circle\n          cx=\"12\"\n          cy=\"17\"\n          r=\"1\"\n          transform=\"rotate(-180 12 17)\"\n          fill=\"#F27C74\"\n        />\n        <path\n          d=\"M12 14L12 6.99997M3 9.13192V14.8681C3 16.3914 3.7923 17.799 5.07846 18.5607L9.92154 21.4288C11.2077 22.1904 12.7923 22.1904 14.0785 21.4288L18.9215 18.5607C20.2077 17.799 21 16.3914 21 14.8681V9.13192C21 7.6086 20.2077 6.20099 18.9215 5.43932L14.0785 2.57125C12.7923 1.80958 11.2077 1.80958 9.92154 2.57125L5.07846 5.43932C3.7923 6.20099 3 7.6086 3 9.13192Z\"\n          stroke=\"#F27C74\"\n          stroke-width=\"1.5\"\n          stroke-linecap=\"round\"\n        />\n      </svg>\n    </div>\n  </div>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.formGroup{display:flex;flex-direction:column;gap:8px;width:368px}.formGroup label{font-family:Lora,serif;font-weight:500;font-size:14px;line-height:140%;color:#060811}.formGroup label:hover+div>input{border:1px solid transparent}.formGroup label:hover+div>input:hover{border:1px solid #d5dcda}.formGroup label:hover+div>input:hover.isInvalid{border-color:#f27c74}.formGroup label:hover+div>input:focus{border:1px solid #060811;border-radius:14px}.formGroup label:hover+div>input:focus.isInvalid{border-color:#f27c74}.formGroup label:hover+div>input.isInvalid{border-color:#f27c74}.formGroup .fieldContainer{width:100%;position:relative}.formGroup .fieldContainer input,.formGroup .fieldContainer textarea{width:100%;height:52px;padding:16px 14px;background:#ffffff;border-radius:14px;outline:none;border:1px solid transparent;font-family:Lora,serif;font-weight:400;font-size:16px;line-height:150%;color:#060811;box-sizing:border-box}.formGroup .fieldContainer input::-webkit-outer-spin-button,.formGroup .fieldContainer input::-webkit-inner-spin-button,.formGroup .fieldContainer textarea::-webkit-outer-spin-button,.formGroup .fieldContainer textarea::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.formGroup .fieldContainer input[type=number],.formGroup .fieldContainer textarea[type=number]{-moz-appearance:textfield}.formGroup .fieldContainer input:hover,.formGroup .fieldContainer textarea:hover{border:1px solid #d5dcda}.formGroup .fieldContainer input:focus,.formGroup .fieldContainer textarea:focus{border:1px solid #060811;border-radius:14px}.formGroup .fieldContainer input:placeholder,.formGroup .fieldContainer textarea:placeholder{font-weight:400;font-size:16px;line-height:150%;color:#9b9ca0}.formGroup .fieldContainer input.isInvalid,.formGroup .fieldContainer textarea.isInvalid{border-color:#f27c74}.formGroup .fieldContainer textarea{height:88px;resize:none}.formGroup .fieldContainer .dangerIconWrapper{width:24px;height:24px;position:absolute;right:16px;top:14px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TooltipDirective, selector: "[tooltip]", inputs: ["tooltip", "position", "showDelay", "hideDelay"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-input', template: "<div class=\"formGroup\">\n  <label *ngIf=\"!!label\" [for]=\"inputId\">{{ label }}</label>\n  <div class=\"fieldContainer\">\n    <input\n      *ngIf=\"!multiRows\"\n      [ngClass]=\"{ isInvalid: isSubmitted && control?.errors }\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder || label\"\n      [id]=\"inputId\"\n      [formControl]=\"control\"\n      [name]=\"inputId\"\n    />\n    <textarea\n      *ngIf=\"multiRows\"\n      [ngClass]=\"{ isInvalid: isSubmitted && control?.errors }\"\n      [name]=\"inputId\"\n      [id]=\"inputId\"\n      [placeholder]=\"placeholder || label\"\n      [formControl]=\"control\"\n    ></textarea>\n    <div\n      *ngIf=\"isSubmitted && control?.errors\"\n      class=\"dangerIconWrapper\"\n      [tooltip]=\"\n        (control?.errors?.['required'] && (errorMessages?.['required']) ) ||\n        (control?.errors?.['pattern'] && (errorMessages?.['pattern']) ) ||\n        (control?.errors?.['minlength'] && (errorMessages?.['minLength']) ) ||\n        (control?.errors?.['min'] && (errorMessages?.['min']) ) ||\n        (control?.errors?.['maxlength'] && (errorMessages?.['maxLength'])  ) ||\n        (control?.errors?.['max'] && (errorMessages?.['max']) ) ||\n        (control?.errors?.['email'] && (errorMessages?.['email']) )\n      \"\n    >\n      <svg\n        width=\"24\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <circle\n          cx=\"12\"\n          cy=\"17\"\n          r=\"1\"\n          transform=\"rotate(-180 12 17)\"\n          fill=\"#F27C74\"\n        />\n        <path\n          d=\"M12 14L12 6.99997M3 9.13192V14.8681C3 16.3914 3.7923 17.799 5.07846 18.5607L9.92154 21.4288C11.2077 22.1904 12.7923 22.1904 14.0785 21.4288L18.9215 18.5607C20.2077 17.799 21 16.3914 21 14.8681V9.13192C21 7.6086 20.2077 6.20099 18.9215 5.43932L14.0785 2.57125C12.7923 1.80958 11.2077 1.80958 9.92154 2.57125L5.07846 5.43932C3.7923 6.20099 3 7.6086 3 9.13192Z\"\n          stroke=\"#F27C74\"\n          stroke-width=\"1.5\"\n          stroke-linecap=\"round\"\n        />\n      </svg>\n    </div>\n  </div>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.formGroup{display:flex;flex-direction:column;gap:8px;width:368px}.formGroup label{font-family:Lora,serif;font-weight:500;font-size:14px;line-height:140%;color:#060811}.formGroup label:hover+div>input{border:1px solid transparent}.formGroup label:hover+div>input:hover{border:1px solid #d5dcda}.formGroup label:hover+div>input:hover.isInvalid{border-color:#f27c74}.formGroup label:hover+div>input:focus{border:1px solid #060811;border-radius:14px}.formGroup label:hover+div>input:focus.isInvalid{border-color:#f27c74}.formGroup label:hover+div>input.isInvalid{border-color:#f27c74}.formGroup .fieldContainer{width:100%;position:relative}.formGroup .fieldContainer input,.formGroup .fieldContainer textarea{width:100%;height:52px;padding:16px 14px;background:#ffffff;border-radius:14px;outline:none;border:1px solid transparent;font-family:Lora,serif;font-weight:400;font-size:16px;line-height:150%;color:#060811;box-sizing:border-box}.formGroup .fieldContainer input::-webkit-outer-spin-button,.formGroup .fieldContainer input::-webkit-inner-spin-button,.formGroup .fieldContainer textarea::-webkit-outer-spin-button,.formGroup .fieldContainer textarea::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.formGroup .fieldContainer input[type=number],.formGroup .fieldContainer textarea[type=number]{-moz-appearance:textfield}.formGroup .fieldContainer input:hover,.formGroup .fieldContainer textarea:hover{border:1px solid #d5dcda}.formGroup .fieldContainer input:focus,.formGroup .fieldContainer textarea:focus{border:1px solid #060811;border-radius:14px}.formGroup .fieldContainer input:placeholder,.formGroup .fieldContainer textarea:placeholder{font-weight:400;font-size:16px;line-height:150%;color:#9b9ca0}.formGroup .fieldContainer input.isInvalid,.formGroup .fieldContainer textarea.isInvalid{border-color:#f27c74}.formGroup .fieldContainer textarea{height:88px;resize:none}.formGroup .fieldContainer .dangerIconWrapper{width:24px;height:24px;position:absolute;right:16px;top:14px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { inputId: [{
                type: Input
            }], control: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], isSubmitted: [{
                type: Input
            }], multiRows: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }] } });

class ButtonComponent {
    constructor() {
        this.btnLabel = 'Send form';
        this.disabled = false;
    }
    ngOnInit() { }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: ButtonComponent, selector: "lib-button", inputs: { btnLabel: "btnLabel", disabled: "disabled" }, ngImport: i0, template: "<div class=\"submitContainer\">\n  <button type=\"submit\" [disabled]=\"disabled\">\n    {{ btnLabel }}\n  </button>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.submitContainer{width:100%;margin-top:16px}.submitContainer button{width:100%;padding:14px;background:#2f55b7;border-radius:10px;border:none;outline:none;font-family:Lora,serif;font-weight:600;font-size:16px;line-height:150%;text-align:center;color:#fff;cursor:pointer}.submitContainer button:hover{background:#23418e;border-radius:10px}.submitContainer button:disabled{background:#b9c4e0;border-radius:10px;color:#ced6e9;cursor:auto}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<div class=\"submitContainer\">\n  <button type=\"submit\" [disabled]=\"disabled\">\n    {{ btnLabel }}\n  </button>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.submitContainer{width:100%;margin-top:16px}.submitContainer button{width:100%;padding:14px;background:#2f55b7;border-radius:10px;border:none;outline:none;font-family:Lora,serif;font-weight:600;font-size:16px;line-height:150%;text-align:center;color:#fff;cursor:pointer}.submitContainer button:hover{background:#23418e;border-radius:10px}.submitContainer button:disabled{background:#b9c4e0;border-radius:10px;color:#ced6e9;cursor:auto}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { btnLabel: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class AngularGetformComponent {
    ngOnInit() {
        this.fields.forEach((field) => {
            if (field.validations)
                this.errorMessages[field.name] = Object.assign({}, getErrorMessages(field.validations));
            this.form.addControl(field.name, new FormControl(null, !field.validations
                ? []
                : field.validations.reduce((acc, current) => {
                    switch (current.type) {
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
                                Validators.pattern(String(current.value) || '[a-zA-Z" "]+'),
                            ];
                        default:
                            return acc;
                    }
                }, [])));
        });
    }
    constructor() {
        this.targetUrl = '';
        this.fields = [
            {
                type: 'text',
                name: 'name',
                label: 'Your name',
                validations: [
                    {
                        type: 'required',
                        value: true,
                        errorMessage: 'Required field',
                    },
                ],
            },
        ];
        this.formClassName = '';
        this.btnClassName = '';
        this.btnLabel = '';
        this.isFormSubmitted = false;
        this.isLoading = false;
        this.form = new FormGroup({});
        this.errorMessages = {};
        this.TooltipPosition = TooltipPosition;
        this.x = 0;
        this.y = 0;
        this.coordinates = '';
    }
    onSubmit() {
        this.isFormSubmitted = true;
        if (this.form.invalid)
            return;
        const formData = new FormData();
        for (let value in this.form.value) {
            formData.append(value, this.form.value[value]);
        }
        this.isLoading = true;
        fetch(this.targetUrl, {
            method: 'post',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(() => {
            this.form.reset();
            Object.keys(this.form.controls).forEach((key) => {
                var _a;
                (_a = this.form.get(key)) === null || _a === void 0 ? void 0 : _a.setErrors(null);
            });
            if (typeof this.successCallback === 'function')
                this.successCallback();
        })
            .catch((err) => console.log({ err }))
            .finally(() => {
            this.isLoading = false;
        });
    }
    onMouseMove($event) {
        this.x = $event.clientX;
        this.y = $event.clientY;
        this.coordinates = `${this.x},${this.y}`;
    }
}
AngularGetformComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AngularGetformComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: AngularGetformComponent, selector: "lib-angular-getform", inputs: { targetUrl: "targetUrl", fields: "fields", formClassName: "formClassName", btnClassName: "btnClassName", btnLabel: "btnLabel", successCallback: "successCallback" }, host: { listeners: { "mousemove": "onMouseMove($event)" } }, ngImport: i0, template: "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div *ngFor=\"let item of fields\">\n      <lib-input\n        [inputId]=\"item.name\"\n        [placeholder]=\"item.placeholder ? item.placeholder : item.label\"\n        [label]=\"item.label\"\n        [type]=\"item.type || 'text'\"\n        [isSubmitted]=\"isFormSubmitted\"\n        [multiRows]=\"item.isMultiLine || false\"\n        [isSubmitted]=\"isFormSubmitted\"\n        [control]=\"form.controls[item.name]\"\n        [errorMessages]=\"errorMessages[item.name]\"\n      ></lib-input>\n    </div>\n    <lib-button [btnLabel]=\"btnLabel\" [disabled]=\"isLoading\"></lib-button>\n  </form>\n</div>\n", styles: ["@import\"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css\";@import\"https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css\";@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.container{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:#f1f2f4;font-family:Lora,serif}.container form{display:flex;flex-direction:column;gap:24px;flex-basis:368px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: InputComponent, selector: "lib-input", inputs: ["inputId", "control", "label", "placeholder", "type", "isSubmitted", "multiRows", "errorMessages"] }, { kind: "component", type: ButtonComponent, selector: "lib-button", inputs: ["btnLabel", "disabled"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-angular-getform', template: "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div *ngFor=\"let item of fields\">\n      <lib-input\n        [inputId]=\"item.name\"\n        [placeholder]=\"item.placeholder ? item.placeholder : item.label\"\n        [label]=\"item.label\"\n        [type]=\"item.type || 'text'\"\n        [isSubmitted]=\"isFormSubmitted\"\n        [multiRows]=\"item.isMultiLine || false\"\n        [isSubmitted]=\"isFormSubmitted\"\n        [control]=\"form.controls[item.name]\"\n        [errorMessages]=\"errorMessages[item.name]\"\n      ></lib-input>\n    </div>\n    <lib-button [btnLabel]=\"btnLabel\" [disabled]=\"isLoading\"></lib-button>\n  </form>\n</div>\n", styles: ["@import\"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css\";@import\"https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css\";@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.container{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:#f1f2f4;font-family:Lora,serif}.container form{display:flex;flex-direction:column;gap:24px;flex-basis:368px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { targetUrl: [{
                type: Input
            }], fields: [{
                type: Input
            }], formClassName: [{
                type: Input
            }], btnClassName: [{
                type: Input
            }], btnLabel: [{
                type: Input
            }], successCallback: [{
                type: Input
            }], onMouseMove: [{
                type: HostListener,
                args: ['mousemove', ['$event']]
            }] } });

class TooltipModule {
}
TooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.1", ngImport: i0, type: TooltipModule, declarations: [TooltipDirective], imports: [CommonModule], exports: [TooltipDirective] });
TooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TooltipDirective],
                    imports: [CommonModule],
                    exports: [TooltipDirective],
                }]
        }] });

class AngularGetformModule {
}
AngularGetformModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularGetformModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformModule, declarations: [AngularGetformComponent,
        TooltipComponent,
        InputComponent,
        ButtonComponent], imports: [CommonModule, TooltipModule, ReactiveFormsModule], exports: [AngularGetformComponent] });
AngularGetformModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformModule, imports: [CommonModule, TooltipModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: AngularGetformModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularGetformComponent,
                        TooltipComponent,
                        InputComponent,
                        ButtonComponent,
                    ],
                    imports: [CommonModule, TooltipModule, ReactiveFormsModule],
                    exports: [AngularGetformComponent],
                }]
        }] });

/*
 * Public API Surface of angular-getform
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularGetformComponent, AngularGetformModule, AngularGetformService };
//# sourceMappingURL=angular-getform.mjs.map
