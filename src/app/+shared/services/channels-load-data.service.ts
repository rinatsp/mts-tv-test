import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Channels} from '../model/channel.models';


@Injectable({
  providedIn: 'root'
})
export class ChannelsLoadDataService {
  constructor(private readonly httpClient: HttpClient) {
  }

  public loadChannels(): Observable<Channels> {
    return this.httpClient.get<Channels>('./assets/channels.json')
      .pipe();
  }
}
