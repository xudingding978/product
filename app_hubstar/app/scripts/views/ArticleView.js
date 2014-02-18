HubStar.ArticleView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'article',
    readContent: false,
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
                mouseX = event.pageX - 265; // x and y axis
                mouseY = event.pageY - 50;
                that.get("controller").get("controllers.showTag").set("pic_x", (event.pageX - $("#tag_image_object").offset().left) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (event.pageY - $("#tag_image_object").offset().top) / HubStar.get("pic_current_height"));
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
                var imgtag = $(this).parent(); // get the div to append the tagging entry
                mouseX = event.pageX - 265; // x and y axis
                mouseY = event.pageY - 50;
                console.log("aaaaaaaaaaaa  " + event.pageX + "dddddddddddd   " + $("#tag_image_object").offset().left);
                console.log("ddddddddddddddd   " + (event.pageX - $("#tag_image_object").offset().left));
                that.get("controller").get("controllers.showTag").set("pic_x", (event.pageX - $("#tag_image_object").offset().left) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (event.pageY - $("#tag_image_object").offset().top) / HubStar.get("pic_current_height"));
//                that.get("controller").get("controllers.showTag").set("pic_x", mouseX);
//                that.get("controller").get("controllers.showTag").set("pic_y", mouseY);
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
            console.log("last data" + HubStar.get("pic_current_width") + "   height    :" + HubStar.get("pic_current_height"));
            console.log("pic_width    " + pic_width + "     " + pic_height);
            var tags = that.get("controller").get("controllers.showTag").get("contentTags");
            if (tags !== undefined && tags !== "" && tags !== null)
            {
                that.get("controller").windowResizeTags(tags, pic_width, pic_height);
            }
        };
//        window.onresize = function() {
//            HubStar.set("window_last_height", HubStar.get("window_current_height"));
//            HubStar.set("window_last_width", HubStar.get("window_current_width"));
//            HubStar.set("window_current_height", window.innerHeight);
//            HubStar.set("window_current_width", window.innerWidth);
//            HubStar.set("window_resize_height_times", window.innerHeight / HubStar.get("window_last_height"));
//            HubStar.set("window_resize_width_times", window.innerWidth / HubStar.get("window_last_width"));
//            var tags = that.get("controller").get("controllers.showTag").get("contentTags");
//            console.log(tags);
//
//            if (tags !== undefined && tags !== "" && tags !== null)
//            {
//                for (var i = 0; i < tags.length; i++)
//                {
//                    //var tagDiv = "#tag_" + tags[i].tag_id;
//                    console.log(HubStar.get("window_resize_height_times"));
//                    console.log(tags[i].pic_y + "   " + tags[i].pic_y * HubStar.get("window_resize_height_times"));
//                    tags[i].pic_y = tags[i].pic_y * HubStar.get("window_resize_height_times");
//                    tags[i].pic_x = tags[i].pic_x * HubStar.get("window_resize_width_times");
//                    console.log(tags[i].tag_id);
//
//                    //   $(tagDiv).css({top: tags[i].pic_y * HubStar.get("window_resize_height_times"), left: tags[i].pic_x * HubStar.get("window_resize_width_times")});
//                    //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
//                }
//                that.get("controller").windowResizeTags(tags);
//            }
//        };
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
    setArticleTag: function() {

        $('#tag_article_action').slideToggle("slow");

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
            //alert(that.get("controller").get("showEachTagContent"));
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
                $('#masonry_wrapper').attr('style', "top:100px;position:relative");
                setTimeout(function() {
                    $('#masonry_container').masonry();  //masonry();
                }, 300);

            }

        }
    }
});
