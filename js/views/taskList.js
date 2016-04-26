var TaskListView = Marionette.CompositeView.extend({

    template: Handlebars.templates.taskList,
    childView: TaskView,
    childViewContainer: '#task-list-container',
    events: {
        'click [data-action="add-task"]': 'addTask',
        'keydown input[name="task"]': 'onKeyDownInput'
    },

    initialize: function() {
        this.collection = new Backbone.Collection();
    },

    onAfterShow: function() {
        this.$('input[name="task"]').focus();
    },

    onKeyDownInput: function(e) {
        if (e.keyCode === 13) {
            this.addTask();
        }
    },

    addTask: function() {
        var taskTitle = this.$('input[name="task"]').val();
        if (taskTitle.length) {
            var task = new Backbone.Model({title: taskTitle});
            this.collection.add(task);
            this.render();
        }
        this.$('input[name="task"]').focus();
    }

});
