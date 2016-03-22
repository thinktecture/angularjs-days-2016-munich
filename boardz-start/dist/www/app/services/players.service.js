System.register(['angular2/core', './authenticated.http', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, authenticated_http_1, http_1;
    var PlayersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authenticated_http_1_1) {
                authenticated_http_1 = authenticated_http_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PlayersService = (function () {
                function PlayersService(_http) {
                    this._http = _http;
                }
                PlayersService.prototype.getRequestOptions = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Accept', 'text/plain');
                    headers.append('Accept', '*/*');
                    headers.append('Content-Type', 'application/json;charset=UTF-8');
                    return { headers: headers };
                };
                PlayersService.prototype.getAll = function () {
                    return this._http.get('api/players/list').map(function (response) { return (response.json()); });
                };
                PlayersService.prototype.getById = function (id) {
                    return this._http.get("api/players/single?id=" + id).map(function (response) { return response.json(); });
                };
                PlayersService.prototype.getPlayerCount = function () {
                    return this._http.get('api/players/playercount').map(function (r) { return r.json(); });
                };
                PlayersService.prototype.findNearby = function (radius, coordinates) {
                    return this._http.get("api/players/FindNearby?radius=" + radius + "&coordinate.latitude=" + coordinates.latitude + "&coordinate.longitude=" + coordinates.longitude)
                        .map(function (r) {
                        return r.json();
                    });
                };
                PlayersService.prototype.add = function (player) {
                    return this._http.post("api/players/add", JSON.stringify(player), this.getRequestOptions())
                        .map(function (response) { return response.json(); });
                };
                PlayersService.prototype.update = function (player) {
                    return this._http.put("api/players/update", JSON.stringify(player), this.getRequestOptions())
                        .map(function (response) { return player.id; });
                };
                PlayersService.prototype.delete = function (id) {
                    return this._http.delete("api/players/remove?id=" + id)
                        .map(function (response) { return response.text(); });
                };
                PlayersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [authenticated_http_1.AuthenticatedHttp])
                ], PlayersService);
                return PlayersService;
            }());
            exports_1("PlayersService", PlayersService);
        }
    }
});

//# sourceMappingURL=players.service.js.map
