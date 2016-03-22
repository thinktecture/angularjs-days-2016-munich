System.register(['angular2/core', '../../services/geolocation.service', '../../services/players.service', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, geolocation_service_1, players_service_1, common_1;
    var RadiusSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (geolocation_service_1_1) {
                geolocation_service_1 = geolocation_service_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RadiusSearchComponent = (function () {
                function RadiusSearchComponent(_geoLocationService, _playersService) {
                    this._geoLocationService = _geoLocationService;
                    this._playersService = _playersService;
                    this._radius = 10;
                }
                RadiusSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._geoLocationService.locate()
                        .then(function (coordinates) { return _this._location = coordinates; });
                };
                RadiusSearchComponent.prototype.search = function () {
                    var _this = this;
                    this._playersService.findNearby(this._radius, this._location)
                        .subscribe(function (results) { return _this._players = results; });
                };
                RadiusSearchComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/radiussearch/radiussearch.html',
                        pipes: [common_1.DecimalPipe]
                    }), 
                    __metadata('design:paramtypes', [geolocation_service_1.GeolocationService, players_service_1.PlayersService])
                ], RadiusSearchComponent);
                return RadiusSearchComponent;
            }());
            exports_1("RadiusSearchComponent", RadiusSearchComponent);
        }
    }
});

//# sourceMappingURL=radiussearch.js.map
