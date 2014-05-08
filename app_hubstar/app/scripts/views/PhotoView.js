
HubStar.PhotoView = Ember.View.extend({
    templateName: 'photo',
    classNames: ["lightbox"],
    content: [],
    TitleTag: false,
    PartnerTag: false,
    DiscussionTag: false,
    NameTag: false,
    didInsertElement: function() {
        var that = this;
        var counter = 0;
        var mouseX = 0;
        var mouseY = 0;
        $('#nextphoto').mousedown(function(e) {
            if (e.which === 1) //2:middle 
            {
                var imgtag = $(this).parent(); // get the div to append the tagging entry
                HubStar.set("changeHeight", 70);

                mouseX = e.clientX - 265; // x and y axis
                mouseY = e.clientY + HubStar.get("changeHeight");

                var center_y = $(window).height() / 2;
                var center_x = ($(window).width() - 320) / 2;
                var top = center_y - HubStar.get("pic_current_height") / 2;
                var left = center_x - HubStar.get("pic_current_width") / 2;

                that.get("controller").get("controllers.showTag").set("pic_x", (e.clientX - left) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (e.clientY - top) / HubStar.get("pic_current_height"));
                if (that.get("controller").get("enableTag") === true)
                {
                    that.get("controller").set("inImage", true);  //just click inside the image can triggle the action rather rather click the tag button
                }
                else
                {
                    // $(".next").css({display: block});
                    that.get("controller").set("inImage", false);  //just click inside the image can triggle the action rather rather click the tag button
                }
                if (mouseY - HubStar.get("changeHeight")> center_y)
                {
                    that.get("controller").get("controllers.showTag").set("change_tag_show", true); //chage tag show style
                    mouseY = mouseY -500;
                     //$("#showTagSavePhoto").css("position", "relative");
                }
                else
                {
                    that.get("controller").get("controllers.showTag").set("change_tag_show", false);
                     //$("#showTagSavePhoto").css("position", "absolute");
                }
                if (mouseX +530 > $(window).width() - 320)
                {
                    //$("#showTagSavePhoto").css("left", "-265px");

                    that.get("controller").get("controllers.showTag").set("change_tag_show_2", true);
                }
                else
                {
                    //$("#showTagSavePhoto").css("left", "0px");
                    that.get("controller").get("controllers.showTag").set("change_tag_show_2", false);
                }
                that.get("controller").nextImage(e, mouseX, mouseY);
            }
        });
        $('#previousphoto').mousedown(function(event) {
            if (event.which === 1) //2:middle 
            {
                var imgtag = $(this).parent(); // get the div to append the tagging entry

                mouseX = event.clientX - 265; // x and y axis
                mouseY = event.clientY + 70;
                var center_y = $(window).height() / 2;
                var center_x = ($(window).width() - 320) / 2;
                var top = center_y - HubStar.get("pic_current_height") / 2;
                var left = center_x - HubStar.get("pic_current_width") / 2;

                that.get("controller").get("controllers.showTag").set("pic_x", (event.clientX - left) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (event.clientY - top) / HubStar.get("pic_current_height"));
                if (that.get("controller").get("enableTag") === true)
                {
                    that.get("controller").set("inImage", true);
                }
                else
                {
                    //  $(".previous").attr('style', 'display:block');
                    that.get("controller").set("inImage", false);
                }
                if (mouseY - 70 > center_y)
                {
                    mouseY = mouseY   -500;
                    that.get("controller").get("controllers.showTag").set("change_tag_show", true);
                    //$("#showTagSavePhoto").css("position", "relative");
                }
                else
                {
                    that.get("controller").get("controllers.showTag").set("change_tag_show", false);
                     //$("#showTagSavePhoto").css("position", "absolute");
                }
                if (mouseX < 0)
                {
                    //$("#showTagSavePhoto").css("left", "265px");

                    that.get("controller").get("controllers.showTag").set("change_tag_show_2", true);
                }
                else
                {
                    //$("#showTagSavePhoto").css("left", "0px");
                    that.get("controller").get("controllers.showTag").set("change_tag_show_2", false);
                }
                that.get("controller").previesImage(event, mouseX, mouseY);

            }
        });
        var that = this;
        window.onresize = function() {
            var tags = that.get("controller").get("controllers.showTag").get("contentTags");
            if (tags !== undefined && tags !== "" && tags !== null)
            {
                that.get("controller").photoSizeJudge(that.get("controller").get('selectedPhoto'));
                that.get("controller").windowResizeTags(tags);
            }
        };
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
    setTag: function() {

        $('#tag_action').slideToggle("slow");
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
            this.get("controller").set("enableTag", false);  //close the showTag template
            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];
            if (type === "users")
            {
                this.get("controller").closeWindow();
            }
            else if (type !== "search")
            {
                this.get("controller").closeWindow();
            }
            else
            {
                this.get("controller").closeWindow();
                this.get("controller").set("selectPhoto", false);
                $('#masonry_wrapper').attr('style', "top:100px;position:relative");
            }
        }
    }

});
