'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/Hello/',
        files: {
            injectables: [
                './dist/www/scripts/es6-shim.min.js',
                './dist/www/scripts/shims_for_IE.js',
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/angular2.min.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css'
            ],
            main: [
                './src/Hello/index.html'
            ],
            systemSetupScript: './src/Hello/system.setup.js',
            app: {
                everything: ['./src/Hello/app/**/*', './src/Hello/system.setup.js'],
                ts: [
                    './src/Hello/app/**/*.ts'
                ],
                html: [
                    './src/Hello/app/**/*.html'
                ],
                css: [

                    './src/Hello/css/**/*.css'
                ],
                componentCss: [
                    './src/Hello/app/**/*.css'
                ],
                assets: [
                    './src/Hello/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/Hello/vendor/bootstrap/css/bootstrap.css',
                './src/Hello/vendor/admin-lte/css/AdminLTE.css',
                './src/Hello/vendor/admin-lte/css/skins/_all-skins.css',
                './src/Hello/vendor/font-awesome/css/font-awesome.css',
            ],
            vendorFonts: [
                './src/Hello/vendor/font-awesome/fonts/*.*',
                './src/Hello/vendor/bootstrap/fonts/*.*'
            ],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            vendorJs: [
                './src/Hello/vendor/hammerjs/hammer.js',
                './src/Hello/vendor/jquery/jquery-2.1.4.js',
                './src/Hello/vendor/jquery/jquery.hammer.js',
                './src/Hello/vendor/jquery/jquery.slimscroll.js',
                './src/Hello/vendor/bootstrap/js/bootstrap.js',
                './src/Hello/vendor/fastclick/fastclick.js',
                './src/Hello/vendor/admin-lte/js/app.js'
            ],
            angular2: [
                './node_modules/systemjs/dist/system-polyfills.js',
                './node_modules/angular2/bundles/angular2-polyfills.js',
                './node_modules/systemjs/dist/system.src.js',
                './node_modules/rxjs/bundles/Rx.js',
                './node_modules/angular2/bundles/angular2.dev.js',
                './node_modules/angular2/bundles/http.dev.js',
                './node_modules/angular2/bundles/router.dev.js'
            ]
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        angular2MinJs: 'angular2.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
