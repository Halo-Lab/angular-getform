import { Directive, HostListener, Input, } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipPosition } from './tooltip.enums';
import * as i0 from "@angular/core";
export class TooltipDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWdldGZvcm0vc3JjL2xpYi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlMLFNBQVMsRUFHVCxZQUFZLEVBRVosS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLbEQsTUFBTSxPQUFPLGdCQUFnQjtJQVczQixZQUNVLFVBQXNCLEVBQ3RCLE1BQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCxRQUFrQjtRQUhsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWRuQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDO1FBQ3BELGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWYsaUJBQVksR0FBNkIsSUFBSSxDQUFDO0lBVW5ELENBQUM7SUFHSixZQUFZO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBR0QsWUFBWSxDQUFDLE1BQWtCO1FBQzdCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMs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Q29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sdGlwUG9zaXRpb24gfSBmcm9tICcuL3Rvb2x0aXAuZW51bXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgdG9vbHRpcCA9ICcnO1xuICBASW5wdXQoKSBwb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gVG9vbHRpcFBvc2l0aW9uLkRFRkFVTFQ7XG4gIEBJbnB1dCgpIHNob3dEZWxheSA9IDA7XG4gIEBJbnB1dCgpIGhpZGVEZWxheSA9IDA7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc2hvd1RpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgaGlkZVRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgdG91Y2hUaW1lb3V0PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemVUb29sdGlwKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SGlkZVRvb2x0aXBUaW1lb3V0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgb25Ub3VjaFN0YXJ0KCRldmVudDogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpO1xuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICB0aGlzLmluaXRpYWxpemVUb29sdGlwLmJpbmQodGhpcyksXG4gICAgICA1MDBcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnKVxuICBvblRvdWNoRW5kKCk6IHZvaWQge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpO1xuICAgIHRoaXMuc2V0SGlkZVRvb2x0aXBUaW1lb3V0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVUb29sdGlwKCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZiA9PT0gbnVsbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5oaWRlRGVsYXkpO1xuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9XG4gICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvb2x0aXBDb21wb25lbnQpO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICBjb25zdCBbdG9vbHRpcERPTUVsZW1lbnRdID0gKFxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PlxuICAgICAgKS5yb290Tm9kZXM7XG5cbiAgICAgIHRoaXMuc2V0VG9vbHRpcENvbXBvbmVudFByb3BlcnRpZXMoKTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sdGlwRE9NRWxlbWVudCk7XG4gICAgICB0aGlzLnNob3dUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5zaG93RGVsYXlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUb29sdGlwQ29tcG9uZW50UHJvcGVydGllcygpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG5cbiAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tIH0gPVxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgVG9vbHRpcFBvc2l0aW9uLkJPVFRPTToge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmxlZnQgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudG9wID0gTWF0aC5yb3VuZChib3R0b20pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgVG9vbHRpcFBvc2l0aW9uLlRPUDoge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmxlZnQgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudG9wID0gTWF0aC5yb3VuZCh0b3ApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd1Rvb2x0aXAoKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEhpZGVUb29sdGlwVGltZW91dCgpIHtcbiAgICB0aGlzLmhpZGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuaGlkZURlbGF5XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYgIT09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc2hvd1RpbWVvdXQpO1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5oaWRlRGVsYXkpO1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=