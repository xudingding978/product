HubStar.PhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var temp;
         console.log("8888888888888");
        if (model.id === undefined) {                               //reload page model id can not be find
            var url = window.location.href;
            console.log(url);
            urlArray = url.split("/");
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        console.log("@@@@@@@@@@@");
        var megaModel = HubStar.Mega.find(temp);
        this.controllerFor('mega').getInitData(megaModel);

    },
    model: function(params) {
        // var model = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
        this.set('content', []);
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var collection_id = address.split("#")[1].split("/")[4];
        var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
        var that = this;
        console.log("1111111111111");
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                console.log(results.get('isLoaded'));
                for (var i = 0; i < this.get("content").length; i++) {
                    var tempObject = results.objectAt(i);
                    that.get("content").pushObject(tempObject);
                    console.log(that.get("content"));
                }
                console.log("2222222222222222");
                return that.get("content");
            }
        });
     return this.get("content");
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
