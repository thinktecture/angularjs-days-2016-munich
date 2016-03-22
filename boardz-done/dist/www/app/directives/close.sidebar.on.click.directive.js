System.register(['angular2/core', '../services/platform.information.service'], function(exports_1, context_1) {
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
    var core_1, platform_information_service_1;
    var CloseSidebarOnClickDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_information_service_1_1) {
                platform_information_service_1 = platform_information_service_1_1;
            }],
        execute: function() {
            // This is currently _not_ the correct Angular 2 way of doing this.
            // There is no Angular 2 way, yet :)
            CloseSidebarOnClickDirective = (function () {
                function CloseSidebarOnClickDirective(_platformInformationService) {
                    this._platformInformationService = _platformInformationService;
                }
                CloseSidebarOnClickDirective.prototype.onClick = function () {
                    if (!this._platformInformationService.isMobile) {
                    }
                    document.body.classList.remove('sidebar-open');
                };
                __decorate([
                    core_1.HostListener('click'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], CloseSidebarOnClickDirective.prototype, "onClick", null);
                CloseSidebarOnClickDirective = __decorate([
                    core_1.Directive({
                        selector: '[close-sidebar-on-click]'
                    }), 
                    __metadata('design:paramtypes', [platform_information_service_1.PlatformInformationService])
                ], CloseSidebarOnClickDirective);
                return CloseSidebarOnClickDirective;
            }());
            exports_1("CloseSidebarOnClickDirective", CloseSidebarOnClickDirective);
        }
    }
});

//# sourceMappingURL=close.sidebar.on.click.directive.js.map
