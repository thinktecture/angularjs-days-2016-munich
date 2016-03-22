System.register(['angular2/core', 'angular2/common', '../../services/login.service', '../../services/token.service', '../../services/notification.service', '../../services/log.service'], function(exports_1, context_1) {
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
    var core_1, common_1, login_service_1, token_service_1, notification_service_1, log_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(loginService, _tokenService, _notificationService, _logService) {
                    this.loginService = loginService;
                    this._tokenService = _tokenService;
                    this._notificationService = _notificationService;
                    this._logService = _logService;
                    this.notifications = [];
                    this.loggedIn = false;
                    this.currentLocation = 'BoardZ!';
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._notificationService.notifications.subscribe(function (notification) { return _this.onNotification(notification); });
                    this._tokenService.check().subscribe(function (result) {
                        _this._logService.logDebug('Headerbar: Received notification about tokenstore status change. Result: ' + result);
                        _this.loggedIn = result;
                    });
                };
                HeaderComponent.prototype.dismiss = function (notification) {
                    if (notification) {
                        var index = this.notifications.indexOf(notification);
                        if (index > -1) {
                            this.notifications.splice(index, 1);
                        }
                    }
                    else {
                        this.notifications = [];
                    }
                    return false;
                };
                HeaderComponent.prototype.onNotification = function (notification) {
                    this.notifications.unshift(notification);
                };
                HeaderComponent.prototype.logout = function (event) {
                    event.preventDefault();
                    this.loginService.logout();
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'boardz-header',
                        directives: [common_1.NgClass],
                        templateUrl: 'app/components/header/header.html'
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, token_service_1.TokenService, notification_service_1.NotificationService, log_service_1.LogService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=header.js.map
