import { ChangeDetectionStrategy, Component, HostListener, Input } from "@angular/core";
import { Channel } from "../../../+shared/model/channel.models";

@Component({
    selector: "app-channel-card",
    templateUrl: "./channel-card.component.html",
    styleUrls: ["./channel-card.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelCardComponent {
    @Input() channel: Channel;

    public mouseover: boolean;

    @HostListener("mouseover")
    onMouseOver() {
        this.mouseover = true;
    }

    @HostListener("mouseout")
    onMouseOut() {
        this.mouseover = false;
    }
}
