import { RouterModule, Routes } from "@angular/router";
import { ChannelsPageComponent } from "./channels-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: ChannelsPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChannelsRoutingModule {}
