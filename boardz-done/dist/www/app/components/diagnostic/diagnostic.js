System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DiagnosticComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DiagnosticComponent = (function () {
                function DiagnosticComponent() {
                }
                __decorate([
                    core_1.Input('is-diagnostic-enabled'), 
                    __metadata('design:type', Boolean)
                ], DiagnosticComponent.prototype, "_isDiagnosticEnabled", void 0);
                __decorate([
                    core_1.Input('data'), 
                    __metadata('design:type', Object)
                ], DiagnosticComponent.prototype, "_data", void 0);
                __decorate([
                    core_1.Input('title'), 
                    __metadata('design:type', String)
                ], DiagnosticComponent.prototype, "_title", void 0);
                DiagnosticComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnostic',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        pipes: [common_1.JsonPipe],
                        templateUrl: 'app/components/diagnostic/diagnostic.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DiagnosticComponent);
                return DiagnosticComponent;
            }());
            exports_1("DiagnosticComponent", DiagnosticComponent);
        }
    }
});

//# sourceMappingURL=diagnostic.js.map
