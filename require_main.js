requirejs.config({
    paths: {
        jquery: "vendor/jquery",
        underscore: "vendor/underscore",
        backbone: "vendor/backbone",
        bootstrap: "vendor/bootstrap/js/bootstrap",
        "handlebars.runtime": "vendor/handlebars.runtime"
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap : {
            deps :['jquery']
        }
    }
});
requirejs (["backbone","bootstrap", "app"], function (Backbone, Bootsrap) {
    $(document).ready(function() {
        console.log("Document ready")
    });
});