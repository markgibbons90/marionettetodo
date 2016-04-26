var NavView = Marionette.ItemView.extend({

    template: Handlebars.templates.nav,
    tagName: 'nav',
    className: 'navbar navbar-default',
    events: {
        'keydown #list-title': 'onKeyDownTitle',
        'blur #list-title': 'onBlurTitle'
    },

    initialize: function() {

    },

    /**
     * On keydown, if keypress is enter, call method to save the title value.
     * @param  {object} e jQuery event
     */
    onKeyDownTitle: function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.target.blur();
            this.saveTitle(e.target.value);
        }
    },

    /**
     * On blur from input, call method to save the title value.
     * @param  {object} e jQuery event
     */
    onBlurTitle: function(e) {
        this.saveTitle(e.target.value);
    },

    /**
     * Save the title value.
     * @param  {string} title The title value
     */
    saveTitle: function(title) {
        console.log(title);
    }

});
