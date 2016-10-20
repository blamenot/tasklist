define(["backbone", "views/taskView"], function (Backbone, TaskView) {
    var TasksView = Backbone.View.extend({
        tagName: "ul",
        initialize: function () {
            this.listenTo(this.collection,'add', this.renderTask);
        },
        render: function () {
            var self=this;
            this.collection.each(function (task) {
                var taskView = new TaskView({model: task});
                self.$el.append(taskView.el);
                taskView.render();
            });
        },
        renderTask: function (task) {
            var taskView = new TaskView({model: task});
            this.$el.append(taskView.el);
            taskView.render();
            /*TODO save here
            localStorage.setItem("tasks",JSON.stringify(tasks));
            */
            this.trigger("save:tasks", this.collection);
        }
    });
    return TasksView;
});