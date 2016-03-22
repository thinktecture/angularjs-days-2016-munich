System.register(['angular2/router', '../services/app.injector', '../services/token.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, app_injector_1, token_service_1;
    var NeedsAuthentication;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            }],
        execute: function() {
            exports_1("NeedsAuthentication", NeedsAuthentication = function () {
                return router_1.CanActivate(function (to, from, target) {
                    if (target === void 0) { target = ['/']; }
                    var injector = app_injector_1.appInjector(); // Get the stored reference to the application injector
                    var tokenService = injector.get(token_service_1.TokenService);
                    var router = injector.get(router_1.Router);
                    if (tokenService.token)
                        return true;
                    router.navigate(['/Login', { target: target }]);
                    return false;
                });
            });
        }
    }
});

//# sourceMappingURL=needsAuthentication.js.map
