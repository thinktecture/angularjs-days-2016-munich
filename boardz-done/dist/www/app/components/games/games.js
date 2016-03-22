System.register(['angular2/core', 'angular2/router', './details', './list'], function(exports_1, context_1) {
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
    var core_1, router_1, details_1, list_1;
    var Games;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (details_1_1) {
                details_1 = details_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            }],
        execute: function() {
            Games = (function () {
                function Games() {
                }
                Games = __decorate([
                    core_1.Component({
                        selector: 'games',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/components/games/games.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: list_1.GameList, name: 'GameList', useAsDefault: true, data: { displayName: 'Game overview' } },
                        { path: '/create', component: details_1.GameDetails, name: 'CreateGame', data: { displayName: 'Create a new Game' } },
                        { path: '/details/:id', component: details_1.GameDetails, name: 'GameDetails', data: { displayName: 'Game details' } }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Games);
                return Games;
            }());
            exports_1("Games", Games);
        }
    }
});

//# sourceMappingURL=games.js.map
