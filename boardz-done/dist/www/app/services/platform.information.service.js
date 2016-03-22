System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlatformInformationService;
    return {
        setters:[],
        execute: function() {
            PlatformInformationService = (function () {
                function PlatformInformationService() {
                    this.guessPlatform();
                }
                Object.defineProperty(PlatformInformationService.prototype, "isMobile", {
                    get: function () {
                        return this._isMobile;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PlatformInformationService.prototype, "isDesktop", {
                    get: function () {
                        return this._isDesktop;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PlatformInformationService.prototype, "isWeb", {
                    get: function () {
                        return this._isWeb;
                    },
                    enumerable: true,
                    configurable: true
                });
                PlatformInformationService.prototype.guessPlatform = function () {
                    this._isMobile = !!window.cordova;
                    this._isDesktop = window.navigator.userAgent.match(/Electron/) !== null;
                    this._isWeb = !(this._isMobile || this._isDesktop);
                };
                return PlatformInformationService;
            }());
            exports_1("PlatformInformationService", PlatformInformationService);
        }
    }
});

//# sourceMappingURL=platform.information.service.js.map
