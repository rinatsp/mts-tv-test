import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    navHrefs: { path: string; label: string }[] = [
        { path: "first", label: "First" },
        { path: "second", label: "Second" },
        { path: "channels", label: "Телеканалы" },
    ];

    constructor() {}

    ngOnInit(): void {}
}
