// require all 3rd party libs
import 'jquery';
import 'bootstrap/js/bootstrap';
import 'admin-lte/js/app';
import 'hammerjs/hammer';
import 'jquery/jquery.hammer';
import 'jquery/jquery.slimscroll';
import 'fastclick/fastclick';

///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {HelloApp} from './app';

enableProdMode();

bootstrap(HelloApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
]);
