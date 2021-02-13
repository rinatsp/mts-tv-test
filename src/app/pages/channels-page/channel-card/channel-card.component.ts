import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Channel} from '../../../+shared/model/channel.models';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelCardComponent{
  @Input() channel: Channel;
}
