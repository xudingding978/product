HubStar.ArticlePhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log("444444444");

        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        // var type= url []s
        // this.controllerFor("article").set("showAllTagsArticle","");
        this.controllerFor("showTag").readTags(temp);


        var that = this;
        setTimeout(function() {
            if (that.controllerFor("article").get("contentTagsArticle") !== "" && that.controllerFor("article").get("contentTagsArticle") !== null && that.controllerFor("article").get("contentTagsArticle") !== undefined)
            {
                if (that.controllerFor("article").get("contentTagsArticle").get("length") > 0)
                {
                    console.log(that.controllerFor("article").get("contentTagsArticle"));
                    that.controllerFor("article").set("hasTag", true);
                    // that.set("tagCount", that.get("contentTags").get("length"));
                    that.controllerFor("masonryCollectionItems").set("type", "user");
                    var megaModel = HubStar.Mega.find(temp);
                    that.controllerFor("article").JudgePhotoOwner(megaModel);
                    console.log(temp);
                    that.controllerFor('mega').getInitData(megaModel);

                }

            }
            else
            {
                //  that.controllerFor("article").set("showAllTagsArticle","");
                that.controllerFor("masonryCollectionItems").set("type", "user");
                var megaModel = HubStar.Mega.find(temp);
                console.log(temp);
                that.controllerFor('mega').getInitData(megaModel);
            }
        }, 50);


    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
        this.controllerFor("article").set("searchFromRoute", true); //only use in userarticle route to get the temp id;
        this.controllerFor("mega").set("clickOrRoute", true);
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