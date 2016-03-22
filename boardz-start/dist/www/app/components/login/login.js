System.register(['angular2/core', 'angular2/router', '../../services/login.service', '../../services/log.service', '../../services/notification.service', '../../services/signalr.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_service_1, log_service_1, notification_service_1, signalr_service_1;
    var LoginForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (signalr_service_1_1) {
                signalr_service_1 = signalr_service_1_1;
            }],
        execute: function() {
            LoginForm = (function () {
                function LoginForm(_router, _loginService, _logService, _notificationService, _signalRService) {
                    this._router = _router;
                    this._loginService = _loginService;
                    this._logService = _logService;
                    this._notificationService = _notificationService;
                    this._signalRService = _signalRService;
                    this._hasError = false;
                }
                LoginForm.prototype.doLogin = function () {
                    var _this = this;
                    this._logService.logDebug('LoginForm.doLogin called');
                    this._loginService.login(this._userName, this._password)
                        .subscribe(function () {
                        _this._signalRService.start();
                        _this.setError(false);
                        _this._router.navigate(['Dashboard']);
                    }, function () {
                        _this.setError(true);
                        _this._notificationService.notifyError('Login was unsuccessful.');
                    });
                };
                LoginForm.prototype.setError = function (value) {
                    this._logService.logDebug('LoginForm.setError: Setting error state to: ' + value);
                    this._hasError = value;
                };
                LoginForm = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/login/login.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, log_service_1.LogService, notification_service_1.NotificationService, signalr_service_1.SignalRService])
                ], LoginForm);
                return LoginForm;
            }());
            exports_1("LoginForm", LoginForm);
        }
    }
});

//# sourceMappingURL=login.js.map
