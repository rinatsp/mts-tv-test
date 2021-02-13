import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelsPageComponent {

  constructor() {
  }
}
