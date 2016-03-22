System.register(['angular2/core', '../models/loglevel'], function(exports_1, context_1) {
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
    var core_1, loglevel_1;
    var LogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loglevel_1_1) {
                loglevel_1 = loglevel_1_1;
            }],
        execute: function() {
            LogService = (function () {
                function LogService() {
                    this.defaultLogLevel = loglevel_1.LogLevel.Info;
                    this.maximumLogLevel = loglevel_1.LogLevel.Warning;
                }
                LogService.prototype.log = function (message, logLevel) {
                    if (!logLevel)
                        logLevel = this.defaultLogLevel;
                    if (logLevel > this.maximumLogLevel)
                        return;
                    this.doLog(this.formatMessage(logLevel, message));
                };
                LogService.prototype.logVerbose = function (message) {
                    this.log(message, loglevel_1.LogLevel.Verbose);
                };
                LogService.prototype.logDebug = function (message) {
                    this.log(message, loglevel_1.LogLevel.Debug);
                };
                LogService.prototype.logInfo = function (message) {
                    this.log(message, loglevel_1.LogLevel.Info);
                };
                LogService.prototype.logWarning = function (message) {
                    this.log(message, loglevel_1.LogLevel.Warning);
                };
                LogService.prototype.logError = function (message) {
                    this.log(message, loglevel_1.LogLevel.Error);
                };
                LogService.prototype.logCritical = function (message) {
                    this.log(message, loglevel_1.LogLevel.Critical);
                };
                LogService.prototype.doLog = function (formattedMessage) {
                    // here to be overriden
                };
                LogService.prototype.getIsoDate = function () {
                    return new Date().toISOString();
                };
                LogService.prototype.getLogLevelName = function (logLevel) {
                    return loglevel_1.LogLevel[logLevel];
                };
                LogService.prototype.formatMessage = function (logLevel, message) {
                    return this.getIsoDate() + ' [' + this.getLogLevelName(logLevel) + ']: ' + message;
                    ;
                };
                LogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LogService);
                return LogService;
            }());
            exports_1("LogService", LogService);
        }
    }
});

//# sourceMappingURL=log.service.js.map
