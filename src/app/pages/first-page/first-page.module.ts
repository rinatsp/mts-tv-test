import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstPageComponent } from "./first-page.component";
import { NotDataModule } from "../../+shared/components/not-data/not-data.module";
import { FirstRouterModules } from "./first-router.modules";

@NgModule({
    declarations: [FirstPageComponent],
    imports: [CommonModule, NotDataModule, FirstRouterModules],
})
export class FirstPageModule {}
