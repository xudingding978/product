HubStar.ArticleView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'article',
    readContent: false,
    showContent: false,
    fullName: (function() {
        return "test";
    }).property(),
    didInsertElement: function() {
        var that = this;
        var counter = 0;
        var mouseX = 0;
        var mouseY = 0;
        $('#nextarticlephoto').mousedown(function(event) {
            if (event.which === 1) //2:middle 
            {
                var imgtag = $(this).parent(); // get the div to append the tagging entry
                mouseX = event.clientX - 265; // x and y axis
                mouseY = event.clientY - 50;

                that.get("controller").get("controllers.showTag").set("pic_x", (event.clientX - document.getElementById('tag_image_object').offsetLeft) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (event.clientY - document.getElementById('tag_image_object').offsetTop) / HubStar.get("pic_current_height"));
                if (that.get("controller").get("enableTag") === true)
                {
                    that.get("controller").set("inImage", true);  //just click inside the image can triggle the action rather rather click the tag button
                }
                else
                {
                    // $(".next").css({display: block});
                    that.get("controller").set("inImage", false);  //just click inside the image can triggle the action rather rather click the tag button
                }
                if (mouseY > 420)
                {
                    that.get("controller").get("controllers.showTag").set("change_tag_show", true); //chage tag show style
                    mouseY = mouseY - 420;
                }
                else
                {
                    that.get("controller").get("controllers.showTag").set("change_tag_show", false);
                }

                that.get("controller").nextImage(event, mouseX, mouseY);
            }
        });
        $('#previousarticlephoto').mousedown(function(event) {
            if (event.which === 1) //2:middle 
            {
                var sss = event.clientX - $("#tag_image_object").offset().left;
                var imgtag = $(this).parent(); // get the div to append the tagging entry
                mouseX = event.clientX - 265; // x and y axis
                mouseY = event.clientY - 50;
                that.get("controller").get("controllers.showTag").set("pic_x", (event.clientX - document.getElementById('tag_image_object').offsetLeft) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (event.clientY - document.getElementById('tag_image_object').offsetTop) / HubStar.get("pic_current_height"));
                if (that.get("controller").get("enableTag") === true)
                {

                    that.get("controller").set("inImage", true);
                }
                else
                {
                    //  $(".previous").attr('style', 'display:block');
                    that.get("controller").set("inImage", false);
                }
                if (mouseY > 420)
                {
                    mouseY = mouseY - 420;
                    that.get("controller").get("controllers.showTag").set("change_tag_show", true);
                }
                else
                {
                    that.get("controller").get("controllers.showTag").set("change_tag_show", false);
                }

                that.get("controller").previesImage(event, mouseX, mouseY);
            }
        });

        var that = this;
        window.onresize = function() {
            var pic_width = document.getElementById('tag_image_object').offsetWidth;
            var pic_height = document.getElementById('tag_image_object').offsetHeight;
            var tags = that.get("controller").get("controllers.showTag").get("contentTags");
            if (tags !== undefined && tags !== "" && tags !== null)
            {
                that.get("controller").windowResizeTags(tags, pic_width, pic_height);
            }
        };
        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    checkReading: function() {
        this.set('readContent', !this.get("readContent"));
        $('#article_text_action').css('height', 'auto');
        var height = $('#article_text_action').height();
        $("#article_text_action").height('215px').animate({height: height}, "slow");
        $('#read_more_cue').attr("style", "display:none;");
//        $('#article_action').slideToggle(1000);
    },
    checkClosed: function() {

        var height = $('#article_text_action').offset().height;
        $("#article_text_action").css({height: height}).animate({"height": "210px"}, "slow");
        this.set('readContent', !this.get("readContent"));
        $('#read_more_cue').attr("style", "display:block;");
    },
    showMore: function() {
        this.set('showContent', !this.get("showContent"));
        $('.article-objectview-right').css('height', 'auto');
        $(".article-objectview-right").animate({width: "45%"}, "slow");
    },
    showClosed: function() {
        $(".article-objectview-right").animate({width: "15%"}, "slow");
        this.set('showContent', !this.get("showContent"));
    },
    setArticleTag: function() {

        $('#article_tag_action').slideToggle("slow");

    },
    //set the mouse over event
    showTagContent: function(tag_id, pic_x, pic_y)
    {
        var that = this;
        var picx_content = pic_x + 5;
        $("#tag_" + tag_id).mouseover(function() {
            that.get("controller").set("showEachTagContent", true);

            setTimeout(function() {

                $("#tagitshow").fadeIn();
                $("#tagitshow").css({top: pic_y, left: picx_content});
            }, 500);
        });

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
    popupAibum: function(id) {
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
    keyUp: function(event, view) {
        if (event.which === 27)
        { // pressed 'esc'

            //this.get("controller").transitionTo("search");
 this.get("controller").get("controllers.article").set("contentTagsArticle","");
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
