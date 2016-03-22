import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {NavigationEntry} from "../../models/navigationEntry";

@Component({
    selector: 'app-sidebar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/sidebar/sidebar.html'
})
export class SidebarComponent {
    public expanded: boolean = true;
    public navigationEntries: Array<NavigationEntry>;

    constructor() {
        this.navigationEntries = [];
        this.navigationEntries.push(new NavigationEntry(['Dashboard'], 'dashboard', 'Dashboard'));
        this.navigationEntries.push(new NavigationEntry(['About'], 'question', 'About'));
    }

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
