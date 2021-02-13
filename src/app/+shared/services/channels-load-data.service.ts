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
    public genreId: string;

    public loadChunks = new BehaviorSubject<Channel[]>(null);
    public showChunks$: Observable<Channel[]> = this.loadChunks.asObservable();

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
        this.genreList.next(
            genre.filter((thing, index) => {
                const _thing = JSON.stringify(thing);
                return (
                    index ===
                    genre.findIndex((obj) => {
                        return JSON.stringify(obj) === _thing;
                    })
                );
            })
        );
    }

    public filterByGenre(genreID: string) {
        this.genreId = genreID;
        this.loadChunks.next(
            this.chunks < this.total
                ? this.data.channelDetails
                      .slice(0, this.chunks)
                      .filter((value: Channel) => value?.genres?.find((genre) => this.findGenre(genre, genreID)))
                : this.data.channelDetails.filter((value: Channel) =>
                      value?.genres?.find((genre) => this.findGenre(genre, genreID))
                  )
        );
    }

    private findGenre(genre: Genre, genreID: string) {
        if (!genreID) return true;
        return genreID === genre?.genreID;
    }

    public showMore(): void {
        this._chunks += 12;
        this.filterByGenre(this.genreId || null);
    }
}
