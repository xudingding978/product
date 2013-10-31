/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ReviewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        // this.controllerFor('ProfileController').set('is_authentic_user', true);

        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
        // this.controllerFor('profile').selectPartner(model);

        this.controllerFor('profile').set('profileSelectionStatus', 'Reviews');
        this.controllerFor('profile').set('reviewTag', true);
        this.controllerFor('profile').set('partnerTag', false);
        this.controllerFor('profile').set('collectionTag', false);
        this.controllerFor('profile').set('followerProfileTag', false);
        this.controllerFor('reviewList').getReviewId(model);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
