define(["backbone","jquery", "templates/taskTmpl"], function (Backbone, $, taskTmpl) {
    var TaskView = Backbone.View.extend({
        tagName: "li",
        template: taskTmpl,
        render: function () {
            console.log("model render "+ this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
        },
        events: {
            "click h3": "editTask",
            "click p": "editTask",
            "focusout": "saveTask",
            "click button": "removeTask"
        },
        editTask: function (event) {
            this.model.set("edit", true);
            this.render();
            this.$("#task-title-edit").focus();
        },
        saveTask: function (event) {
            this.model.set("edit", false);
            this.model.set("title", this.$("#task-title-edit").val());
            this.model.set("description", this.$("#task-description-edit").val());
            this.render();
        },
        removeTask: function (event) {
            this.model.destroy();
            this.stopListening();
            this.remove();
        }
    });
    return TaskView;
});