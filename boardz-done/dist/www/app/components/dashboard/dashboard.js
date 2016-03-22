System.register(['angular2/core', 'angular2/router', '../../decorators/needsAuthentication', '../widget/widget', '../../services/games.service', '../../services/players.service'], function(exports_1, context_1) {
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
    var core_1, router_1, needsAuthentication_1, widget_1, games_service_1, players_service_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (needsAuthentication_1_1) {
                needsAuthentication_1 = needsAuthentication_1_1;
            },
            function (widget_1_1) {
                widget_1 = widget_1_1;
            },
            function (games_service_1_1) {
                games_service_1 = games_service_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(_gamesService, _playersService) {
                    this._gamesService = _gamesService;
                    this._playersService = _playersService;
                    this.playerCount = '-';
                    this.gameCount = '-';
                }
                Dashboard.prototype.ngOnInit = function () {
                    var _this = this;
                    this._playersService.getPlayerCount()
                        .subscribe(function (result) { return _this.playerCount = result.toString(); });
                    this._gamesService.getGameCount()
                        .subscribe(function (result) { return _this.gameCount = result.toString(); });
                };
                Dashboard = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES, widget_1.WidgetComponent],
                        templateUrl: 'app/components/dashboard/dashboard.html'
                    }),
                    needsAuthentication_1.NeedsAuthentication(), 
                    __metadata('design:paramtypes', [games_service_1.GamesService, players_service_1.PlayersService])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=dashboard.js.map
