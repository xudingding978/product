HubStar.ArticlePhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        this.controllerFor("showTag").readTags(temp);

        HubStar.set("isArticleTag", true);  //isArticleTag is true mean is the  photo tag,so it will set different tagcontent in showTagController
        var megaModel = HubStar.Mega.find(temp);

        this.controllerFor("article").JudgePhotoOwner(megaModel);

        this.controllerFor("masonryCollectionItems").set("type", "user");
        var that = this;
       // setTimeout(function() {
       megaModel.then(function() {
      that.controllerFor('mega').getInitData(megaModel);
                      setTimeout(function() {
   console.log(megaModel.get("photo").objectAt(0).get("photo_original_height")+"   "+megaModel.get("photo").objectAt(0).get("photo_original_width"));
                        console.log(document.getElementById('tag_image_object').offsetHeight+"   "+document.getElementById('tag_image_object').offsetWidth);
                                   HubStar.set("pic_current_height", document.getElementById('tag_image_object').offsetHeight);
            HubStar.set("pic_current_width", document.getElementById('tag_image_object').offsetWidth);
            

                    },500);
         

       });
      //  }, 150);  //add on doing the tag

//        var that = this;
//        setTimeout(function() {
//            if (that.controllerFor("article").get("contentTagsArticle") !== "" && that.controllerFor("article").get("contentTagsArticle") !== null && that.controllerFor("article").get("contentTagsArticle") !== undefined)
//            {
//                if (that.controllerFor("article").get("contentTagsArticle").get("length") > 0)
//                {
//                    console.log("44444444400000000000000");
//
//                    that.controllerFor("article").set("hasTag", true);
//                    that.controllerFor("article").set("tagCount", that.controllerFor("article").get("contentTagsArticle").get("length"));
//                    that.controllerFor("masonryCollectionItems").set("type", "user");
//
//
//                    that.controllerFor('mega').getInitData(megaModel);
//
//                }
//
//            }
//            else
//            {
//                console.log("4444444441111111111111111111");
//                console.log(that.controllerFor("article").get("contentTagsArticle"));
//                //  that.controllerFor("article").set("showAllTagsArticle","");
//                that.controllerFor("masonryCollectionItems").set("type", "user");
//                console.log(temp);
//                that.controllerFor('mega').getInitData(megaModel);
//            }
//        }, 50);


    },
    model: function(params) {
        
         var model = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": params.photo_id});// = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});

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