
HubStar.AfterLoginView = Ember.View.extend({
    templateName: 'afterLogin',
    willInsertElement: function() {
    },
    logout: function() {
        $.ajax({
            type: 'POST',
            url: getRestAPIURL() + '/logout',
            contentType: 'application/json; charset=uft-8',
            dataType: 'json',
            success: function(param) {
            }
        });
        localStorage.removeItem('loginStatus');
        this.get('controller').transitionTo("indexIndex");

    }
});

