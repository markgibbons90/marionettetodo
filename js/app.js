var app = new Marionette.Application();

app.on('before:start', function() {
    console.log($('#test'));
    var RootView = Marionette.LayoutView.extend({
        template: Handlebars.compile(document.getElementById('test').innerHTML),
        el: 'body'
    });
});

app.start();
