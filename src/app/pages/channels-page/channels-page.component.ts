import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ChannelsLoadDataService } from "../../+shared/services/channels-load-data.service";
import { take } from "rxjs/operators";
import { Channels } from "../../+shared/model/channel.models";

@Component({
    selector: "app-channels-page",
    templateUrl: "./channels-page.component.html",
    styleUrls: ["./channels-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelsPageComponent implements OnInit {
    public channels: Channels = null;

    constructor(
        public readonly channelsLoadDataService: ChannelsLoadDataService,
        private readonly cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {}

    public loadChunk(): void {
        this.channelsLoadDataService.showMore();
    }
}
