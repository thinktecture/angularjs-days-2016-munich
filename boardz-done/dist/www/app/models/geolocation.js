System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GeoLocation;
    return {
        setters:[],
        execute: function() {
            GeoLocation = (function () {
                function GeoLocation(latitude, longitude, zoom) {
                    this.latitude = latitude;
                    this.longitude = longitude;
                    this.zoom = zoom;
                }
                return GeoLocation;
            }());
            exports_1("GeoLocation", GeoLocation);
        }
    }
});

//# sourceMappingURL=geolocation.js.map
