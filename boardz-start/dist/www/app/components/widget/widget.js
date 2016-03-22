System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var WidgetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            WidgetComponent = (function () {
                function WidgetComponent() {
                }
                __decorate([
                    core_1.Input('caption'), 
                    __metadata('design:type', String)
                ], WidgetComponent.prototype, "_caption", void 0);
                __decorate([
                    core_1.Input('count'), 
                    __metadata('design:type', String)
                ], WidgetComponent.prototype, "_count", void 0);
                __decorate([
                    core_1.Input('icon'), 
                    __metadata('design:type', String)
                ], WidgetComponent.prototype, "_icon", void 0);
                __decorate([
                    core_1.Input('color'), 
                    __metadata('design:type', String)
                ], WidgetComponent.prototype, "_color", void 0);
                __decorate([
                    core_1.Input('target'), 
                    __metadata('design:type', String)
                ], WidgetComponent.prototype, "_target", void 0);
                WidgetComponent = __decorate([
                    core_1.Component({
                        selector: 'widget',
                        templateUrl: 'app/components/widget/widget.html',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WidgetComponent);
                return WidgetComponent;
            }());
            exports_1("WidgetComponent", WidgetComponent);
        }
    }
});

//# sourceMappingURL=widget.js.map
