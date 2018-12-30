import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
    declarations: [TemplateDrivenComponent],
    exports: [TemplateDrivenComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TemplateDrivenModule { }
