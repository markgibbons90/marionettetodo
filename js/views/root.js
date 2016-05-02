var RootView = Marionette.LayoutView.extend({

    template: false,
    el: 'body',
    regions: {
        'nav': '#nav-region',
        'todo': '#task-list-region',
        'completed': '#completed-list-region'
    },

    onRender: function() {
        this.showChildView('nav', new NavView());
        this.showChildView('todo', new TaskListView());
        this.showChildView('completed', new CompletedTaskListView());
    }

});
