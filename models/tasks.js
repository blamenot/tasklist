define(["backbone","models/task"], function (Backbone, Task) {
    var Tasks = Backbone.Collection.extend({
        model: Task,
        initialize: function () {
            this.listenTo(this,"update",function () {
                localStorage.setItem("tasks",JSON.stringify(this));
            });
            this.listenTo(this,"change",function () {
                localStorage.setItem("tasks",JSON.stringify(this));
            });
        }
    });
    return Tasks;
});