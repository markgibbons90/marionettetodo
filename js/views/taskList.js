var TaskListView = Marionette.CompositeView.extend({

    template: Handlebars.templates.taskList,
    childView: TaskView,
    childViewContainer: '#task-list-container',
    ui: {
        taskTextInput: 'input[name="task"]',
        addTaskButton: '[data-action="add-task"]'
    },
    events: {
        'click @ui.addTaskButton': 'addTask',
        'keydown @ui.taskTextInput': 'onKeyDownInput'
    },

    initialize: function() {
        this.collection = new TaskList();
        this.listenTo(app.vent, 'task:completed', this.onTaskCompleted)
    },

    /**
     * Ensure that the text input is focused on when the view is displayed.
     */
    onRender: function() {
        this.$('input[name="task"]').focus();
    },

    /**
     * When you hit enter in the text input, add the task.
     *
     * @param  {object} e jQuery event
     */
    onKeyDownInput: function(e) {
        if (e.keyCode === 13) {
            this.addTask();
        }
    },

    /**
     * When the child view triggers the event task:completed, remove the task and
     * trigger an event in the root view to add the task to the completedTasks collection.
     *
     * @param  {Backbone.Model} task The task which was completed
     */
    onTaskCompleted: function(task) {
        this.removeTask(task);
    },

    /**
     * Fetch the task title from the input value and add it to the task collection.
     */
    addTask: function() {
        var taskTitle = this.$('input[name="task"]').val();
        if (taskTitle.length) {
            var task = new Task({title: taskTitle});
            this.collection.add(task, {
                at: 0
            });
            this.render();
        }
    },

    /**
     * Remove a task from this collection and re-render the view.
     *
     * @param  {Backbone.Model} model The task
     */
    removeTask: function(model) {
        this.collection.remove(model);
        this.render();
    }

});
