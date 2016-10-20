define(["backbone", "models/tasks", "views/appView", "views/taskView", "views/tasksView", "views/addTaskView"], function (Backbone, Tasks, AppView, TaskView, TasksView, AddTaskView) {
    console.log("app.js read");

    var appView = new AppView();
    appView.render();

    var tasks = new Tasks();
    var tasksData = localStorage.getItem("tasks");
    if(tasksData && tasksData.length>0)
        tasks.add(JSON.parse(tasksData));

    var tasksView = new TasksView({collection: tasks});
    /*tasksView.on("save:tasks", function (tasks_collection) {
        localStorage.setItem("tasks",JSON.stringify(tasks_collection));
    });*/

    appView.$el.append(tasksView.el);
    tasksView.render();

    var addTaskView = new AddTaskView();
    addTaskView.on("add:task", function (task) {
        tasks.push(task);
    });
    appView.$el.append(addTaskView.el);
    addTaskView.render();

});
