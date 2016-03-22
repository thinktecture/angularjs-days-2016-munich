System.register(['angular2/core', '../services/platform.information.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, platform_information_service_1, router_1;
    var BackButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_information_service_1_1) {
                platform_information_service_1 = platform_information_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BackButtonDirective = (function () {
                function BackButtonDirective(_platformInformationService, _location) {
                    this._platformInformationService = _platformInformationService;
                    this._location = _location;
                    this.isHidden = true;
                    this.setHidden();
                }
                BackButtonDirective.prototype.setHidden = function () {
                    this.isHidden = this._platformInformationService.isWeb;
                };
                BackButtonDirective.prototype.onClick = function () {
                    this._location.back();
                };
                __decorate([
                    core_1.HostListener('click'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], BackButtonDirective.prototype, "onClick", null);
                BackButtonDirective = __decorate([
                    core_1.Directive({
                        selector: '[back-button]',
                        host: {
                            '[attr.hidden]': 'isHidden'
                        }
                    }), 
                    __metadata('design:paramtypes', [platform_information_service_1.PlatformInformationService, router_1.Location])
                ], BackButtonDirective);
                return BackButtonDirective;
            }());
            exports_1("BackButtonDirective", BackButtonDirective);
        }
    }
});

//# sourceMappingURL=back.button.directive.js.map
