
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
               HubStar.set("changeHeight",50);
//                if ((parseFloat(event.pageX) < parseFloat($("#tag_image_object").offset().left)) || (parseFloat(event.pageX) > parseFloat($("#tag_image_object").offset().left) + parseFloat(HubStar.get("pic_current_width"))) ||
//                        (parseFloat(event.pageY) < parseFloat($("#tag_image_object").offset().top)) || (parseFloat(event.pageY) > (parseFloat($("#tag_image_object").offset().top) + parseFloat(HubStar.get("pic_current_height")))))
//                {
//                    console.log(parseFloat(event.pageX) +"    "+parseFloat($("#tag_image_object").offset().left) + parseFloat(HubStar.get("pic_current_width")));
//                    console.log(event.pageY + "   " + $("#tag_image_object").offset().top + " pppp" + HubStar.get("pic_current_height"));
//                    that.get("controller").set("inImage", false);  //may change with other variable
//                }
//                else
                {
                   //  console.log(parseFloat(event.pageX) +"  sssss  "+parseFloat($("#tag_image_object").offset().left) +"   "+ parseFloat(HubStar.get("pic_current_width")));
                    mouseX = e.pageX - 265; // x and y axis
                    mouseY = e.pageY - HubStar.get("changeHeight");
                    that.get("controller").get("controllers.showTag").set("pic_x", (e.pageX - $("#tag_image_object").offset().left) / HubStar.get("pic_current_width")); //set 
                    that.get("controller").get("controllers.showTag").set("pic_y", (e.pageY - $("#tag_image_object").offset().top) / HubStar.get("pic_current_height"));
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
console.log("eeeeeeeeeeeee"+e.pageY );
                    that.get("controller").nextImage(e, mouseX, mouseY);
//                    HubStar.set("pic_current_height", document.getElementById('tag_image_object').offsetWidth);
//                    HubStar.set("pic_current_width", document.getElementById('tag_image_object').offsetHeight);
                }
            }


        });
        $('#previousphoto').mousedown(function(event) {
            if (event.which === 1) //2:middle 
            {
                var imgtag = $(this).parent(); // get the div to append the tagging entry

//                if ((parseInt(event.pageX) < parseInt($("#tag_image_object").offset().left)) || (parseInt(event.pageX) > (parseInt($("#tag_image_object").offset().left) + parseInt(HubStar.get("pic_current_width")))) ||
//                        (parseInt(event.pageY) < parseInt($("#tag_image_object").offset().top)) || (parseInt(event.pageY) > (parseInt($("#tag_image_object").offset().top) + parseInt(HubStar.get("pic_current_height")))))
//                {
//                    console.log(parseInt($("#tag_image_object").offset().left) + parseInt(HubStar.get("pic_current_width")));
//                    console.log(event.pageY + "   " + $("#tag_image_object").offset().top + " ttttt" + HubStar.get("pic_current_height"));
//                    that.get("controller").set("inImage", false);  //may change with other variable
//                }
//                else
                {
                    mouseX = event.pageX - 265; // x and y axis
                    mouseY = event.pageY - 50;
                    that.get("controller").get("controllers.showTag").set("pic_x", (event.pageX - $("#tag_image_object").offset().left) / HubStar.get("pic_current_width"));
                    that.get("controller").get("controllers.showTag").set("pic_y", (event.pageY - $("#tag_image_object").offset().top) / HubStar.get("pic_current_height"));
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
            }
        });
        var that = this;
        window.onresize = function() {
            var pic_width = document.getElementById('tag_image_object').offsetWidth;
            var pic_height = document.getElementById('tag_image_object').offsetHeight;
 
            var tags = that.get("controller").get("controllers.showTag").get("contentTags");
            if (tags !== undefined && tags !== "" && tags !== null)
            {
                that.get("controller").windowResizeTags(tags,pic_width,pic_height);

            }


//            if (tags !== undefined && tags !== "" && tags !== null)
//            {
//
//                if ((HubStar.get("window_resize_height_times") === 1 || HubStar.get("window_resize_width_times") === 1) === false)
//                {
//                    for (var i = 0; i < tags.length; i++)
//                    {
//                        //var tagDiv = "#tag_" + tags[i].tag_id;
//                        console.log(HubStar.get("window_resize_height_times"));
//                        console.log(tags[i].pic_y + "   " + tags[i].pic_y * HubStar.get("window_resize_height_times"));
//                        tags[i].pic_y = tags[i].pic_y * HubStar.get("window_resize_height_times");
//                        tags[i].pic_x = tags[i].pic_x * HubStar.get("window_resize_width_times");
//                        console.log(tags[i].tag_id);
//
//                        //   $(tagDiv).css({top: tags[i].pic_y * HubStar.get("window_resize_height_times"), left: tags[i].pic_x * HubStar.get("window_resize_width_times")});
//                        //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
//                    }
//                    that.get("controller").windowResizeTags(tags);
//                } else
//                {
//                    if (HubStar.get("window_resize_height_times") === 1)
//                    {
//                        for (var i = 0; i < tags.length; i++)
//                        {
//                            //var tagDiv = "#tag_" + tags[i].tag_id;
//                            console.log(HubStar.get("window_resize_height_times"));
//                            console.log(tags[i].pic_y + "   " + tags[i].pic_y * HubStar.get("window_resize_width_times"));
//                            tags[i].pic_y = tags[i].pic_y * HubStar.get("window_resize_width_times");
//                            tags[i].pic_x = tags[i].pic_x * HubStar.get("window_resize_width_times");
//                            console.log(tags[i].tag_id);
//
//                            //   $(tagDiv).css({top: tags[i].pic_y * HubStar.get("window_resize_height_times"), left: tags[i].pic_x * HubStar.get("window_resize_width_times")});
//                            //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
//                        }
//                        that.get("controller").windowResizeTags(tags);
//                    }
//                    else if (HubStar.get("window_resize_width_times") === 1)
//                    {
//                        for (var i = 0; i < tags.length; i++)
//                        {
//                            //var tagDiv = "#tag_" + tags[i].tag_id;
//                            console.log(HubStar.get("window_resize_height_times"));
//                            console.log(tags[i].pic_y + "   " + tags[i].pic_y * HubStar.get("window_resize_height_times"));
//                            tags[i].pic_y = tags[i].pic_y * HubStar.get("window_resize_height_times");
//                            tags[i].pic_x = tags[i].pic_x * HubStar.get("window_resize_height_times");
//                            console.log(tags[i].tag_id);
//
//                            //   $(tagDiv).css({top: tags[i].pic_y * HubStar.get("window_resize_height_times"), left: tags[i].pic_x * HubStar.get("window_resize_width_times")});
//                            //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
//                        }
//                        that.get("controller").windowResizeTags(tags);
//                    }
//                }
            //   }
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
