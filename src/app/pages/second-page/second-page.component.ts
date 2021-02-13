import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-second-page",
    templateUrl: "./second-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPageComponent {}
