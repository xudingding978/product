HubStar.ArticleView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'article',
    readContent: false,
    didInsertElement: function() {
        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    checkReading: function() {
        this.set('readContent', !this.get("readContent"));
        $('#article_text_action').css('height', 'auto');
        var height = $('#article_text_action').height();
        $("#article_text_action").height('215px').animate({height: height}, "slow");
        $('#read_more_cue').attr("style", "display:none;");
    },
    checkClosed: function() {
        var height = $('#article_text_action').offset().height;
        $("#article_text_action").css({height: height}).animate({"height": "210px"}, "slow");
        this.set('readContent', !this.get("readContent"));
        $('#read_more_cue').attr("style", "display:block;");
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
        HubStar.set('what', true);
        setTimeout(function() {
            $('.collection_tab1').attr('style', 'bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:block; position: absolute;z-index: 5; width: 100%; opacity: .9;');
        }, 200);
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
        { 
            // pressed 'esc'
            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var colectionPhoto = address.split("#")[1].split("/")[6]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];
            if (type === "users")
            {
                if (user_photo_id !== undefined) //type:article means it 
                {


                    var data = HubStar.Mega.find(colectionPhoto);

                    this.get("controller").transitionTo("userPhoto", data); //user
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

                HubStar.set("escVideo", true);
                if (type === "profiles")
                {
                    this.get("controller").transitionTo("search", {id: id});
                }
                else if (id === "default") //it is the search index
                {
                    this.get("controller").transitionTo("searchIndexTom");
                }
                else
                {

                    this.get("controller").transitionTo("search", {id: id});
                }
                $('#masonry_wrapper').attr('style', "top:100px;position:relative");
                setTimeout(function() {
                    $('#masonry_container').masonry();  //masonry();
                }, 300);

            }

        }
    }
});
