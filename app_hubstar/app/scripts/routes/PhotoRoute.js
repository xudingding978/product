HubStar.PhotoRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            var megaModel = HubStar.Mega.find(model.id);
            this.controllerFor('mega').getInitData(megaModel);
        },
        model: function(params) {
            return HubStar.Mega.find(params.photo_id);
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
