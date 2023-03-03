import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularGetformComponent } from './angular-getform.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipModule } from './components/tooltip/tooltip.module';
import * as i0 from "@angular/core";
export class AngularGetformModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nZXRmb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZ2V0Zm9ybS9zcmMvbGliL2FuZ3VsYXItZ2V0Zm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBWXBFLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFSN0IsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZSxhQUVQLFlBQVksRUFBRSxhQUFhLEVBQUUsbUJBQW1CLGFBQ2hELHVCQUF1QjtrSEFFdEIsb0JBQW9CLFlBSHJCLFlBQVksRUFBRSxhQUFhLEVBQUUsbUJBQW1COzJGQUcvQyxvQkFBb0I7a0JBVmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7b0JBQzNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFuZ3VsYXJHZXRmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLWdldGZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFuZ3VsYXJHZXRmb3JtQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJHZXRmb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckdldGZvcm1Nb2R1bGUge31cbiJdfQ==