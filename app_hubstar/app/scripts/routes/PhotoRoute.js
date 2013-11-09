HubStar.PhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var temp;
        if (model.id === undefined) {                               //reload page model id can not be find
            var url =  window.location.href;
            urlArray = url.split("/");
            temp = urlArray[urlArray.length-1];
        } else {
            temp = model.id;
        }
        var megaModel = HubStar.Mega.find(temp);
        this.controllerFor('mega').getInitData(megaModel);

    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
        return model;
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


        $("body").css("overflow", "auto");
        $('#footer').attr("style", "display:block");
    },
    renderTemplate: function() {
        var controller = this.controllerFor('mega');


        this.render("photo", {
            outlet: "photos",
            into: "application",
            controller: controller
        });
    }

});
