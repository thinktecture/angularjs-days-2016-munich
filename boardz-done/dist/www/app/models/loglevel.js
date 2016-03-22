System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LogLevel;
    return {
        setters:[],
        execute: function() {
            (function (LogLevel) {
                LogLevel[LogLevel["Critical"] = 0] = "Critical";
                LogLevel[LogLevel["Error"] = 1] = "Error";
                LogLevel[LogLevel["Warning"] = 2] = "Warning";
                LogLevel[LogLevel["Info"] = 3] = "Info";
                LogLevel[LogLevel["Debug"] = 4] = "Debug";
                LogLevel[LogLevel["Verbose"] = 5] = "Verbose";
            })(LogLevel || (LogLevel = {}));
            exports_1("LogLevel", LogLevel);
        }
    }
});

//# sourceMappingURL=loglevel.js.map
