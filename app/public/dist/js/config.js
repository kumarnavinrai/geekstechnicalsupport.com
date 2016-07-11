require.config({
    paths: {
        // Libraries
        bootstrap: "libs/bootstrap/boostrap.min",
        jquery: "libs/jquery/jquery.min",
    },
    waitSeconds: 30,
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});