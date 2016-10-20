define(["backbone","jquery", "templates/taskTmpl", "templates/addTaskTmpl"], function (Backbone, $, taskTmpl, addTaskTmpl) {
    var AddTaskView = Backbone.View.extend({
        tagName: "form",
        template: addTaskTmpl,
        events: {
            "submit": "submitTask"
        },
        render: function () {
            this.$el.html(this.template());
        },
        submitTask: function (event) {
            event.preventDefault();
            this.trigger("add:task", {
                title: this.$("#task-title-input").val(),
                description: this.$("#task-description-input").val()
            });
            this.el.reset();
        }
    });
    return AddTaskView;
});