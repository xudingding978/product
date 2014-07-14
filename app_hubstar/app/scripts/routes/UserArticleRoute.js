HubStar.UserArticleRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var temp;
        var address;
        if (model.id === undefined) {                        //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        if (this.controllerFor("article").get("searchFromRoute") === true)
        {

            address = document.URL;
            temp = address.split("#")[1].split("/")[6];
        }
        this.controllerFor("article").set("accessFromSearchBoard", false);

        var megaModel = HubStar.Mega.find(temp);
        var that = this;

        megaModel.then(function() {
            that.controllerFor("article").getInitData(megaModel);
        }, function() {

            that.transitionTo('fourOhFour', "404");
        });


    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": params.article_id});
        model.set("id", params.article_id);
        return model;
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


        this.render("article", {
            outlet: "articles",
            into: "application"
        });
    }

});
