HubStar.UserVideoRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var tempid;
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#video').addClass('selected-user-stats');
        if (model.id === undefined) {          //reload the page model id can not be find...
            var url = window.location.href;
            var urlArray = url.split("/");
            tempid = urlArray[urlArray.length - 1];
        } else {
            tempid = model.id;
        }
          this.controllerFor('video').getinitdata(tempid);
    },
    model: function(params) {
        return params;
    },
    activate: function() {

        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    actions: {
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

