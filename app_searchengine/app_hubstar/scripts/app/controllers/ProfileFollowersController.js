define(["ember"], function(Ember) {
    var ProfileFollowersController = Ember.Controller.extend({
        content: [],
        followers: "",
        getClientId: function(model) {
   //         console.log(model);
            this.set('clientID', model.id);
            this.set('followers', model.get('followers'));
 //           console.log(this.get('clientID'));
 //           console.log(this.get('followers'));

            this.set('content', this.get('followers'));



        },
        transictionToUser: function(id) {

            this.transitionTo('user', id);
        }
    });
    return ProfileFollowersController;
});
