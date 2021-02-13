import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecondPageComponent } from "./second-page.component";
import { NotDataModule } from "../../+shared/components/not-data/not-data.module";
import {SecondRouterModules} from './second-router.modules';

@NgModule({
    declarations: [SecondPageComponent],
    imports: [CommonModule, NotDataModule, SecondRouterModules],
})
export class SecondPageModule {}
