HubStar.ProfileNewRoute = Ember.Route.extend({
        renderTemplate: function() {
            this.render('profileNew', {
                outlet: "profileNew",
                into: "application"
            });
        },
        setupController: function(controller, model) {

            setTimeout(function() {
                $('.nothingHere').attr('style', 'display:none');
            }, 10);


        },
        model: function() {
          
            return ProfileModel;
        },
        activate: function() {

        },
        deactivate: function() {
//            $("body").css("overflow", "auto");
//            $('#footer').attr("style", "display:block");
        }
    });
