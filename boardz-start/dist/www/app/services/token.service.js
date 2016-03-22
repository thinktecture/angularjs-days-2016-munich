System.register(['angular2/core', 'rxjs/Observable', './log.service'], function(exports_1, context_1) {
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
    var core_1, Observable_1, log_service_1;
    var tokenKey, usernameKey, expiryKey, TokenService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            tokenKey = 'Authentication::Token';
            usernameKey = 'Authentication::Username';
            expiryKey = 'Authentication::TokenExpiration';
            TokenService = (function () {
                function TokenService(_logService) {
                    this._logService = _logService;
                    var token = this.token;
                    if ((typeof token !== 'undefined') && (token !== null))
                        this._authenticated = true;
                }
                Object.defineProperty(TokenService.prototype, "token", {
                    get: function () {
                        var token = localStorage.getItem(tokenKey);
                        this._logService.logVerbose('TokenService: Retrieved token: ' + token);
                        return token;
                    },
                    set: function (token) {
                        this._logService.logVerbose('TokenService: Setting token: ' + token);
                        if (token === null) {
                            localStorage.removeItem(tokenKey);
                            this.username = null;
                            this.tokenExpiry = null;
                            this._authenticated = false;
                        }
                        else {
                            localStorage.setItem(tokenKey, token);
                            this._authenticated = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TokenService.prototype, "username", {
                    get: function () {
                        var username = localStorage.getItem(usernameKey);
                        this._logService.logVerbose('TokenService: Retrieved user name: ' + username);
                        return username;
                    },
                    set: function (username) {
                        this._logService.logVerbose('TokenService: Setting user name: ' + username);
                        if (username === null) {
                            localStorage.removeItem(usernameKey);
                        }
                        else {
                            localStorage.setItem(usernameKey, username);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TokenService.prototype, "tokenExpiry", {
                    get: function () {
                        var value = localStorage.getItem(expiryKey);
                        this._logService.logVerbose('TokenService: Retrieved token expiry: ' + value);
                        return (value !== null) ? new Date(value) : null;
                    },
                    set: function (expiryDate) {
                        this._logService.logVerbose('TokenService: Setting token expiry: ' + expiryDate);
                        if (expiryDate === null) {
                            localStorage.removeItem(expiryKey);
                        }
                        else {
                            localStorage.setItem(expiryKey, expiryDate.toISOString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                TokenService.prototype.check = function () {
                    return Observable_1.Observable.of(this._authenticated);
                };
                TokenService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], TokenService);
                return TokenService;
            }());
            exports_1("TokenService", TokenService);
        }
    }
});

//# sourceMappingURL=token.service.js.map
