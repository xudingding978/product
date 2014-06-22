

HubStar.ReviewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
         if (this.controllerFor('checkingLoginStatus').popupLogin())
        {
        this.controllerFor('profile').sendEventTracking('event', 'button', 'click', 'Reviews');
        this.controllerFor('profile').set('profileSelectionStatus', 'Reviews');

        this.controllerFor('profile').set('partnerTag', false);
        this.controllerFor('profile').set('collectionTag', false);
        this.controllerFor('profile').set('followerProfileTag', false);
        this.controllerFor('profile').set('reviewTag', true);
        this.controllerFor('profile').set('pdfTag', false);
        this.controllerFor('profile').set('videoTag', false);
        this.controllerFor('reviewListSingle').set('model', model);
      //  this.controllerFor('reviewListSingle').set('review_content', model.review_content);


        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
     //   $(window).scrollTop(1500);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var review_id = address.split("#")[1].split("/")[4];
        var profile = HubStar.Profile.find(profile_id);
        var model = this.getReview(profile, review_id);
        return model;
    },

    getReview: function(profile, review_id){
        var model = null;
        for (var i = 0; i < profile.get('reviews').get('length'); i ++) {
            if (profile.get('reviews').objectAt(i).get('review_id') === review_id){
                model = profile.get('reviews').objectAt(i);
            }
        }
        return model;
    }
});