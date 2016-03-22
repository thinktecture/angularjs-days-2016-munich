System.register(['angular2/core', '../app-config', './log.service', './token.service'], function(exports_1, context_1) {
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
    var core_1, app_config_1, log_service_1, token_service_1;
    var SignalRService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            }],
        execute: function() {
            SignalRService = (function () {
                function SignalRService(_configuration, _tokenService, _logService) {
                    this._configuration = _configuration;
                    this._tokenService = _tokenService;
                    this._logService = _logService;
                    this.someoneJoinedAGame = new core_1.EventEmitter();
                    this._hubConnection = $.hubConnection;
                }
                SignalRService.prototype.sendIAmGaming = function (game) {
                    if (!this._connection) {
                        return;
                    }
                    this._playerProxy.invoke('iAmPlaying', game);
                };
                SignalRService.prototype.start = function () {
                    var _this = this;
                    if (this._connection || !this._tokenService.token) {
                        return;
                    }
                    this._connection = this._hubConnection(this._configuration.apiEndpoint + "signalr");
                    this._connection.qs = { 'authorization': this._tokenService.token };
                    this._playerProxy = this._connection.createHubProxy('playerHub');
                    this._playerProxy.on('someoneStartedPlaying', function (username, game) {
                        var msg = username + " started playing " + game + ".";
                        _this._logService.logDebug("Received SignalR message: " + msg);
                        _this.someoneJoinedAGame.emit(msg);
                    });
                    this._connection.start()
                        .done(function () { return _this._logService.logDebug('SignalR connection established.'); })
                        .fail(function () { return _this._logService.logError('SignalR connection not established.'); });
                };
                SignalRService.prototype.stop = function () {
                    if (this._connection) {
                        this._connection.stop();
                    }
                    this._connection = undefined;
                    this._playerProxy = undefined;
                };
                SignalRService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [app_config_1.Configuration, token_service_1.TokenService, log_service_1.LogService])
                ], SignalRService);
                return SignalRService;
            }());
            exports_1("SignalRService", SignalRService);
        }
    }
});

//# sourceMappingURL=signalr.service.js.map
