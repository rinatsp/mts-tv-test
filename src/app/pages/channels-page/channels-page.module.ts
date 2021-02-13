import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChannelsPageComponent } from "./channels-page.component";
import { ChannelCardComponent } from "./channel-card/channel-card.component";
import { MatCardModule } from "@angular/material/card";
import { ChannelsRoutingModule } from "./channels-router.modules";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [ChannelsPageComponent, ChannelCardComponent],
    imports: [CommonModule, ChannelsRoutingModule, MatCardModule, MatButtonModule],
})
export class ChannelsPageModule {}
