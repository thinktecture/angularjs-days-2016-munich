System.register(['angular2/core', 'angular2/http', '../app-config', './token.service'], function(exports_1, context_1) {
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
    var core_1, http_1, app_config_1, token_service_1;
    var AuthenticatedHttp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            }],
        execute: function() {
            AuthenticatedHttp = (function () {
                function AuthenticatedHttp(_http, _config, _tokenService) {
                    this._http = _http;
                    this._config = _config;
                    this._tokenService = _tokenService;
                }
                AuthenticatedHttp.prototype.buildUrl = function (appendix) {
                    return "" + this._config.apiEndpoint + appendix;
                };
                AuthenticatedHttp.prototype.request = function (url, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.request(url, options);
                };
                AuthenticatedHttp.prototype.get = function (url, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.get(url, options);
                };
                AuthenticatedHttp.prototype.post = function (url, body, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.post(url, body, options);
                };
                AuthenticatedHttp.prototype.put = function (url, body, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.put(url, body, options);
                };
                AuthenticatedHttp.prototype.delete = function (url, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.delete(url, options);
                };
                AuthenticatedHttp.prototype.patch = function (url, body, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.patch(url, body, options);
                };
                AuthenticatedHttp.prototype.head = function (url, options) {
                    url = this.buildUrl(url);
                    options = this.prepareOptions(options);
                    return this._http.head(url, options);
                };
                AuthenticatedHttp.prototype.prepareOptions = function (options) {
                    var token = this._tokenService.token;
                    if (token) {
                        options = options || {};
                        if (!options.headers)
                            options.headers = new http_1.Headers();
                        options.headers.append('Authorization', 'Bearer ' + token);
                    }
                    return options;
                };
                AuthenticatedHttp = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_config_1.Configuration, token_service_1.TokenService])
                ], AuthenticatedHttp);
                return AuthenticatedHttp;
            }());
            exports_1("AuthenticatedHttp", AuthenticatedHttp);
        }
    }
});

//# sourceMappingURL=authenticated.http.js.map
