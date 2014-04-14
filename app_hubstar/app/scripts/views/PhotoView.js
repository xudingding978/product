
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
                HubStar.set("changeHeight", 50);

                mouseX = e.clientX - 265; // x and y axis
                mouseY = e.clientY - HubStar.get("changeHeight");
                that.get("controller").get("controllers.showTag").set("pic_x", (e.clientX - document.getElementById('tag_image_object').offsetLeft) / HubStar.get("pic_current_width")); //set 
                that.get("controller").get("controllers.showTag").set("pic_y", (e.clientY - document.getElementById('tag_image_object').offsetTop) / HubStar.get("pic_current_height"));
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

                that.get("controller").nextImage(e, mouseX, mouseY);
            }
        });
        $('#previousphoto').mousedown(function(event) {
            if (event.which === 1) //2:middle 
            {
                var imgtag = $(this).parent(); // get the div to append the tagging entry

                mouseX = event.clientX - 265; // x and y axis
                mouseY = event.clientY - 50;
                that.get("controller").get("controllers.showTag").set("pic_x", (event.clientX - document.getElementById('tag_image_object').offsetLeft) / HubStar.get("pic_current_width"));
                that.get("controller").get("controllers.showTag").set("pic_y", (event.clientY - document.getElementById('tag_image_object').offsetTop) / HubStar.get("pic_current_height"));
                if (that.get("controller").get("enableTag") === true)
                {
                    that.get("controller").set("inImage", true);
                    console.log(that.get("controller").get("controllers.showTag").get("pic_x"));
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
//            var pic_width = document.getElementById('tag_image_object').offsetWidth;
//            var pic_height = document.getElementById('tag_image_object').offsetHeight;

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

                if (id === "default") //it is the search index
                {
                    this.get("controller").transitionTo("searchIndexTom");
                    this.get("controller").set("selectPhoto", false);
                    this.get("controller").set('image_no', 1);
                }
                else
                {
                    HubStar.set("escVideo", true);
                    this.get("controller").set("selectPhoto", false);
                    this.get("controller").set('image_no', 1);
                    this.get("controller").transitionTo("search", {id: id});
                }
                this.get("controller").get("controllers.mega").set("selectPhoto", false);
                $('#masonry_wrapper').attr('style', "top:100px;position:relative");
                setTimeout(function() {
                    $('#masonry_container').masonry();
                }, 300);
            }
        }
    }

});
