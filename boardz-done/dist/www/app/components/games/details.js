System.register(['angular2/core', 'angular2/router', '../../decorators/needsAuthentication', '../diagnostic/diagnostic', '../locateit/locateit', '../pictureit/pictureit', '../../models/game', '../../services/log.service', '../../services/games.service', '../../services/notification.service', '../../services/signalr.service', '../../services/players.service', '../../models/player', '../../services/login.service', '../../models/notification', '../../models/notificationtype'], function(exports_1, context_1) {
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
    var core_1, router_1, needsAuthentication_1, diagnostic_1, locateit_1, pictureit_1, game_1, log_service_1, games_service_1, notification_service_1, signalr_service_1, players_service_1, player_1, login_service_1, notification_1, notificationtype_1;
    var GameDetails;
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
            function (diagnostic_1_1) {
                diagnostic_1 = diagnostic_1_1;
            },
            function (locateit_1_1) {
                locateit_1 = locateit_1_1;
            },
            function (pictureit_1_1) {
                pictureit_1 = pictureit_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (games_service_1_1) {
                games_service_1 = games_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (signalr_service_1_1) {
                signalr_service_1 = signalr_service_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            },
            function (notificationtype_1_1) {
                notificationtype_1 = notificationtype_1_1;
            }],
        execute: function() {
            GameDetails = (function () {
                function GameDetails(_logService, _gameService, _router, _routeParams, _notificationService, _playersService, _signalRService, _loginService, _injector) {
                    this._logService = _logService;
                    this._gameService = _gameService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._notificationService = _notificationService;
                    this._playersService = _playersService;
                    this._signalRService = _signalRService;
                    this._loginService = _loginService;
                    this._injector = _injector;
                    this._pictureUrl = "";
                    this._coordinates = null;
                    this.active = true;
                    this.model = new game_1.Game();
                    this.originalModel = new game_1.Game();
                }
                GameDetails.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    if (!id) {
                        this.originalModel = this._gameService.deepClone(this.model = new game_1.Game());
                        return;
                    }
                    this.loadGame(id);
                };
                GameDetails.prototype.loadGame = function (id) {
                    var _this = this;
                    this._gameService.getById(id)
                        .subscribe(function (game) {
                        _this.originalModel = _this._gameService.deepClone(_this.model = game);
                        if (_this._needsReset)
                            _this.reset();
                    }, function (error) {
                        _this._logService.logError('Could not find game. Error was: ' + error);
                        _this._notificationService.notifyError('Could not load game data.');
                    });
                };
                GameDetails.prototype.abort = function () {
                    this._router.navigate(['GameList']);
                };
                GameDetails.prototype.reset = function () {
                    var _this = this;
                    this._needsReset = false;
                    // Based on: https://angular.io/docs/ts/latest/guide/forms.html
                    this.model = this._gameService.deepClone(this.originalModel);
                    // workaround to re-initialize the actual form controls states
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                GameDetails.prototype.saveChanges = function () {
                    var _this = this;
                    if (this.model.id === null) {
                        this._gameService.addGame(this.model)
                            .subscribe(function (newId) {
                            _this._notificationService.notifySuccess('New game was added.');
                            _this._needsReset = true;
                            _this.loadGame(newId);
                        }, function () { return _this._notificationService.notifyError('Could not save new game.'); });
                    }
                    else {
                        this._gameService.updateGame(this.model)
                            .subscribe(function (oldId) {
                            _this._notificationService.notifySuccess('Game data was updated.');
                            _this._needsReset = true;
                            _this.loadGame(oldId);
                        }, function () {
                            _this._notificationService.notifyError('Could not update game data.');
                        });
                    }
                };
                GameDetails.prototype.deleteGame = function () {
                    var _this = this;
                    if (window.confirm('Really delete the game "' + this.originalModel.name + '" ?')) {
                        this._gameService.deleteGame(this.originalModel.id)
                            .subscribe(function () {
                            _this._notificationService.notifySuccess('Game data was deleted.');
                            _this.abort();
                        }, function () { return _this._notificationService.notifyError('Could not delete game data.'); });
                    }
                };
                GameDetails.prototype.useLocation = function (coordinates) {
                    this._coordinates = coordinates;
                };
                GameDetails.prototype.usePicture = function (pictureUrl) {
                    this._pictureUrl = pictureUrl;
                };
                GameDetails.prototype.canPlay = function () {
                    return this._coordinates && this._pictureUrl;
                };
                GameDetails.prototype.iAmPlaying = function () {
                    var _this = this;
                    if (!this.canPlay()) {
                        return;
                    }
                    this._sending = true;
                    this._signalRService.sendIAmGaming(this.model.name);
                    var player = new player_1.Player();
                    player.name = this._loginService.username;
                    player.boardGameId = this.model.id;
                    player.coordinate = this._coordinates;
                    player.imageUrl = this._pictureUrl;
                    this._playersService.add(player)
                        .subscribe(function () {
                        _this._notificationService.notify(new notification_1.Notification("Thanks for sharing, " + player.name, notificationtype_1.NotificationType.Success));
                    }, function () { return console.log('error while uploading'); }, function () { return _this._sending = false; });
                };
                GameDetails = __decorate([
                    core_1.Component({
                        selector: 'gameDetail',
                        directives: [diagnostic_1.DiagnosticComponent, locateit_1.LocateItComponent, pictureit_1.PictureItComponent],
                        templateUrl: 'app/components/games/details.html',
                        inputs: ['game']
                    }),
                    needsAuthentication_1.NeedsAuthentication(), 
                    __metadata('design:paramtypes', [log_service_1.LogService, games_service_1.GamesService, router_1.Router, router_1.RouteParams, notification_service_1.NotificationService, players_service_1.PlayersService, signalr_service_1.SignalRService, login_service_1.LoginService, core_1.Injector])
                ], GameDetails);
                return GameDetails;
            }());
            exports_1("GameDetails", GameDetails);
        }
    }
});

//# sourceMappingURL=details.js.map
