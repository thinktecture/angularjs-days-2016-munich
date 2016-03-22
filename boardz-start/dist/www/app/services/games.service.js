System.register(['angular2/core', 'angular2/http', './authenticated.http'], function(exports_1, context_1) {
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
    var core_1, http_1, authenticated_http_1;
    var GamesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (authenticated_http_1_1) {
                authenticated_http_1 = authenticated_http_1_1;
            }],
        execute: function() {
            GamesService = (function () {
                function GamesService(_http) {
                    this._http = _http;
                }
                GamesService.prototype.getRequestOptions = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Accept', 'text/plain');
                    headers.append('Accept', '*/*');
                    headers.append('Content-Type', 'application/json;charset=UTF-8');
                    return { headers: headers };
                };
                GamesService.prototype.getAll = function () {
                    return this._http.get('api/boardgames/list').map(function (response) { return (response.json()); });
                };
                GamesService.prototype.deepClone = function (game) {
                    return JSON.parse(JSON.stringify(game));
                };
                GamesService.prototype.getGameCount = function () {
                    return this.getAll().map(function (games) { return games.length; });
                };
                GamesService.prototype.getById = function (id) {
                    return this._http.get("api/boardgames/single?id=" + id)
                        .map(function (response) { return response.json(); });
                };
                GamesService.prototype.addGame = function (game) {
                    return this._http.post("api/boardgames/add", JSON.stringify(game), this.getRequestOptions())
                        .map(function (response) { return response.json(); });
                };
                GamesService.prototype.updateGame = function (game) {
                    return this._http.put("api/boardgames/update", JSON.stringify(game), this.getRequestOptions())
                        .map(function (response) { return game.id; });
                };
                GamesService.prototype.deleteGame = function (id) {
                    return this._http.delete("api/boardgames/remove?id=" + id)
                        .map(function (response) { return response.text(); });
                };
                GamesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [authenticated_http_1.AuthenticatedHttp])
                ], GamesService);
                return GamesService;
            }());
            exports_1("GamesService", GamesService);
        }
    }
});

//# sourceMappingURL=games.service.js.map
