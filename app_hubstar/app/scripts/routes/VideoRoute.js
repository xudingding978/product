HubStar.VideoRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(IndexController, model) {

        },
        model: function(params) {
            return HubStar.Video.find(params.video_id);
        },
        activate: function() {
             $("body").css("overflow", "hidden");
             $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
             $("body").css("overflow", "auto");
             $('#footer').attr("style", "display:block");
        },
//        renderTemplate: function() {
//            this.render('video', {
//                into: "index"
//            });
//        }

    });
