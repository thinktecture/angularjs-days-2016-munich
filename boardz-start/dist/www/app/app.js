System.register(['angular2/core', 'angular2/router', './components/login/login', './components/dashboard/dashboard', './components/sidebar/sidebar', './components/header/header', './components/games/games', './components/notifications/notifications', './services/all', './components/radiussearch/radiussearch', './services/log.service', './models/loglevel', './services/signalr.service', './services/login.service', './services/notification.service', './services/ui.notification.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_1, dashboard_1, sidebar_1, header_1, games_1, notifications_1, all_1, radiussearch_1, log_service_1, loglevel_1, signalr_service_1, login_service_1, notification_service_1, ui_notification_service_1;
    var BoardzApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (games_1_1) {
                games_1 = games_1_1;
            },
            function (notifications_1_1) {
                notifications_1 = notifications_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (radiussearch_1_1) {
                radiussearch_1 = radiussearch_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (loglevel_1_1) {
                loglevel_1 = loglevel_1_1;
            },
            function (signalr_service_1_1) {
                signalr_service_1 = signalr_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (ui_notification_service_1_1) {
                ui_notification_service_1 = ui_notification_service_1_1;
            }],
        execute: function() {
            BoardzApp = (function () {
                function BoardzApp(_signalRService, _loginService, _notificationService, _uiNotificationService, _logService) {
                    this._signalRService = _signalRService;
                    this._loginService = _loginService;
                    this._notificationService = _notificationService;
                    this._uiNotificationService = _uiNotificationService;
                    this._logService = _logService;
                    _logService.maximumLogLevel = loglevel_1.LogLevel.Verbose;
                    _uiNotificationService.subscribeToNotifications();
                }
                BoardzApp.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (window.initAdminLTE) {
                        window.initAdminLTE();
                    }
                    if (this._loginService.isAuthenticated) {
                        this._signalRService.start();
                    }
                    this._signalRService.someoneJoinedAGame.subscribe(function (message) {
                        _this._notificationService.notifyInformation(message);
                    });
                };
                BoardzApp = __decorate([
                    core_1.Component({
                        selector: 'boardz-app',
                        providers: all_1.APP_SERVICES,
                        directives: [router_1.ROUTER_DIRECTIVES, sidebar_1.Sidebar, header_1.HeaderComponent],
                        templateUrl: 'app/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: dashboard_1.Dashboard, name: 'Dashboard', useAsDefault: true },
                        { path: '/login', component: login_1.LoginForm, name: 'Login' },
                        { path: '/notifications', component: notifications_1.Notifications, name: 'Notifications' },
                        { path: '/games/...', component: games_1.Games, name: 'Games', data: { displayName: 'Games' } },
                        { path: '/radiussearch', component: radiussearch_1.RadiusSearchComponent, name: 'RadiusSearch' }
                    ]), 
                    __metadata('design:paramtypes', [signalr_service_1.SignalRService, login_service_1.LoginService, notification_service_1.NotificationService, ui_notification_service_1.UiNotificationService, log_service_1.LogService])
                ], BoardzApp);
                return BoardzApp;
            }());
            exports_1("BoardzApp", BoardzApp);
        }
    }
});

//# sourceMappingURL=app.js.map
