HubStar.VideoVideoRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var tempid;
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#video').addClass('selected-user-stats');
        if (model.id === undefined) {          //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            tempid = urlArray[urlArray.length - 1];
        } else {
            tempid = model.id;
        }
        if (tempid.indexOf("test") !== -1) {
            tempid = tempid.replace("test", "");

        }
//        console.log("11111111111");
//                          var mega = HubStar.Mega.find(tempid);
//                console.log(mega.get("view_count"));
//        mega.then(function() {
//            if (mega.get("view_count") === undefined || mega.get("view_count") === null || mega.get("view_count") === "")
//            {
//                mega.set("view_count", 0);
//            }
//            else
//            {
//                mega.set("view_count", mega.get("view_count") + 1);
//            }
//                    console.log(mega.get("view_count"));
//            mega.store.save();
//        });
         this.controllerFor('video').getinitdata(tempid);
                console.log("222222222");

      
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

