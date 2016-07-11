require.config({
    paths: {
        // Libraries
        bootstrap: "libs/bootstrap/bootstrap.min",
        jquery: "libs/jquery/jquery.min",
        menu: "menu",
        snap: "libs/snap/snap.svg-min"
    },
    waitSeconds: 30,
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});
require(['app']);