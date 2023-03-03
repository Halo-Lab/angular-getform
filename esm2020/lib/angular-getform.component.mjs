import { Component, HostListener, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from './components/tooltip/tooltip.enums';
import { getErrorMessages } from './helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "./components/input/input.component";
import * as i4 from "./components/button/button.component";
export class AngularGetformComponent {
    ngOnInit() {
        this.fields.forEach((field) => {
            if (field.validations)
                this.errorMessages[field.name] = {
                    ...getErrorMessages(field.validations),
                };
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
                this.form.get(key)?.setErrors(null);
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
AngularGetformComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: AngularGetformComponent, selector: "lib-angular-getform", inputs: { targetUrl: "targetUrl", fields: "fields", formClassName: "formClassName", btnClassName: "btnClassName", btnLabel: "btnLabel", successCallback: "successCallback" }, host: { listeners: { "mousemove": "onMouseMove($event)" } }, ngImport: i0, template: "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div *ngFor=\"let item of fields\">\n      <lib-input\n        [inputId]=\"item.name\"\n        [placeholder]=\"item.placeholder ? item.placeholder : item.label\"\n        [label]=\"item.label\"\n        [type]=\"item.type || 'text'\"\n        [isSubmitted]=\"isFormSubmitted\"\n        [multiRows]=\"item.isMultiLine || false\"\n        [isSubmitted]=\"isFormSubmitted\"\n        [control]=\"form.controls[item.name]\"\n        [errorMessages]=\"errorMessages[item.name]\"\n      ></lib-input>\n    </div>\n    <lib-button [btnLabel]=\"btnLabel\" [disabled]=\"isLoading\"></lib-button>\n  </form>\n</div>\n", styles: ["@import\"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css\";@import\"https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css\";@import\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap\";.container{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:#f1f2f4;font-family:Lora,serif}.container form{display:flex;flex-direction:column;gap:24px;flex-basis:368px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i3.InputComponent, selector: "lib-input", inputs: ["inputId", "control", "label", "placeholder", "type", "isSubmitted", "multiRows", "errorMessages"] }, { kind: "component", type: i4.ButtonComponent, selector: "lib-button", inputs: ["btnLabel", "disabled"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nZXRmb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZ2V0Zm9ybS9zcmMvbGliL2FuZ3VsYXItZ2V0Zm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWdldGZvcm0vc3JjL2xpYi9hbmd1bGFyLWdldGZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7OztBQVE3QyxNQUFNLE9BQU8sdUJBQXVCO0lBNEJsQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1QixJQUFJLEtBQUssQ0FBQyxXQUFXO2dCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFDL0IsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUN2QyxDQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQ1YsSUFBSSxXQUFXLENBQ2IsSUFBSSxFQUNKLENBQUMsS0FBSyxDQUFDLFdBQVc7Z0JBQ2hCLENBQUMsQ0FBQyxFQUFFO2dCQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRTtvQkFDN0Ms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LHFCQUFxQjswRUFLdEIsU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBY0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkEwR04sV0FBVztzQkFEVixZQUFZO3VCQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRvb2x0aXBQb3NpdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuZW51bXMnO1xuaW1wb3J0IHsgZ2V0RXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBURmllbGQgfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFuZ3VsYXItZ2V0Zm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLWdldGZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbmd1bGFyLWdldGZvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckdldGZvcm1Db21wb25lbnQge1xuICBASW5wdXQoKSB0YXJnZXRVcmw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBmaWVsZHM6IFRGaWVsZFtdID0gW1xuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIGxhYmVsOiAnWW91ciBuYW1lJyxcbiAgICAgIHZhbGlkYXRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAncmVxdWlyZWQnLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1JlcXVpcmVkIGZpZWxkJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbiAgQElucHV0KCkgZm9ybUNsYXNzTmFtZT86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBidG5DbGFzc05hbWU/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYnRuTGFiZWw/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3VjY2Vzc0NhbGxiYWNrPzogKCkgPT4gdm9pZDtcblxuICBpc0Zvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgZm9ybTogYW55ID0gbmV3IEZvcm1Hcm91cCh7fSk7XG5cbiAgZXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQudmFsaWRhdGlvbnMpXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlc1tmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICAuLi5nZXRFcnJvck1lc3NhZ2VzKGZpZWxkLnZhbGlkYXRpb25zKSxcbiAgICAgICAgfTtcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKFxuICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICBuZXcgRm9ybUNvbnRyb2woXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAhZmllbGQudmFsaWRhdGlvbnNcbiAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgIDogZmllbGQudmFsaWRhdGlvbnMucmVkdWNlKChhY2M6IGFueSwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uYWNjLCBWYWxpZGF0b3JzLnJlcXVpcmVkXTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnbWluTGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoTnVtYmVyKGN1cnJlbnQudmFsdWUpKSB8fCAyLFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdtYXhMZW5ndGgnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aChOdW1iZXIoY3VycmVudC52YWx1ZSkgfHwgMTApLFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdtYXgnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heChOdW1iZXIoY3VycmVudC52YWx1ZSkgfHwgMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIFZhbGlkYXRvcnMubWluKE51bWJlcihjdXJyZW50LnZhbHVlKSB8fCAwKV07XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIFZhbGlkYXRvcnMuZW1haWxdO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKGN1cnJlbnQudmFsdWUpIHx8ICdbYS16QS1aXCIgXCJdKydcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5pc0Zvcm1TdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgdmFsdWUgaW4gdGhpcy5mb3JtLnZhbHVlKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQodmFsdWUsIHRoaXMuZm9ybS52YWx1ZVt2YWx1ZV0pO1xuICAgIH1cblxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBmZXRjaCh0aGlzLnRhcmdldFVybCBhcyBzdHJpbmcsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm0uZ2V0KGtleSk/LnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKHsgZXJyIH0pKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cbiAgVG9vbHRpcFBvc2l0aW9uOiB0eXBlb2YgVG9vbHRpcFBvc2l0aW9uID0gVG9vbHRpcFBvc2l0aW9uO1xuICB4ID0gMDtcbiAgeSA9IDA7XG4gIGNvb3JkaW5hdGVzID0gJyc7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZU1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy54ID0gJGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy55ID0gJGV2ZW50LmNsaWVudFk7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGAke3RoaXMueH0sJHt0aGlzLnl9YDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGRzXCI+XG4gICAgICA8bGliLWlucHV0XG4gICAgICAgIFtpbnB1dElkXT1cIml0ZW0ubmFtZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJpdGVtLnBsYWNlaG9sZGVyID8gaXRlbS5wbGFjZWhvbGRlciA6IGl0ZW0ubGFiZWxcIlxuICAgICAgICBbbGFiZWxdPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgIFt0eXBlXT1cIml0ZW0udHlwZSB8fCAndGV4dCdcIlxuICAgICAgICBbaXNTdWJtaXR0ZWRdPVwiaXNGb3JtU3VibWl0dGVkXCJcbiAgICAgICAgW211bHRpUm93c109XCJpdGVtLmlzTXVsdGlMaW5lIHx8IGZhbHNlXCJcbiAgICAgICAgW2lzU3VibWl0dGVkXT1cImlzRm9ybVN1Ym1pdHRlZFwiXG4gICAgICAgIFtjb250cm9sXT1cImZvcm0uY29udHJvbHNbaXRlbS5uYW1lXVwiXG4gICAgICAgIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNbaXRlbS5uYW1lXVwiXG4gICAgICA+PC9saWItaW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGxpYi1idXR0b24gW2J0bkxhYmVsXT1cImJ0bkxhYmVsXCIgW2Rpc2FibGVkXT1cImlzTG9hZGluZ1wiPjwvbGliLWJ1dHRvbj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=