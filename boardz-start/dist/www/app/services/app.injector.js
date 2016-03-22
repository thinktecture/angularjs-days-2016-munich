System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var appInjectorRef, appInjector;
    return {
        setters:[],
        execute: function() {
            exports_1("appInjector", appInjector = function (injector) {
                if (injector) {
                    appInjectorRef = injector;
                }
                return appInjectorRef;
            });
        }
    }
});

//# sourceMappingURL=app.injector.js.map
