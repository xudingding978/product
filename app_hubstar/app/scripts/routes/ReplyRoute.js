

HubStar.ReplyRoute = Ember.Route.extend({
    setupController: function(controller, model) {
            this.controllerFor('reviewReplyListSingle').set('model',model);
                  setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 100);
            }, 200);
    
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
    },
            model: function(params) {
        var address = document.URL;
          var profile = HubStar.Profile.find(profile_id);
        var profile_id = address.split("#")[1].split("/")[2];
       var review_id = address.split("#")[1].split("/")[4];
        return review_id;
    }
 

});