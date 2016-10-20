define(["backbone"], function (Backbone) {
    console.log("app.js read");
    var AppView = Backbone.View.extend({
        el: "main",
        order: false,
        render: function () {
            this.$el.html("<div class='\"row\"'><h1 class='text-center'>TASK LIST BY DEN</h1><div class=\"list-group-item form-inline \"><button class='btn btn-default' id =\"tasks-sort\">sort by title</button></div></div>");
        },
        events:{
            "click #tasks-sort": "sortTasks"
        },
        sortTasks: function(event) {
            this.trigger("sort:tasks",this.order = !this.order);
        }
    });
    return AppView;
});