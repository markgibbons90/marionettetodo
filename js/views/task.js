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
        console.log(this.model.toJSON());
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

    toggleStarred: function() {
        var starred = this.model.get('starred');
        this.model.set('starred', !starred);
        console.log(this.model.toJSON());
    },

    markTaskComplete: function() {
        // Animate checking the task
        this.ui.checkTask[0].style.display = 'none';
        this.ui.taskChecked[0].style.display = 'inline-block';
        // @TODO Set timeout and remove task
        var _this = this;
        setTimeout(function() {
            _this.model.destroy();
        });
    }

});
