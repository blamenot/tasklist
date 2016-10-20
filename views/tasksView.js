define(["backbone", "views/taskView"], function (Backbone, TaskView) {
    var TasksView = Backbone.View.extend({
        tagName: "ul",
        initialize: function () {
            var self = this;
            this.childViews=[];
            this.listenTo(this.collection,'add', this.renderTask);
            this.collection.each(function (task) {
                self.childViews.push(new TaskView({model: task}));
            });
        },
        render: function () {
            var self=this;
            this.$el.empty();
            this.childViews.forEach(function (childView) {
                self.$el.append(childView.el);
                childView.render();
            });
        },
        renderTask: function (task) {
            var taskView = new TaskView({model: task});
            this.$el.append(taskView.el);
            taskView.render();
        },
        sort: function(order) {
            console.log("sortn in " + order);
            function sortFunction(view_a,view_b) {
                if( (view_a.model.get("title").toLowerCase() > view_b.model.get("title").toLowerCase()) == order)
                    return 1;
                else
                    return -1;
            }
            this.childViews.sort(sortFunction);
            console.log(JSON.stringify(this.childViews));
            this.render();
        }
    });
    return TasksView;
});