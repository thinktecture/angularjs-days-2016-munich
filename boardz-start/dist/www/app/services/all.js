System.register(['angular2/core', '../app-config', './authenticated.http', './login.service', './games.service', './geolocation.service', './players.service', './notification.service', './signalr.service', './ui.notification.service', './camera.service', './desktop.camera.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, app_config_1, authenticated_http_1, login_service_1, games_service_1, geolocation_service_1, players_service_1, notification_service_1, signalr_service_1, ui_notification_service_1, camera_service_1, desktop_camera_service_1, http_1;
    var APP_SERVICES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (authenticated_http_1_1) {
                authenticated_http_1 = authenticated_http_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (games_service_1_1) {
                games_service_1 = games_service_1_1;
            },
            function (geolocation_service_1_1) {
                geolocation_service_1 = geolocation_service_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (signalr_service_1_1) {
                signalr_service_1 = signalr_service_1_1;
            },
            function (ui_notification_service_1_1) {
                ui_notification_service_1 = ui_notification_service_1_1;
            },
            function (camera_service_1_1) {
                camera_service_1 = camera_service_1_1;
            },
            function (desktop_camera_service_1_1) {
                desktop_camera_service_1 = desktop_camera_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("APP_SERVICES", APP_SERVICES = [
                core_1.provide(http_1.ConnectionBackend, { useClass: http_1.XHRBackend }),
                app_config_1.Configuration,
                authenticated_http_1.AuthenticatedHttp,
                login_service_1.LoginService,
                games_service_1.GamesService,
                geolocation_service_1.GeolocationService,
                players_service_1.PlayersService,
                notification_service_1.NotificationService,
                core_1.provide(camera_service_1.CameraService, { useClass: desktop_camera_service_1.DesktopCameraService }),
                ui_notification_service_1.UiNotificationService,
                signalr_service_1.SignalRService
            ]);
        }
    }
});

//# sourceMappingURL=all.js.map
