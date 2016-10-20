define(["backbone"], function (Backbone) {
    console.log("app.js read");
    var AppView = Backbone.View.extend({
        el: "main",
        render: function () {
            this.$el.html("<h1>TASK LIST BY DEN</h1>");
        }
    });
    return AppView;
});