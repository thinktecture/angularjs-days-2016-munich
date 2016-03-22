System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Configuration;
    return {
        setters:[],
        execute: function() {
            Configuration = (function () {
                function Configuration() {
                    this.apiEndpoint = 'https://boardzapi.azurewebsites.net/';
                }
                return Configuration;
            }());
            exports_1("Configuration", Configuration);
        }
    }
});

//# sourceMappingURL=app-config.js.map
