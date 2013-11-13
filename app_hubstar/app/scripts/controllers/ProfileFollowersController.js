HubStar.ProfileFollowersController = Ember.Controller.extend({
        content: [],
        followers: "",
        getClientId: function(model) {
            this.set('clientID', model.id);
            this.set('followers', model.get('followers'));
            this.set('content', this.get('followers'));

        }

    });
