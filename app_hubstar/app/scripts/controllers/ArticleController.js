HubStar.ArticleController = Ember.Controller.extend({
    content: [],
    image_no: 1,
    selectedPhoto: null,
    captionTitle: "",
    readCaption: true,
    caption: '',
    makeSureDelete: false,
    willDelete: false,
    checkLoginStatus: false,
    searchFromRoute: false,
    collectionArticleId: null,
    commentContent: "",
    isShowPhotoUrl: false,
    accessFromSearchBoard: false, //false: access the articlePhoto  true: access the article
    isCreditListExist: false,
    ////
    isBusinessProfile: false,
    enableTag: false,
    tagCount: 0,
    hasTag: false,
    makeSureActivateTag: false,
    willActivate: false,
    contentTagsArticle: "", //all the tags
    showEachTagContent: false,
    showAllTagsArticle: true, // users show the tag
    inImage: false,
    tag: [], //every tag content when click
    enableEditTag: false, //enable  photo owner to edit the tag after activate the tag
    showRequestTag: false, //show the tag after save and sent the request
    showTagAfterSave: false, // show the tag icon afte approve
    needs: ['application', 'addCollection', 'contact', 'applicationFeedback', 'checkingLoginStatus', 'editComment', 'itemFunction', 'masonryCollectionItems', 'showTag', 'mega', 'updateTag'],
    init: function() {
        HubStar.set("readCaption", true);
    },
    findSelectedItemIndex: function() {
        content = this.get('content');
        for (var index = 0; index <= content.get('length'); index++) {
            if (this.get('selectedPhoto') === content.objectAt(index)) {
                return index;
            }
        }
        return 0;
    },
    /******* function name: enableTag
     * parameter:
     *  aim: it is to enable user to tag in the photo and can edit the photo
     ***********************/
    activateTag: function()
    {
        $("#pa").addClass("hideClass");
        $("#na").addClass("hideClass");
        this.get("controllers.showTag").set("photo_id", this.get('selectedPhoto').id); //set the selected photo's id, it also contain the first photo
        this.set("showRequestTag", false);
        this.set("showTagAfterSave", false);
        this.set("showEachTagContent", false);
        this.set("enableTag", true);

    },
    /******* function name: enableTag
     * parameter:
     *  aim: it is to enable user to tag in the photo
     ***********************/
    endTag: function()
    {
        $("#pa").removeClass("hideClass"); //remove the left and right icon
        $("#na").removeClass("hideClass");
        this.set("enableTag", false);
        this.set("showTagAfterSave", false);
        this.set("inImage", false);  //click the end tag recove the value

    },
    addClickCount: function(tag_id, photo_url)
    {
        var photo_id = this.get('selectedPhoto').id;
        var delInfo = [tag_id, photo_id];
        delInfo = JSON.stringify(delInfo);
        window.open(
                photo_url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        var that = this;
        setTimeout(function() {
            if (that.get("contentTagsArticle") !== undefined && that.get("contentTagsArticle") !== "" && that.get("contentTagsArticle") !== null)
            {
                for (var i = 0; i < that.get("contentTagsArticle").length; i++)
                {
                    if (that.get("contentTagsArticle").objectAt(i).get("tag_id") === tag_id)
                    {
                        that.get("contentTagsArticle").objectAt(i).set("link_to_click_count", that.get("contentTagsArticle").objectAt(i).get("link_to_click_count") + 1);
                    }
                }
            }
        }
        , 10);
        requiredBackEnd('showTag', 'ViewCount', delInfo, 'POST', function(params) {
        });
    },
    showTags: function()
    {

        this.set("showAllTagsArticle", true);
        this.set("showEachTagContent", true);
        var tags = this.get("contentTagsArticle");
        setTimeout(function() {
            if (tags !== undefined && tags !== "" && tags !== null)
            {
                for (var i = 0; i < tags.length; i++)
                {
                    var tagDiv = "#tag_" + tags[i].tag_id;
                    var height = tags[i].pic_y * HubStar.get("pic_current_height") + $("#tag_image_object").offset().top;
                    var width = tags[i].pic_x * HubStar.get("pic_current_width") + $("#tag_image_object").offset().left;
                    $(tagDiv).css({top: height, left: width});
                    //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
                }
            }
        }
        , 10);
    },
    hideTags: function()
    {
        this.set("showAllTagsArticle", false);
        this.set("showEachTagContent", false);
    },
    EditTag: function(tag_id)
    {
        this.set("enableEditTag", true);
        this.get("controllers.updateTag").updateTag(tag_id, this.get('selectedPhoto').id);

    },
    windowResizeTags: function(tags, width, height)
    {
        var photo_id = "";
        photo_id = this.get('selectedPhoto').id;
        var that = this;
        HubStar.set("pic_current_width", width);
        HubStar.set("pic_current_height", height);
        for (var i = 0; i < tags.length; i++)
        {
            var tagDiv = "#tag_" + tags[i].tag_id;
            var pic_width = width * tags[i].pic_x + $("#tag_image_object").offset().left;
            var pic_height = height * tags[i].pic_y + $("#tag_image_object").offset().top;
            $(tagDiv).css({top: pic_height, left: pic_width});
            //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
        }
    },
//    windowResizeTags: function(tags)
//    {
//        var photo_id = "";
//        photo_id = this.get('selectedPhoto').id;
//
//        var delInfo = [tags, photo_id];
//        delInfo = JSON.stringify(delInfo);
//        var that = this;
//        //this.get('megaResouce').get('comments').removeObject(object);
//        requiredBackEnd('showTag', 'resizeWindow', delInfo, 'POST', function(params) {
//
//            //  that.get("controllers.showTag").readTags(that.get('selectedPhoto').id);
//            var tags = params;
//            var thatthat = that;
//            setTimeout(function() {
//                //thatthat.get("controllers.mega").set("tagCount", params.get("length"));
//
//                thatthat.get("controllers.article").set("tagCount", params.get("length"));
//                if (tags !== undefined && tags !== "" && tags !== null)
//                {
//                    for (var i = 0; i < tags.length; i++)
//                    {
//                        var tagDiv = "#tag_" + tags[i].tag_id;
//                        $(tagDiv).css({top: tags[i].pic_y, left: tags[i].pic_x});
//                        //    $(tagDiv).attr("style", "top:" + tags[i].pic_y + "px" );
//                    }
//                }
//            }
//            , 20);
//        });
//    },
    JudgeBusinessProfile: function()
    {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var that = this;
        currentUser.then(function() {
            var photo_owner_email = currentUser.get("email"); //photo owner contact email address
            var endOfEmail = "";
            console.log(photo_owner_email);
            if (photo_owner_email.search("@") !== -1)
            {
                endOfEmail = photo_owner_email.split("@")[1];

                var trendsAccountEmail = "trendsideas.com"; //all trends account can have the edit right;
                if ((currentUser.get("profiles") !== null && currentUser.get("profiles") !== undefined && currentUser.get("profiles") !== "") || trendsAccountEmail === endOfEmail)
                {
                    if (currentUser.get("profiles").get("length") > 0 || trendsAccountEmail === endOfEmail)
                    {
                        that.set("isBusinessProfile", true);
                    }
                    else
                    {
                        that.set("isBusinessProfile", false);
                    }
                }
            }
            else
            {
                that.set("isBusinessProfile", false);
            }
        });

    },
    JudgePhotoOwner: function(mega)
    {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var login_user_id = currentUser.get("id"); // current login user id

        var profile_id = mega.get("owner_id");
        console.log("aaaaaaaaaaaaaaaaaaa");
        console.log(mega);
        var profile = HubStar.Profile.find(profile_id);
        if (profile.get("profile_owner_ids") !== null && profile.get("profile_owner_ids") !== undefined && profile.get("profile_owner_ids") !== "")
        {
            var profile_owner_ids = profile.get("profile_owner_ids");
            for (var i = 0; i < profile_owner_ids.get("length"); i++)
            {
                var photoOwner = profile_owner_ids.objectAt(i).get("user_id");
                if (login_user_id === photoOwner)
                {
                    this.set("isPhotoOwner", true);
                    break;
                }
                else
                {
                    this.set("isPhotoOwner", false);
                }
            }
        }

    },
    /****it is allow the user to active the tag******/
    activateUserTag: function(tag_id)
    {
        console.log(tag_id + "sdfdsfds");
        this.get("controllers.showTag").activateUserTag(tag_id, this.get('selectedPhoto').id);
    },
    sureToActivate: function(tag_id)
    {
        var message = "Are you sure to activate this tag?";
        this.set("message", message);
        this.set('makeSureActivateTag', true);
        this.set("tag_id", tag_id);
        this.set("type", true);
        if (this.get('willActivate') === true) {
            this.activateUserTag(tag_id);
            this.cancelActivate();
        } else {
            this.set("s", tag_id);
            this.set('willActivate', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelActivate: function() {
        this.set('willActivate', false);
        this.set('makeSureActivateTag', false);
    },
    sureDelTag: function(tag_id)
    {
        console.log("sure to delete tag");
        console.log(this.get('selectedPhoto').id + "mmmmmmmmmmmmmm");
        this.get("controllers.showTag").deleteTag(tag_id, this.get('selectedPhoto').id);
    },
    deleteTag: function(tag_id) {
        var message = "Are you sure to delete  this tag?";
        this.set("message", message);
        this.set("tag_id", tag_id);
        this.set("type", false); //type is false mean delete other it mean activate
        this.set('makeSureActivateTag', true);
        if (this.get('willDelTag') === true) {
            this.sureDelTag(tag_id);
            this.cancelDelTag();
        } else {
            this.set("s", tag_id);
            this.set('willDelTag', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelTag: function()
    {
        this.set('willDelTag', false);
        this.set('makeSureActivateTag', false);
        console.log("aaaaaaaaaaaaa");
    },
    previesImage: function(event, pic_x, pic_y) {
        this.set("showEachTagContent", false);
//        this.set("contentTagsArticle", "");
        this.get("controllers.showTag").set("contentTags", "");
        if (this.get("enableTag") === true)
        {

            setTimeout(function() {
                $('#tagit').fadeIn();
                $('#tagit').css({top: pic_y, left: pic_x, opacity: 1});

                $('#tagname').focus();
                $('#masonry_container').masonry(); //masonry();
            }, 20);
        } else
        {
            this.set("contentTagsArticle", "");
            if (!this.get('selectedPhoto')) {
                this.set('selectedPhoto', this.get('content').get('lastObject'));
            }
            var selectedIndex = this.findSelectedItemIndex();
            selectedIndex--;
            if (selectedIndex < 0) {
                selectedIndex = this.get('content').get('length') - 1;
                this.set('image_no', this.get('content').get('length'));
            }
            this.set("isShowPhotoUrl", true);
            this.set('image_no', selectedIndex + 1);
            this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
            this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
            if (this.get("accessFromSearchBoard") === false)
            {
                if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
                {

                    this.transitionTo("profileArticlePhoto", this.get("megaResouce").get('photo').objectAt(0));

                }
                else
                {
                    this.transitionTo("articlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
            }
            else
            {

                var address = document.URL;
                var id = address.split("#")[1].split("/")[2];
                var search_type = address.split("#")[1].split("/")[1];

                if (search_type === "search" || search_type === "searchs") //it is the search index
                {
                    if (id === "default")
                    {
                        this.transitionTo("searchDefaultArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));

                    }
                    else
                    {
                        this.transitionTo("searchIndexArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                    }

                }
                else if (search_type === "profiles")
                {
                    this.transitionTo("profileArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
                else if (search_type === "users")
                {
                    this.transitionTo("articlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
            }

            this.set("photo_album_id", "album_" + this.get('selectedPhoto').get("id"));
            this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').get("id"));
            this.selectedImage(this.get('selectedPhoto').get("id"));
            this.set('captionTitle', this.get('selectedPhoto').get("photo_title"));
            this.set('caption', this.get('selectedPhoto').get("photo_caption"));

            this.captionDisplay();

        }
    },
    nextImage: function(event, pic_x, pic_y) {
        this.set("showEachTagContent", false);
        this.get("controllers.showTag").set("contentTags", "");

        if (this.get("enableTag") === true)
        {
            setTimeout(function() {
                $('#tagit').fadeIn();
                $('#tagit').css({top: pic_y, left: pic_x, opacity: 1});
                $('#tagname').focus();

                $('#masonry_container').masonry(); //masonry();
            }, 20);


        } else
        {
            this.set("contentTagsArticle", "");
            this.set("isShowPhotoUrl", true);
            if (!this.get('selectedPhoto')) {
                this.set('selectedPhoto', this.get('content').get('firstObject'));
            }
            var selectedIndex = this.findSelectedItemIndex();
            selectedIndex++;
            if (selectedIndex >= (this.get('content').get('length'))) {
                this.set('image_no', 1);
                selectedIndex = 0;
            }
            this.set('image_no', selectedIndex + 1);
            this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
            this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
            if (this.get("accessFromSearchBoard") === false)
            {
                if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
                {

                    this.transitionTo("profileArticlePhoto", this.get("megaResouce").get('photo').objectAt(0));

                }
                else
                {
                    console.log("555555555555555555555555");
                    this.transitionTo("articlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
            }
            else
            {
                var address = document.URL;
                var id = address.split("#")[1].split("/")[2];
                var search_type = address.split("#")[1].split("/")[1];
                if (search_type === "search" || search_type === "searchs") //it is the search index
                {
                    if (id === "default")
                    {

                        this.transitionTo("searchDefaultArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));


                    }
                    else
                    {
                        this.transitionTo("searchIndexArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                    }

                }
                else if (search_type === "profiles")
                {
                    this.transitionTo("profileArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
                else if (search_type === "users")
                {

                    this.transitionTo("articlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }

            }
            this.set("photo_album_id", "album_" + this.get('selectedPhoto').get("id"));
            this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').get("id"));
            this.selectedImage(this.get('selectedPhoto').get("id"));
            this.set('captionTitle', this.get('selectedPhoto').get("photo_title"));
            this.set('caption', this.get('selectedPhoto').get("photo_caption"));
            this.captionDisplay();
        }

    },
    captionDisplay: function()
    {
        if (this.get("caption") === null || this.get("caption") === "")
        {

            if (HubStar.get("readCaption"))
            {
                $('#caption_action').attr('style', 'left: 0px; display:none');
            }
            else
            {
                $('#caption_action').attr('style', 'left: -320px; display:none');
            }
        }
        else
        {
            if (HubStar.get("readCaption"))
            {
                $('#caption_action').attr('style', 'left: 0px; display:block');
            }
            else
            {
                $('#caption_action').attr('style', 'left: -320px; display:block');
            }
        }
    },
    selectImage: function(e) { // it is click the photo
        this.set("isShowPhotoUrl", true);
        this.set("contentTagsArticle", "");
        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));

        this.set('captionTitle', this.get('selectedPhoto').get("photo_title"));
        this.set('caption', this.get('selectedPhoto').get("photo_caption"));

        var contents = this.get('content');
        var selectedIndex = 1;
        for (var index = 0; index <= contents.get('length') - 1; index++) {

            if (this.get('selectedPhoto').get("id") === contents.objectAt(index).get("id")) {
                selectedIndex = index + 1;
            }
        }

        if (selectedIndex >= (this.get('content').get('length') + 1)) {
            this.set('image_no', 1);
            selectedIndex = 1;
        }

        this.set('image_no', selectedIndex);

        if (this.get("accessFromSearchBoard") === false)
        {
            if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profileArticlePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
            else
            {
                this.transitionTo("articlePhoto", HubStar.Mega.find(e).get('photo').objectAt(0)); //control the change id when click the photo
            }

        }
        else
        {
            var address = document.URL;
            var id = address.split("#")[1].split("/")[2];
            if (id === "default") //it is the search index
            {
                this.transitionTo("searchDefaultArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
            }
            else
            {
                this.transitionTo("searchIndexArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
            }
            //this.transitionTo("article", HubStar.Mega.find(e).get('photo').objectAt(0)); //control the change id when click the photo
            //                                                               // as it use the fix id to refresh the route so it will have problem when fresh (change the id)
        }
        this.selectedImage(e);
        this.captionDisplay();
    },
    selectedImage: function(id) {
        var selectedImage_id = "#" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
    },
    getInitData: function(megaObject) {

        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("contentTagsArticle", "");
        this.set("enableTag", false);
        this.set("showTagAfterSave", false);
        this.JudgeBusinessProfile(); //it is used to judge whether the user has business profile or it is the trends account
        console.log("0000000000000000000000000000000000");
        console.log("article init data");
        this.set("content", []);
        this.set("selectedPhoto", '');
        this.set('image_no', 1);

        var that = this;
        megaObject.then(function() {
            that.set('articleResouce', megaObject.get('article').objectAt(0));
            that.set('article', megaObject);
            that.set('articleID', megaObject.id);
            that.set('megaResouce', megaObject);
            that.addRelatedData(megaObject);
            that.getCommentsById(megaObject.id);
            that.checkCreditExist(megaObject.get('article').objectAt(0).get('credits'));
        });
        setTimeout(function() {
            if (megaObject.get("view_count") === undefined || megaObject.get("view_count") === null || megaObject.get("view_count") === "")
            {
                megaObject.set("view_count", 1);
            }
            else
            {
                var megaData = megaObject.get("view_count");
                megaObject.set("view_count", megaData + 1);
            }
            megaObject.store.save();
        }, 5000);
    },
    checkCreditExist: function(credits) {
        if (credits !== null && credits !== 'undefined' && credits.get('length') > 0) {
            this.set('isCreditListExist', true);
        } else {
            this.set('isCreditListExist', false);
        }
    },
    addComment: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var commentContent = this.get('commentContent');
            if (commentContent) {
                var comments = this.get('article').get('comments');
                var commenter_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
                var commenter_id = this.get("currentUser").get('id');
                var name = this.get("currentUser").get('display_name');
                var date = new Date();
                var message_id = createMessageid() + commenter_id;
                var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                    "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                    "is_delete": false, optional: this.get('article').get('type') + '/' + this.get('article').get('id')});
                comments.insertAt(0, tempComment);
                comments.store.save();
                this.set('commentContent', '');
                $('#addcommetBut').attr('style', 'display:block');
                $('#commentBox').attr('style', 'display:none');
            }
        }
    },
    removeComment: function(object)
    {
        var message = "Remove this comment?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.removeCommentItem(object);
            this.cancelDelete();
        } else {
            this.set("obj", object);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeCommentItem: function(object)
    {
        var id = this.get('article').get("id");
        var message_id = object.get("message_id");
        var delInfo = [id, message_id];

        delInfo = JSON.stringify(delInfo);
        var that = this;
        this.get('article').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeleteArticleComment', delInfo, 'POST', function(params) {
        });
    },
    updateComment: function(object) {
        this.get("controllers.editComment").setRelatedController("article");
        var comments = this.get('article').get('comments');
        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("message_id") === object.get("message_id"))
            {
                object.set("isEdit", !object.get("isEdit"));
            }
            else
            {
                comments.objectAt(i).set("isEdit", false);
            }
        }
        var msg = object.get("content");
        HubStar.set("updateCommentmsg", msg);
    },
    addRelatedData: function(mega) {

        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");
        var isProfileIDExist = this.isParamExist(owner_profile_id);
        var isCollectionIDExist = this.isParamExist(collection_id);
        var that = this;
        if (isProfileIDExist && isCollectionIDExist) {
            var data = HubStar.Mega.find({RequireType: "articleRelatedImage", "article_id": collection_id, "owner_id": owner_profile_id});
            data.addObserver('isLoaded', function() {
                if (data.get('isLoaded')) {

                    var length = this.get("length");
                    for (var i = 0; i < length - 1; i++) {
                        var temp = this.objectAt(i);
                        if (temp.get("photo") !== undefined) {
                            that.get("content").pushObject(temp.get("photo").objectAt(0));                                  //find the object which contain photos and push it into model
                        }
                    }
                    //set the photo id which include the first photo id 
                    console.log("article related data");
                    console.log(that.get('content').objectAt(0).id);
//                    that.JudgePhotoOwner(that.get('content').objectAt(0));  //it is used to judge whether the user is the photo owner
//                    that.get("controllers.showTag").readTags(that.get('content').objectAt(0).id);
//                    var thatthat = that;
//                    setTimeout(function() {
//                        if (thatthat.get("contentTagsArticle") !== "" && thatthat.get("contentTagsArticle") !== null && thatthat.get("contentTagsArticle") !== undefined)
//                        {
//                            if (thatthat.get("contentTagsArticle").get("length") > 0)
//                            {
//                                console.log(thatthat.get("contentTagsArticle"));
//                                thatthat.set("hasTag", true);
//                                // that.set("tagCount", that.get("contentTags").get("length"));
//                            }
//
//                        }
//                    }, 50);
                    if (that.get("accessFromSearchBoard") === false)
                    {

                        //  if (this.get("isShowPhotoUrl") === true) //to controll show the photo url or not
                        {
                            if (that.get("controllers.masonryCollectionItems").get("type") === "profile")
                            {
                                that.transitionTo("profileArticlePhoto", that.get('content').objectAt(0));


                            }
                            else
                            {

                                that.transitionTo("articlePhoto", that.get('content').objectAt(0));
                            }
                            this.set("isShowPhotoUrl", false);
                        }


                    }
                    else
                    {
                        console.log("333333333333");
                        var address = document.URL;
                        var search_id = address.split("#")[1].split("/")[2];
                        var search_type = address.split("#")[1].split("/")[1];

                        //    if (this.get("isShowPhotoUrl") === true)
                        {
                            if (search_type === "search" || search_type === "searchs")
                            {
                                if (search_id === "default")
                                {
                                    that.transitionTo("searchDefaultArticlePhoto", that.get("content").objectAt(0));
                                } else
                                {
                                    that.transitionTo("searchIndexArticlePhoto", that.get("content").objectAt(0));
                                }
                            } else if (search_type === "profiles")
                            {
                                that.transitionTo("profileArticlePhoto", that.get('content').objectAt(0));

                            }
                            else if (search_type === "users")
                            {
                                that.transitionTo("articlePhoto", that.get('content').objectAt(0));
                            }
                            this.set("isShowPhotoUrl", false);
                        }

                    }

                    that.set('selectedPhoto', that.get('content').objectAt(0));                                                  //set selectedPhoto to the first photo
                    that.set('captionTitle', that.get('selectedPhoto').get("photo_title"));

                    that.set('caption', that.get('selectedPhoto').get("photo_caption"));


                    that.captionDisplay();
                    var address1 = document.URL;
                    var articlePhoto = address1.split("#")[1].split("/");
                    if (articlePhoto[articlePhoto.get("length") - 2] === "photos")
                    {
                        that.selectImage(articlePhoto[articlePhoto.get("length") - 1]);
                    }
                }
            }
            );
        }
    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('thisComments', comments);
    }
    ,
    isParamExist: function(param)
    {
        var result = (param !== null && param !== undefined);
        return result;
    }
    ,
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        var address = document.URL;
        var collection_id = address.split("#")[1].split("/")[6];
        var user_id = address.split("#")[1].split("/")[2];
        var type = address.split("#")[1].split("/")[1];


        if (type === "search") //search from the seach board
        {
            if (user_id === "default") //it is the search index
            {
                this.transitionTo("searchIndex");
            }
            else
            {
                HubStar.set("escVideo", true);
                this.transitionTo("search", {id: user_id}); // go to search page, this can  work, but it is too slowlly.
            }

            // window.history.back();
        }
        else
        {
            if (type === "users")
            {
                var photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("userPhoto", photoObject); //user photo
            }
            else if (type === "profiles")
            {
                var photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("profilePhoto", photoObject); // profile photo
            }
        }
        $('#masonry_wrapper').attr('style', "top:100px;position:relative");
        setTimeout(function() {
            $('#masonry_container').masonry();  //masonry();
        }, 300);

    },
    switchCollection: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('articleResouce').id;
            addCollectionController.setImageID(selectid);
            var tempUrl = this.get('selectedPhoto').photo_image_thumbnail_url;
            addCollectionController.setThumbnailUrl(tempUrl);
            addCollectionController.setRelatedController('article');
            addCollectionController.setUser();
            this.set('collectable', !this.get('collectable'));
        }
    },
    editingContactForm: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var contactController = this.get('controllers.contact');

            this.get("controllers.contact").set("firstStepOfContactEmail", false);
            this.get("controllers.contact").set('secondStepOfContactEmail', false);

            var selectid = this.get('selectedPhoto').id;
            contactController.setSelectedMega(selectid);

            this.set('contact', !this.get('contact'));
        }
    },
    closeContact: function() {
        this.set('contact', false);
    },
    setCaption: function()
    {
        if (HubStar.get("readCaption"))
        {
            $('#caption_action').animate({
                left: -320
            }, 800);

            HubStar.set("readCaption", false);
        }
        else
        {
            $('#caption_action').animate({
                left: 0
            }, 800);
            HubStar.set("readCaption", true);
        }
    },
    getTest: function() {

        return "test";

    },
    dropdownPhotoSetting: function(param) {
        $('#dropdown_id_' + param).toggleClass('hideClass');
    },
    fbShare: function(param) {
        this.dropdownPhotoSetting(param);
        var that = this;

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var caption = '';

        if (this.get('articleResouce').get("article_body") !== null)
        {
            caption = this.get('articleResouce').get("article_body");
        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.get('selectedPhoto').photo_image_original_url,
            name: this.get('articleResouce').get("article_headline"),
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                var mega = HubStar.Mega.find(this.get('articleID'));
                mega.then(function() {
                    if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                    {
                        mega.set("share_count", 0);
                    }
                    else
                    {
                        mega.set("share_count", mega.get("share_count") + 1);
                    }
                    mega.store.save();
                });
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function(param) {
        this.dropdownPhotoSetting(param);
        var caption = '';
        if (this.get('articleResouce').get("article_body") !== null)
        {
            caption = this.get('articleResouce').get("article_body");
        }
        else
        {
            caption = '';
        }


        $("meta[property='og\\:title']").attr("content", this.get('articleResouce').get("article_headline"));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').photo_image_original_url);


        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);
        var mega = HubStar.Mega.find(this.get('articleID'));
        mega.then(function() {
            if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
            {
                mega.set("share_count", 0);
            }
            else
            {
                mega.set("share_count", mega.get("share_count") + 1);
            }
            mega.store.save();
        });

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function(param) {
        this.dropdownPhotoSetting(param);

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var url = 'https://twitter.com/share?text=' + this.get('articleResouce').get("article_headline") + '&url=' + encodeURIComponent(currntUrl);
        var mega = HubStar.Mega.find(this.get('articleID'));
        mega.then(function() {
            if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
            {
                mega.set("share_count", 0);
            }
            else
            {
                mega.set("share_count", mega.get("share_count") + 1);
            }
            mega.store.save();
        });
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function(param) {

        this.dropdownPhotoSetting(param);

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').photo_image_original_url) +
                '&description=' + encodeURIComponent(this.get('articleResouce').get("article_headline"));
        var mega = HubStar.Mega.find(this.get('articleID'));
        mega.then(function() {
            if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
            {
                mega.set("share_count", 0);
            }
            else
            {
                mega.set("share_count", mega.get("share_count") + 1);
            }
            mega.store.save();
        });
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    addLike: function() {
        var controller = this.get('controllers.itemFunction');
        controller.addLike(this.get('megaResouce').get('id'));
    }
});
