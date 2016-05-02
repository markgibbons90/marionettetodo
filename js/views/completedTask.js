var TaskView = Marionette.ItemView.extend({

    template: Handlebars.templates.completedTask,
    className: 'task task-completed',

    /**
     * When you hit enter in the text input, save the model title
     * @param  {object} e jQuery event
     */
    onKeyDownInput: function(e) {
        if (e.keyCode === 13) {
            this.model.set('title', e.target.value);
        }
    },

    /**
     * Toggle whether the task is 'starred' or not.
     */
    toggleStarred: function() {
        var starred = this.model.get('starred');
        this.model.set('starred', !starred);
    },

    markTaskComplete: function() {
        // Animate checking the task
        this.animateTaskChecked();
        // Remove the task from this collection after a short delay for the animation.
        var _this = this;
        setTimeout(function() {
            app.vent.trigger('task:completed', _this.model);
        }, 150);
    },

    animateTaskChecked: function() {
        this.ui.checkTask[0].style.display = 'none';
        this.ui.taskChecked[0].style.display = 'inline-block';
    }

});
