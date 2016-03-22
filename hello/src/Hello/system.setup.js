System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    },
    map: {
        'jquery': 'scripts/bundles/jquery-2.1.4.js',
        'bootstrap/js/bootstrap': 'scripts/bundles/bootstrap.js',
        'admin-lte/js/app': 'scripts/bundles/app.js',
        'jquery/jquery.hammer': 'scripts/bundles/jquery.hammer.js',
        'hammerjs': 'scripts/bundles/hammer.js',
        'hammerjs/hammer': 'scripts/bundles/hammer.js',
        'jquery/jquery.slimscroll': 'scripts/bundles/jquery.slimscroll.js',
        'fastclick/fastclick': 'scripts/bundles/fastclick.js'
    }
});

System.import('app/main')
    .then(null, console.error.bind(console));
