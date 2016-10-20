define(["backbone", "models/tasks", "views/appView", "views/taskView", "views/tasksView", "views/addTaskView"], function (Backbone, Tasks, AppView, TaskView, TasksView, AddTaskView) {
    console.log("app.js read");

    var appView = new AppView();
    appView.render();

    var tasks = new Tasks();
    var tasksData = localStorage.getItem("tasks");
    if(tasksData && tasksData.length>0)
        tasks.add(JSON.parse(tasksData));

    var tasksView = new TasksView({collection: tasks});
    tasksView.listenTo(appView, "sort:tasks", function(order) {
        this.sort(order);
    });
    appView.$el.append(tasksView.el);
    tasksView.render();

    var addTaskView = new AddTaskView();
    addTaskView.on("add:task", function (task) {
        tasks.push(task);
    });
    appView.$el.append(addTaskView.el);
    addTaskView.render();

});
