import {Component, AfterViewInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {DashboardComponent} from './components/dashboard/dashboard';
import {SidebarComponent} from './components/sidebar/sidebar';
import {HeaderComponent} from './components/header/header';
import {AboutComponent} from './components/about/about';

@Component({
    selector: 'hello-app',
    directives: [ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent],
    templateUrl: 'app/app.html'
})
@RouteConfig([
    { path: '/', component: DashboardComponent, name: 'Dashboard', useAsDefault: true },
    { path: '/about', component: AboutComponent, name: 'About' }
])
export class HelloApp implements AfterViewInit {
    ngAfterViewInit(): any {
        if (window.initAdminLTE) {
            window.initAdminLTE();
        }
    }
}

interface BoardZAppWindow extends Window {
    initAdminLTE(): void;
}

declare var window: BoardZAppWindow;
