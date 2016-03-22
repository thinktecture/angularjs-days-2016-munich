System.register(['angular2/core', './notification.service', '../models/notificationtype'], function(exports_1, context_1) {
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
    var core_1, notification_service_1, notificationtype_1;
    var UiNotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notificationtype_1_1) {
                notificationtype_1 = notificationtype_1_1;
            }],
        execute: function() {
            UiNotificationService = (function () {
                function UiNotificationService(_notificationService) {
                    this._notificationService = _notificationService;
                    this._notificationTypeMap = {};
                    this._notificationTypeMap[notificationtype_1.NotificationType.Information] = 'info';
                    this._notificationTypeMap[notificationtype_1.NotificationType.Error] = 'error';
                    this._notificationTypeMap[notificationtype_1.NotificationType.Warning] = 'notice';
                    this._notificationTypeMap[notificationtype_1.NotificationType.Success] = 'success';
                }
                UiNotificationService.prototype.subscribeToNotifications = function () {
                    var _this = this;
                    this._notificationService.notifications.subscribe(function (notification) {
                        _this.showUiNotification(notification);
                    });
                };
                UiNotificationService.prototype.showUiNotification = function (notification) {
                    var type = this.notificationTypeToPNotifyType(notification.type);
                    var settings = {
                        styling: 'bootstrap3',
                        title: type[0].toUpperCase() + type.substr(1),
                        text: notification.message,
                        type: type,
                        addclass: 'stack-bar-top',
                        cornerclass: '',
                        width: '100%',
                    };
                    new PNotify(settings);
                };
                UiNotificationService.prototype.notificationTypeToPNotifyType = function (type) {
                    return this._notificationTypeMap[type] || 'notice';
                };
                UiNotificationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationService])
                ], UiNotificationService);
                return UiNotificationService;
            }());
            exports_1("UiNotificationService", UiNotificationService);
        }
    }
});

//# sourceMappingURL=ui.notification.service.js.map
