var app = new Marionette.Application();

app.on('start', function() {
    app.root = new RootView();
    app.root.render();
});

app.start();
