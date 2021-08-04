import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorCompontent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorCompontent
    ],
    exports: [
        ContadorCompontent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {}