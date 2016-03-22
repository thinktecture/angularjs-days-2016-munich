System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavigationEntry;
    return {
        setters:[],
        execute: function() {
            NavigationEntry = (function () {
                function NavigationEntry(links, icon, displayName) {
                    this.links = links;
                    this.icon = icon;
                    this.displayName = displayName;
                }
                return NavigationEntry;
            }());
            exports_1("NavigationEntry", NavigationEntry);
        }
    }
});

//# sourceMappingURL=navigationEntry.js.map
