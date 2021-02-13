import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {SecondPageComponent} from './second-page.component';

const routes: Routes = [
    {
        path: "",
        component: SecondPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SecondRouterModules {}
