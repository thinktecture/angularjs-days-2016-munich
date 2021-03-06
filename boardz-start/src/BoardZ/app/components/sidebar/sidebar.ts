import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {NavigationEntry} from "../../models/navigationEntry";

@Component({
    selector: 'sidebar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/sidebar/sidebar.html'
})
export class Sidebar {
    public expanded: boolean = true;
    public navigationEntries: Array<NavigationEntry>;

    constructor() {
        this.navigationEntries = [];
        this.navigationEntries.push(new NavigationEntry(['Dashboard'], 'dashboard', 'Dashboard'));
        this.navigationEntries.push(new NavigationEntry(['Games', 'GameList'], 'list', 'Games'));
        this.navigationEntries.push(new NavigationEntry(['RadiusSearch'], 'location-arrow', 'Players search'));
    }

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
