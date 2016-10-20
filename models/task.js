define(["backbone"], function (Backbone) {
    var Task = Backbone.Model.extend({
        defaults: {
            completed: ""
        }
    });
    return Task;
});