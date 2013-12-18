HubStar.SearchIndexArticleRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var temp;
        if (model.id === undefined) {                        //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        var address = document.URL;
        var type = address.split("#")[1].split("/")[1];
        if (type === "search")  
        {
            this.controllerFor('article').set("accessFromSearchBoard", true); //accessFromSearchBoard is true, it will not transition to the articlePhoto route 
        }
        var d = HubStar.Mega.find(temp);

        this.controllerFor('article').getInitData(d); 
    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "articles", "article_id": params.article_id});
        model.set("id", params.article_id);

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
