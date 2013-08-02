HubStar.ArticleRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(controller, model) {
            var d = HubStar.Mega.find(model.id);
            controller.getInitData(d);
        },
        model: function(params) {
            return HubStar.Meg.find(params.article_id);
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


            this.render("article", {
                outlet: "articles",
                into: "application"
            });
        }

    });
