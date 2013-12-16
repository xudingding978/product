HubStar.ArticleView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'article',
    readContent: false,
    fullName: (function() {
        return "test";
    }).property(),
    didInsertElement: function() {

        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    checkReading: function() {
//        $('.article-objectview-right').animate({
//            width: '55%'
//        }, 500, function() {
//            // Animation complete.
//        });
//
//
//        $('.article-objectview-left').animate({
//            width: '45%'
//        }, 500, function() {
//            // Animation complete.
//        });
//        $('.lightbox').attr("style", "min-width:700px");
        this.set('readContent', !this.get("readContent"));
//        $('#article_action').attr("style", "display:block;overflow: hidden;");
        $('#article_text_action').css('height', 'auto');
        var height = $('#article_text_action').height();
        $("#article_text_action").height('215px').animate({height: height}, "slow");
        $('#read_more_cue').attr("style", "display:none;");
//        $('#article_action').slideToggle(1000);
    },
    checkClosed: function() {

//        $('.article-objectview-right').animate({
//            width: '320px'
//        }, 500, function() {
//            // Animation complete.
//        });
//
//
//        $('.article-objectview-left').animate({
//            width: 'auto'
//        }, 500, function() {
//            // Animation complete.
//        });
//         $('#article_action').attr("style", "display:block;overflow: hidden;");
        var height = $('#article_text_action').offset().height;
        $("#article_text_action").css({height: height}).animate({"height": "210px"}, "slow");
        //$('#article_action'),animate({height:"215px"},1000);
//        $('.article-objectview-left').attr("style", "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
        this.set('readContent', !this.get("readContent"));
        $('#read_more_cue').attr("style", "display:block;");
//        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {

        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function(id) {
        HubStar.set('what', true);
        // $("#collection_tab1").slideToggle("slow");
        setTimeout(function() {
            $('.collection_tab1').attr('style', 'bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:block; position: absolute;z-index: 5; width: 100%; opacity: .9;');
            //$("#collection_tab1").attr('style', 'display: block');
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
    keyUp: function(event, view) {
        if (event.which === 27)
        { // pressed 'esc'

            //this.get("controller").transitionTo("search");

            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
            var colectionPhoto = address.split("#")[1].split("/")[6]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];

            if (type === "users")
            {
                var user = HubStar.User.find(id);

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
                    this.get("controller").transitionTo("searchIndex");
                }
                else
                {

                    this.get("controller").transitionTo("search", {id: id});
                }

            }

            $('#masonry_wrapper').attr('style', "top:100px;position:relative");
            setTimeout(function() {
                $('#masonry_container').reLoad();  //masonry();
            }, 300);
        }
    }
});
