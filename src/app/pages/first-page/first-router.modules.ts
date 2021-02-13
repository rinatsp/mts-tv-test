import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {FirstPageComponent} from './first-page.component';

const routes: Routes = [
    {
        path: "",
        component: FirstPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FirstRouterModules {}
