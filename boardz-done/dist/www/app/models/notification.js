System.register(['./notificationtype'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var notificationtype_1;
    var Notification;
    return {
        setters:[
            function (notificationtype_1_1) {
                notificationtype_1 = notificationtype_1_1;
            }],
        execute: function() {
            Notification = (function () {
                function Notification(message, type) {
                    if (type === void 0) { type = notificationtype_1.NotificationType.Information; }
                    this.message = message;
                    this.type = type;
                }
                Object.defineProperty(Notification.prototype, "iconCssClass", {
                    get: function () {
                        switch (this.type) {
                            case notificationtype_1.NotificationType.Information:
                                return 'fa-info';
                            case notificationtype_1.NotificationType.Success:
                                return 'fa-hand-peace-o';
                            case notificationtype_1.NotificationType.Warning:
                                return 'fa-warning';
                            case notificationtype_1.NotificationType.Error:
                                return 'fa-exclamation-triangle danger';
                            default:
                                return 'fa-info';
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return Notification;
            }());
            exports_1("Notification", Notification);
        }
    }
});

//# sourceMappingURL=notification.js.map
