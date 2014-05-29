HubStar.SearchDefaultPhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        this.controllerFor("masonryCollectionItems").set("type", "profile");
        //    this.controllerFor("masonryCollectionItems").set("type", "user");
        var megaModel = HubStar.Mega.find(temp);
        //   this.controllerFor('mega').set("selectPhoto", true);
        var that = this;
        megaModel.then(function() {           
           that.controllerFor('mega').getInitData(megaModel);
        },function() {
           that.transitionTo('fourOhFour',"404");
        }); 
       if (HubStar.get('ctaView') === true) {
                this.controllerFor("checkingLoginStatus").popupLogin();
                HubStar.set('ctaView', false);
            }
        
    },
    model: function(params) {
      
        var model = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": params.photo_id});
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