define(["backbone"], function (Backbone) {
    console.log("app.js read");
    var AppView = Backbone.View.extend({
        el: "main",
        order: false,
        render: function () {
            this.$el.html("<h1>TASK LIST BY DEN</h1><button id =\"tasks-sort\">sort by title</button>");
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