var TaskView = Marionette.ItemView.extend({

    template: Handlebars.templates.task,
    className: 'task',
    ui: {
        titleInput: 'input[type="text"]',
        starTask: '[data-action="star-task"]',
        checkTask: '[data-action="check-task"]',
        taskChecked: '[data-ui="task-checked"]'
    },
    events: {
        'keydown @ui.titleInput': 'onKeyDownInput',
        'blur @ui.titleInput': 'render',
        'click @ui.starTask': 'toggleStarred',
        'click @ui.checkTask': 'markTaskComplete'
    },
    modelEvents: {
        change: 'render'
    },

    initialize: function() {
        // console.log(this.model.toJSON());
    },

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
        // Animate checking the task and fading it out
        this.animateTaskChecked();
        this.$el.fadeOut(300);
        // Remove the task from this collection after a short delay for the animation.
        var _this = this;
        setTimeout(function() {
            app.vent.trigger('task:completed', _this.model);
        }, 300);
    },

    animateTaskChecked: function() {
        this.ui.checkTask[0].style.display = 'none';
        this.ui.taskChecked[0].style.display = 'inline-block';
    }

});
