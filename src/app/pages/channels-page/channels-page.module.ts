import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsPageComponent } from './channels-page.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [ChannelsPageComponent, ChannelCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ChannelsPageModule { }
