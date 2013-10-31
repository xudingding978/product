HubStar.VideoesRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var temp;
        console.log('VideoesRoute');
        console.log(controller);
        console.log(model);
//        if (model.id === undefined) {                        //reload the page model id can not be find...
//            var url =  window.location.href;
//            urlArray = url.split("/");
//            temp = urlArray[urlArray.length-1];
//        } else {
//            temp = model.id;
//        }
//            var d = HubStar.Mega.find(temp);
//            controller.getInitData(d);
    },
    model: function(params) {
        console.log(params);
//            var model = HubStar.Mega.find({"RequireType": "articles", "article_id": params.article_id});
            return params;
    },
    activate: function() {

        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    events: {
        transitionToProfile: function(id) {

            this.transitionTo("profile", HubStar.Profile.find(id));
        }

    },
    deactivate: function() {


        setTimeout(function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        }, 100);
    },
    renderTemplate: function() {


        this.render("video", {
            outlet: "videoes",
            into: "application"
        });
    }


});

