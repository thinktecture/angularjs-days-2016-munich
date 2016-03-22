System.register(['angular2/core', 'angular2/router', '../../decorators/needsAuthentication', '../../services/games.service', '../../services/notification.service'], function(exports_1, context_1) {
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
    var core_1, router_1, needsAuthentication_1, games_service_1, notification_service_1;
    var GameList;
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
            function (games_service_1_1) {
                games_service_1 = games_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            GameList = (function () {
                function GameList(_gamesService, _router, _notificationService) {
                    this._gamesService = _gamesService;
                    this._router = _router;
                    this._notificationService = _notificationService;
                }
                GameList.prototype.openGameDetails = function (game) {
                    this._router.navigate(['GameDetails', { id: game.id }]);
                };
                GameList.prototype.openCreateGame = function () {
                    this._router.navigate(['CreateGame']);
                };
                GameList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._gamesService.getAll()
                        .subscribe(function (games) { return _this.games = games; }, function (err) { return _this._notificationService.notifyError('Error while fetching game data'); });
                };
                GameList = __decorate([
                    core_1.Component({
                        selector: 'gamelist',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/components/games/list.html'
                    }),
                    needsAuthentication_1.NeedsAuthentication(), 
                    __metadata('design:paramtypes', [games_service_1.GamesService, router_1.Router, notification_service_1.NotificationService])
                ], GameList);
                return GameList;
            }());
            exports_1("GameList", GameList);
        }
    }
});

//# sourceMappingURL=list.js.map
