require.config({
    paths: {
        // Libraries
        bootstrap: "libs/bootstrap/bootstrap.min",
        jquery: "libs/jquery/jquery.min",
        jqueryEasing: "libs/jquery.easing/jquery.easing.min",
        menu: "menu",
        snap: "libs/snap/snap.svg-min",
        visible: "visible"
    },
    waitSeconds: 30,
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jqueryEasing: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});
require(['app']);