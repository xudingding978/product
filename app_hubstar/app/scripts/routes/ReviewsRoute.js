

HubStar.ReviewsRoute = Ember.Route.extend({
    setupController: function(controller, model) {

       $(window).scrollTop(1500);
         this.controllerFor('profile').sendEventTracking('event', 'button', 'click', 'Reviews');
         this.controllerFor('profile').set('profileSelectionStatus', 'Reviews');
        
         this.controllerFor('profile').set('partnerTag', false);
         this.controllerFor('profile').set('collectionTag', false);
         this.controllerFor('profile').set('followerProfileTag', false);
          this.controllerFor('profile').set('reviewTag', true);
                
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
       
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});