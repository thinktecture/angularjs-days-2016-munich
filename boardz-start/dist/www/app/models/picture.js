System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Picture;
    return {
        setters:[],
        execute: function() {
            Picture = (function () {
                function Picture(pictureUrl) {
                    this.pictureUrl = pictureUrl;
                }
                return Picture;
            }());
            exports_1("Picture", Picture);
        }
    }
});

//# sourceMappingURL=picture.js.map
