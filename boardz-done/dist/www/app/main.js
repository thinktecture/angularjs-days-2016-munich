System.register(['jquery', 'bootstrap/js/bootstrap', 'admin-lte/js/app', 'hammerjs/hammer', 'jquery/jquery.hammer', 'jquery/jquery.slimscroll', 'pNotify/pnotify-adapter', 'signalr/signalr', 'leaflet/leaflet', 'fastclick/fastclick', 'angular2/platform/browser', 'angular2/core', 'angular2/router', './app', 'angular2/http', './services/token.service', './services/app.injector', './services/log.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, app_1, http_1, token_service_1, app_injector_1, log_service_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (_10) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (_11) {}],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_1.BoardzApp, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                core_1.provide(log_service_1.LogService, { useClass: log_service_1.LogService }),
                token_service_1.TokenService,
            ]).then(function (appRef) {
                // Store a reference to the injector workaround for Dependency Injection in Router lifecycle hook
                app_injector_1.appInjector(appRef.injector);
            });
        }
    }
});

//# sourceMappingURL=main.js.map
