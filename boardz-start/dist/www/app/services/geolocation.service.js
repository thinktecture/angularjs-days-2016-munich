System.register(['angular2/core', '../models/geolocation'], function(exports_1, context_1) {
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
    var core_1, geolocation_1;
    var GeolocationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (geolocation_1_1) {
                geolocation_1 = geolocation_1_1;
            }],
        execute: function() {
            GeolocationService = (function () {
                function GeolocationService() {
                }
                GeolocationService.prototype.locate = function () {
                    return new Promise(function (resolve, reject) {
                        if (window.navigator && window.navigator.geolocation) {
                            window.navigator.geolocation.getCurrentPosition(function (pos) {
                                resolve(new geolocation_1.GeoLocation(pos.coords.latitude, pos.coords.longitude, 16));
                            }, function (err) {
                                reject(err);
                            }, {
                                enableHighAccuracy: false,
                                timeout: 5000,
                                maximumAge: 0
                            });
                        }
                        else {
                            reject('This platform does not support geolocation.');
                        }
                    });
                };
                GeolocationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GeolocationService);
                return GeolocationService;
            }());
            exports_1("GeolocationService", GeolocationService);
        }
    }
});

//# sourceMappingURL=geolocation.service.js.map
