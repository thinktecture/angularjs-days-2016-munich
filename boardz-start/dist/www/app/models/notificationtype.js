System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NotificationType;
    return {
        setters:[],
        execute: function() {
            (function (NotificationType) {
                NotificationType[NotificationType["Information"] = 0] = "Information";
                NotificationType[NotificationType["Success"] = 1] = "Success";
                NotificationType[NotificationType["Warning"] = 2] = "Warning";
                NotificationType[NotificationType["Error"] = 3] = "Error";
            })(NotificationType || (NotificationType = {}));
            exports_1("NotificationType", NotificationType);
        }
    }
});

//# sourceMappingURL=notificationtype.js.map
