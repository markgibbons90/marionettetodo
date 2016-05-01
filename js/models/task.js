var Task = Backbone.Model.extend({

    defaults: {
        title: '',
        // @TODO Decide if actually need machnie name
        machineName: '',
        starred: false
    },

    initialize: function() {
        var machineName = this.get('title').replace(' ', '-').toLowerCase();
        this.set('machineName', machineName);
    }

});
