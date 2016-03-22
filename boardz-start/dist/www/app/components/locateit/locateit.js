///<reference path="../../../../../typings/main/ambient/leaflet/leaflet.d.ts" />
System.register(['angular2/core', 'angular2/common', '../../services/geolocation.service'], function(exports_1, context_1) {
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
    var core_1, common_1, geolocation_service_1;
    var LocateItComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (geolocation_service_1_1) {
                geolocation_service_1 = geolocation_service_1_1;
            }],
        execute: function() {
            LocateItComponent = (function () {
                function LocateItComponent(_geolocationService) {
                    this._geolocationService = _geolocationService;
                    this._hasError = false;
                    this._isLocating = false;
                    this._coords = null;
                    this._onLocated = new core_1.EventEmitter();
                    L.Icon.Default.imagePath = 'app/images';
                }
                LocateItComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Berlin ;-)
                    this.map = L.map('map').setView([52.5167, 13.3833], 7);
                    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
                        maxZoom: 13
                    }).addTo(this.map);
                    this._isLocating = true;
                    this._geolocationService.locate()
                        .then(function (coords) {
                        _this._hasError = false;
                        _this._isLocating = false;
                        _this._coords = coords;
                        _this._onLocated.emit(coords);
                        _this.setMapMarkerAndView();
                    })
                        .catch(function () {
                        _this._hasError = true;
                        _this._isLocating = false;
                    });
                };
                LocateItComponent.prototype.setMapMarkerAndView = function () {
                    var coordinates = [this._coords.latitude, this._coords.longitude];
                    this.map.setView(coordinates, 13);
                    L.marker(coordinates).addTo(this.map);
                };
                __decorate([
                    core_1.Output('onLocated'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], LocateItComponent.prototype, "_onLocated", void 0);
                LocateItComponent = __decorate([
                    core_1.Component({
                        selector: 'locate-it',
                        pipes: [common_1.JsonPipe],
                        templateUrl: 'app/components/locateit/locateit.html'
                    }), 
                    __metadata('design:paramtypes', [geolocation_service_1.GeolocationService])
                ], LocateItComponent);
                return LocateItComponent;
            }());
            exports_1("LocateItComponent", LocateItComponent);
        }
    }
});

//# sourceMappingURL=locateit.js.map
