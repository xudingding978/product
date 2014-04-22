HubStar.VideoView = Ember.View.extend({
    templateName: 'video',
    classNames: ["lightbox"],
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

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");

    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");

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
    keyUp: function(event) {
        if (event.which === 27)
        { // pressed 'esc'


            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var videosOrCollection = address.split("#")[1].split("/")[3];
            var collection_id = address.split("#")[1].split("/")[4];
            var user_photo_id = address.split("#")[1].split("/")[8];
            var data = null;
            var i;
            if (type === "users")
            {


                var user = HubStar.User.find(id);

                if (user_photo_id !== undefined) //type:article means it 
                {

                    
                    for ( i = 0; i < user.get('collections').get("length"); i++) {
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
            else
            {
                HubStar.set("escVideo", true);
                if (type === "profiles")
                {
                    var profile = HubStar.Profile.find(id);
                    
                    for ( i = 0; i < profile.get('collections').get("length"); i++) {
                        data = profile.get('collections').objectAt(i);
                        if (data.id === collection_id) {
                            break;
                        }
                    }
                    if (videosOrCollection === "collections")
                    {
                        this.get("controller").transitionTo("profileCollection", data);
                    }
                    else if (videosOrCollection === "videos")
                    {

                        this.get("controller").transitionTo("profile", {id: id});
                        this.get("controller").transitionTo("profileVideos");
                    }

                }
                else
                {
                    if (type === "photos" || type === "articles" || type === "videos")
                    {
                        HubStar.set("escVideo", false);
                        this.get("controller").closeWindow();
                    }
                    else
                    {
                        this.get("controller").transitionTo("search", {id: id});
                    }
                }

                $('#masonry_wrapper').attr('style', "top:100px;position:relative");

            }

        }
    }


});
