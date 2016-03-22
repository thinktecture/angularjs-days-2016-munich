System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Observable', './token.service', '../app-config', './log.service', './signalr.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, Observable_1, token_service_1, app_config_1, log_service_1, signalr_service_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (signalr_service_1_1) {
                signalr_service_1 = signalr_service_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_config, _logService, _http, _router, _tokenService, _signalRService) {
                    var _this = this;
                    this._config = _config;
                    this._logService = _logService;
                    this._http = _http;
                    this._router = _router;
                    this._tokenService = _tokenService;
                    this._signalRService = _signalRService;
                    this._tokenService.check()
                        .subscribe(function (value) {
                        if (!value)
                            _this.logout();
                    });
                }
                Object.defineProperty(LoginService.prototype, "isAuthenticated", {
                    get: function () {
                        return this._tokenService.token !== null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LoginService.prototype, "username", {
                    get: function () {
                        return this._tokenService.username;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Logout the current user (remove token and navigate to unprotected route)
                 */
                LoginService.prototype.logout = function () {
                    this._logService.logDebug('LoginService.logout called');
                    this._signalRService.stop();
                    this._lastLoginUnsuccessful = false;
                    this._tokenService.token = null;
                    this._router.navigate(['Login']);
                };
                /**
                 * Login the user by her username and password
                 * @param username
                 * @param password
                 * @returns {Subject<TokenData>}
                 */
                LoginService.prototype.login = function (username, password) {
                    var _this = this;
                    this.logout();
                    var body = 'grant_type=password&username=' + username + '&password=' + password, options = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
                    return Observable_1.Observable.create(function (observer) {
                        _this._http.post(_this._config.apiEndpoint + 'token', body, options)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (tokenData) {
                            _this.saveToken(tokenData.access_token);
                            _this._tokenService.username = username;
                            var expiryDate = new Date();
                            expiryDate.setSeconds(expiryDate.getSeconds() + tokenData.expires_in);
                            _this._tokenService.tokenExpiry = expiryDate;
                            observer.next(tokenData);
                        }, function (error) { return observer.error(error); }, function () { return observer.complete(); });
                    });
                };
                LoginService.prototype.handleError = function (error) {
                    this._logService.logDebug('LoginService encountered an error: ' + error);
                    this._lastLoginUnsuccessful = true;
                };
                LoginService.prototype.saveToken = function (token) {
                    this._logService.logVerbose('LoginService.saveToken: Saving token ' + token);
                    this._lastLoginUnsuccessful = false;
                    this._tokenService.token = token;
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [app_config_1.Configuration, log_service_1.LogService, http_1.Http, router_1.Router, token_service_1.TokenService, signalr_service_1.SignalRService])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});

//# sourceMappingURL=login.service.js.map
