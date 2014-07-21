HubStar.ProfileFollowersController = Ember.Controller.extend({
        contentData: [],
        followers: "",
        getClientId: function(model) {
            this.set('clientID', model.id);
            this.set('followers', model.get('followers'));
            this.set('contentData', this.get('followers'));
        }

    });
