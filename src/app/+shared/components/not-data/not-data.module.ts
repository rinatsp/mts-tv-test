import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotDataComponent } from './not-data.component';



@NgModule({
    declarations: [NotDataComponent],
    exports: [
        NotDataComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NotDataModule { }
