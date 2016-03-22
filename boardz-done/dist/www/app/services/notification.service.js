System.register(['angular2/core', 'rxjs/Subject', './log.service', '../models/notification', '../models/notificationtype'], function(exports_1, context_1) {
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
    var core_1, Subject_1, log_service_1, notification_1, notificationtype_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            },
            function (notificationtype_1_1) {
                notificationtype_1 = notificationtype_1_1;
            }],
        execute: function() {
            NotificationService = (function () {
                function NotificationService(_logService) {
                    this._logService = _logService;
                    this.notifications = new Subject_1.Subject();
                }
                NotificationService.prototype.notify = function (notification) {
                    if (!notification.message) {
                        return;
                    }
                    this._logService.logDebug('NotificationService.notify received notification: ' + JSON.stringify(notification));
                    this.notifications.next(notification);
                };
                NotificationService.prototype.notifyInformation = function (message) {
                    this.notify(new notification_1.Notification(message, notificationtype_1.NotificationType.Information));
                };
                NotificationService.prototype.notifySuccess = function (message) {
                    this.notify(new notification_1.Notification(message, notificationtype_1.NotificationType.Success));
                };
                NotificationService.prototype.notifyWarning = function (message) {
                    this.notify(new notification_1.Notification(message, notificationtype_1.NotificationType.Warning));
                };
                NotificationService.prototype.notifyError = function (message) {
                    this.notify(new notification_1.Notification(message, notificationtype_1.NotificationType.Error));
                };
                NotificationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], NotificationService);
                return NotificationService;
            }());
            exports_1("NotificationService", NotificationService);
        }
    }
});

//# sourceMappingURL=notification.service.js.map
