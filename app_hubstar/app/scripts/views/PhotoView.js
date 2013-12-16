
HubStar.PhotoView = Ember.View.extend({
    templateName: 'photo',
    classNames: ["lightbox"],
    content: [],
    TitleTag: false,
    PartnerTag: false,
    DiscussionTag: false,
    NameTag: false,
    didInsertElement: function() {
        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    setTitleTag: function() {
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");
        //     this.set('discussionTag', !this.get('discussionTag'));

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function() {
        HubStar.set('what', false);
        $("#collection_tab").slideToggle("slow");
    },
    openComment: function() {

        $('#addcommetBut').attr('style', 'display:none');
        $('#commentBox').attr('style', 'display:block');

        $('.comment-insert-field').focus();
        this.get("controller").get("controllers.checkingLoginStatus").popupLogin();
    },
    closeComment: function() {
        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
    },
    keyUp: function(event, view) {
        if (event.which === 27)
        { // pressed 'esc'

            //this.get("controller").transitionTo("search");

            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];
            if (type === "users")
            {
                var user = HubStar.User.find(id);

                if (user_photo_id !== undefined || colectionType === "articles" || colectionType === "photos") //type:article means it 
                {

                    var data = null;
                    for (var i = 0; i < user.get('collections').get("length"); i++) {
                        data = user.get('collections').objectAt(i);
                        if (data.id === collection_id) {
                            break;
                        }
                    }
                    this.get("controller").transitionTo("collection", data); //user
                }
                else
                {
                    window.history.back();
                }
            }
            else if (type !== "search")
            {

                this.get("controller").closeWindow();
            }
            else
            {
                if (id === "articles" || id === "photos" || id === "videos") //it is the search index
                {
                    this.get("controller").transitionTo("searchIndex");
                }
                else
                {
                    HubStar.set("escVideo", true);
                    this.get("controller").transitionTo("search", {id: id});
                }

            }
            $('#masonry_wrapper').attr('style', "top:100px;position:relative");
            setTimeout(function() {
                $('#masonry_container').masonry();
            }, 300);


        }
    }

});

//
//$(document).keyup(function(e) {
//
//    if (e.which === 27)
//    {
//        HubStar.PhotoView.prototype.show();
//    }
////    { // pressed 'esc'
////        var address = document.URL;
////        var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
////        var id = address.split("#")[1].split("/")[2];
////        var collection_id = address.split("#")[1].split("/")[4];
////        var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
////        var user_photo_id = address.split("#")[1].split("/")[8];
////        if (type === "users")
////        {
////            var user = HubStar.User.find(id);
////            if (user_photo_id !== undefined || colectionType === "article" || colectionType === "photo") //type:article means it 
////            {
////                for (var i = 0; i < user.get('collections').get("length"); i++) {
////                    var data = user.get('collections').objectAt(i);
////                    if (data.id === collection_id) {
////                        break;
////                    }
////                }
////                console.log(this.get("controller"));
////                this.get("controller").transitionTo("collection", data); //user
////            }
////            else
////            {
////                window.history.back();
////            }
////        }
////        else if (type === "photos")
////        {
////            this.get("controller").get("controllers.mega").closeWindow();
////        }
////        else
////        {
////            window.history.back();
////        }
////
//////                if (type === "users")
//////        {
//////            if (collection_id !== undefined)
//////            {
//////                if (photo_id !== undefined)
//////                {
//////
//////                }
//////                else
//////                {
//////
//////                }
//////
//////            } else
//////            {
//////
//////            }
//////        }
////
////
////        // HubStar.PhotoView.prototype.closeComment();
////        // HubStar.PhotoView.get('controller').closeWindow();
////
////    }
////    else if ((e.which === 38) || (e.which === 37))
////    {
////        //press up  or left
////        // this.get('controller').prototype.previesImage();
////    }
////    else if ((e.which === 39) || (e.which === 40))
////    {
////        //press down  or  right 
////        //this.get('controller').prototype.nextImage();
////    }
//});