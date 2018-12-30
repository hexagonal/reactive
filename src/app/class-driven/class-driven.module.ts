import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassDrivenComponent } from './class-driven/class-driven.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ClassDrivenComponent],
    exports: [ClassDrivenComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ClassDrivenModule { }
