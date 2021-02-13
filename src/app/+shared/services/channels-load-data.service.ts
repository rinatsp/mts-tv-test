import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Channel, Channels, Genre } from "../model/channel.models";
import { take, tap } from "rxjs/operators";


@Injectable({
    providedIn: "root",
})
export class ChannelsLoadDataService {
    private genreList = new BehaviorSubject<Genre[]>(null);
    public showGenreList$: Observable<Genre[]> = this.genreList.asObservable();

    private _data: Channels;

    set data(data: Channels) {
        this._data = data;
        this.loadChunks.next(data.channelDetails.slice(0, this._chunks));
    }

    get data() {
        if (!this._data) this.loadChannels();
        return this._data;
    }

    private _total: number;

    set total(total: number) {
        this._total = total;
    }

    get total(): number {
        return this._total;
    }

    public loadChunks = new BehaviorSubject<Channel[]>(null);
    public showChunks$: Observable<Channel[]> = this.loadChunks.asObservable();

    private _chunks = 24;

    get chunks() {
        return this._chunks;
    }

    constructor(private readonly httpClient: HttpClient) {
        this.loadChannels();
    }

    public loadChannels(): void {
        this.httpClient
            .get<Channels>("./assets/channels.json")
            .pipe(tap((value: Channels) => (this.total = value.total)))
            .subscribe((value: Channels) => {
                this.data = value;
                this.getGenreList();
            });
    }

    public getGenreList() {
        let genre: Genre[] = [];
        this.data.channelDetails.forEach((value: Channel) => {
            if (value?.genres) genre = [...genre, ...value.genres];
        });
        // нужно удалить дубликаты
        this.genreList.next(genre);
    }

    public filterByGenre(genreID: string) {
        if (this.chunks < this.total) {
            this.loadChunks.next(
                this.data.channelDetails
                    .slice(0, this.chunks)
                    .filter((value: Channel) => value?.genres?.find((genre) => genreID === genre?.genreID))
            );
            return;
        }
    }

    public showMore(): void {
        this._chunks += 12;
        if (this.chunks > this.total) {
            this.loadChunks.next(this.data.channelDetails);
            return;
        }
        this.loadChunks.next(this.data.channelDetails.slice(0, this.chunks));
    }
}
