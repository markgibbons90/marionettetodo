var app = new Marionette.Application();

app.on('start', function() {

    var RootView = Marionette.LayoutView.extend({

        template: false,
        el: 'body',
        regions: {
            'nav': '#nav-region',
            'todo': '#todo-region',
            'completed': '#completed-region'
        },
        initialize: function() {

        },

        onRender: function() {
            this.showChildView('nav', new NavView());
        }
    });

    app.root = new RootView();
    app.root.render();
});

app.start();
