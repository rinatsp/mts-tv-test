import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: "channels",
        loadChildren: () => import("./pages/channels-page/channels-page.module").then((m) => m.ChannelsPageModule),
    },
    {
        path: "first",
        loadChildren: () => import("./pages/first-page/first-page.module").then((m) => m.FirstPageModule),
    },
    {
        path: "second",
        loadChildren: () => import("./pages/second-page/second-page.module").then((m) => m.SecondPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
