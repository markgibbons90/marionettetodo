var app = new Marionette.Application();

app.on('start', function() {

    var RootView = Marionette.LayoutView.extend({

        template: false,
        el: 'body',
        regions: {
            'nav': '#nav-region',
            'todo': '#task-list-region',
            'completed': '#completed-list-region'
        },
        initialize: function() {

        },

        onRender: function() {
            this.showChildView('nav', new NavView());
            this.showChildView('todo', new TaskListView());
        }
    });

    app.root = new RootView();
    app.root.render();
});

app.start();
