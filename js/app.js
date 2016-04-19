var app = new Marionette.Application();

app.on('before:start', function() {
    console.log($('#test'));
    console.log(Handlebars.templates['testTemplate.hbs']);
    var RootView = Marionette.LayoutView.extend({
        template: Handlebars.templates['testTemplate.hbs'],
        el: 'body'
    });
});

app.start();
