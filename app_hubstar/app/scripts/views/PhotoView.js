
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
        $('.next').mousedown(function(event) {
            alert("00");
            if (event.which === 1) //2:middle 
            {
                var url = window.location.href;
                if (url.indexOf("article") === -1)
                {
                    alert("22");
                    that.get("controller").set("contentTags", "");
                    that.get("controller").get("controllers.showTag").set("contentTags", "");
                    var imgtag = $(this).parent(); // get the div to append the tagging entry
                    mouseX = event.pageX - $(imgtag).offset().left - 265; // x and y axis
                    mouseY = event.pageY - $(imgtag).offset().top - 45;
                    console.log(mouseX);
                    that.get("controller").get("controllers.showTag").set("pic_x", mouseX); //set 
                    that.get("controller").get("controllers.showTag").set("pic_y", mouseY);
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
                else
                {
                    alert("33");
                    var imgtag = $(this).parent(); // get the div to append the tagging entry
                    mouseX = event.pageX - $(imgtag).offset().left - 265; // x and y axis
                    mouseY = event.pageY - $(imgtag).offset().top - 45;
                    console.log(mouseX);
                    that.get("controller").get("controllers.showTag").set("pic_x", mouseX); //set 
                    that.get("controller").get("controllers.showTag").set("pic_y", mouseY);
                    if (that.get("controller").get("controllers.article").get("enableTag") === true)
                    {


                        that.get("controller").get("controllers.article").set("inImage", true);  //just click inside the image can triggle the action rather rather click the tag button
                    }
                    else
                    {
                        // $(".next").css({display: block});
                        that.get("controller").get("controllers.article").set("inImage", false);  //just click inside the image can triggle the action rather rather click the tag button
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

                    that.get("controller").get("controllers.article").nextImage(event, mouseX, mouseY);
                }
            }


        });
        $('.previous').mousedown(function(event) {
            if (event.which === 1) //2:middle 
            {
                var url = window.location.href;

                if (url.indexOf("article") === -1)
                {
                    that.get("controller").set("contentTags", "");
                    that.get("controller").get("controllers.showTag").set("contentTags", "");
                    var imgtag = $(this).parent(); // get the div to append the tagging entry
                    mouseX = event.pageX - $(imgtag).offset().left - 265; // x and y axis
                    mouseY = event.pageY - $(imgtag).offset().top - 45;
                    that.get("controller").get("controllers.showTag").set("pic_x", mouseX);
                    that.get("controller").get("controllers.showTag").set("pic_y", mouseY);
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

                } else
                {
                    var imgtag = $(this).parent(); // get the div to append the tagging entry
                    mouseX = event.pageX - $(imgtag).offset().left - 265; // x and y axis
                    mouseY = event.pageY - $(imgtag).offset().top - 45;
                    that.get("controller").get("controllers.showTag").set("pic_x", mouseX);
                    that.get("controller").get("controllers.showTag").set("pic_y", mouseY);
                    if (that.get("controller").get("controllers.article").get("enableTag") === true)
                    {

                        that.get("controller").get("controllers.article").set("inImage", true);
                    }
                    else
                    {
                        //  $(".previous").attr('style', 'display:block');
                        that.get("controller").get("controllers.article").set("inImage", false);
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

                    that.get("controller").get("controllers.article").previesImage(event, mouseX, mouseY);
                }
            }
        });


        /******************set the every tag div location***********************/
//        $(document).ready(function() {
//                        setTimeout(function() {
//            var tags = that.get("controller").get("contentTags");
//            console.log("222222222222222");
//       console.log(that.get("controller").get("contentTags").get("isLoaded"));
//            console.log(tags.length);
//            for (var i = 0; i < tags.length; i++)
//            {
//                var tagDiv = "#tag_" + tags[i].get("tag_id");
//                $('tagDiv').attr("style", "top:" + tags[i].get("pic_y")  + "px" + ";" + "left:" +  tags[i].get("pic_x") + "px");
//            }
//
//
//
//                $('#masonry_user_container').masonry("reloadItems");
//            }, 2000);
//
//        });
        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    setTitleTag: function() {
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");
        //     this.set('discussionTag', !this.get('discussionTag'));

    },
    setTag: function() {

        $('#tag_action').slideToggle("slow");
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
    //set the mouse over event
    showTagContent: function(tag_id, pic_x, pic_y)
    {
        var that = this;
        //alert(tag_id + "  " + pic_x + "  " + pic_y);
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
                    this.get("controller").transitionTo("searchIndex");
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
