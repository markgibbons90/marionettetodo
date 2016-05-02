var CompletedTaskListView = Marionette.CompositeView.extend({

    template: Handlebars.templates.completedTaskList,
    childView: TaskView,
    childViewContainer: '#completed-task-list-container',
    ui: {
        toggle: '[data-action="toggle-completed-tasks"]'
    },
    events: {
        'click @ui.toggle': 'onToggleViewTasks'
    },

    initialize: function() {
        this.collection = new TaskList();
        this.model = new Backbone.Model({
            displayTaskList: true,
            collectionLength: this.collection.length
        });
        this.listenTo(app.vent, 'task:completed', this.onTaskCompleted);
    },

    onTaskCompleted: function(task) {
        this.collection.add(task, {at: 0});
        this.model.set('collectionLength', this.collection.length);
        this.render();
    },

    onToggleViewTasks: function(e) {
        e.preventDefault();
        this.model.set('displayTaskList', !this.model.get('displayTaskList'));
        this.render();
    }

});
