import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Genre } from "../../model/channel.models";
import { ChannelsLoadDataService } from "../../services/channels-load-data.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    public form: FormGroup;

    public readonly navHrefs: { path: string; label: string }[] = [
        { path: "first", label: "First" },
        { path: "second", label: "Second" },
        { path: "channels", label: "Телеканалы" },
    ];

    private readonly unsubscribe$: Subject<void> = new Subject();

    constructor(private fb: FormBuilder, public readonly channelsLoadDataService: ChannelsLoadDataService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            filterGenre: [""],
        });

        this.form
            .get("filterGenre")
            .valueChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe((value) => {
                this.channelsLoadDataService.filterByGenre(value);
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
