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
    isBusinessProfile: false,
    enableTag: false,
    tagCount: 0,
    fromsearchtag: false,
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
    needs: ['application', 'addCollection', 'contact', 'applicationFeedback', 'checkingLoginStatus', 'editComment', 'itemFunction', 'masonryCollectionItems', 'showTag', 'mega', 'updateTag', 'permission', 'shareEmail'],
    init: function() {
        HubStar.set("readCaption", true);
    },
    findSelectedItemIndex: function() {
        var content = this.get('content');
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

        this.set("tempShowTags", this.get("showAllTags"));
        this.set("showAllTags", true);

        this.set("enableTag", true);
        $("#previousarticlephoto").addClass("touch-cursor");
        $("#nextarticlephoto").addClass("touch-cursor");
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
        this.set("showAllTags", this.get("tempShowTags"));
        $("#previousarticlephoto").removeClass("touch-cursor");
        $("#nextarticlephoto").removeClass("touch-cursor");
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
        this.set("showEachTagContent", false);
        this.get("controllers.showTag").readTags(this.get('selectedPhoto').id);
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
        console.log("aaaaaa");
    },
    windowResizeTags: function(tags)
    {
        for (var i = 0; i < tags.length; i++)
        {
            var tagDiv = "#tag_" + tags[i].tag_id;
            var center_y = $(window).height() / 2;
            var center_x = ($(window).width() * 0.55) / 2;
            var top = center_y - HubStar.get("pic_current_height") / 2;
            var left = center_x - HubStar.get("pic_current_width") / 2;
            var height = tags[i].pic_y * HubStar.get("pic_current_height") + top;  //set the tag's place which is the percentage of image and add the picture origin left point place
            var width = tags[i].pic_x * HubStar.get("pic_current_width") + left;


            $(tagDiv).css({top: height, left: width});
        }
    },
    JudgeBusinessProfile: function()
    {
        if (localStorage.loginStatus) {
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            var that = this;
            currentUser.then(function() {
//                var photo_owner_email = currentUser.get("email"); //photo owner contact email address
//                var endOfEmail = "";
//                if (photo_owner_email.search("@") !== -1)
//                {
//                    endOfEmail = photo_owner_email.split("@")[1];
//
//                    var trendsAccountEmail = "trendsideas.com"; //all trends account can have the edit right;
//                    if ((currentUser.get("profiles") !== null && currentUser.get("profiles") !== undefined && currentUser.get("profiles") !== "") || trendsAccountEmail === endOfEmail)
//                    {
//                        if (currentUser.get("profiles").get("length") > 0)
//                        {
//                            that.set("isBusinessProfile", true);
//                        }
//                        else
//                        {
//                            that.set("isBusinessProfile", false);
//                        }
//                    }
//                }
//                else
//                {
//                    that.set("isBusinessProfile", false);
//                }
                that.set("isBusinessProfile", currentUser.get("profileSave"));
            });
        }
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var role = permissionController.checkAuthenticEdit(that.get("megaResouce").get("profile_creator"), that.get("megaResouce").get("profile_administrator"), that.get("megaResouce").get("profile_editor"));
        var is_edit = false;
        if (role !== "")
        {
            is_edit = true;
        }

        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user || is_edit);

        currentUser.then(function() {
            var current_user_email = currentUser.get('email');
            var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
            that.set("is_authentic_user", is_authentic_user || is_edit);
        });
    },
    /****it is allow the user to active the tag******/
    activateUserTag: function(tag_id)
    {
        this.get("controllers.showTag").activateUserTag(tag_id, this.get('selectedPhoto').id);
    },
    sureToActivate: function(tag_id)
    {
        var message = "Activate this tag?";
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
    },
    previesImage: function(event, pic_x, pic_y) {
        this.set("showEachTagContent", false);
        if (this.get("enableTag") === true)
        {
            if (this.get("inImage") === true) {
                var that = this;
                setTimeout(function() {
                    $('#tagit').css({top: pic_y, left: pic_x, opacity: 1});
                    $('#tagit').fadeIn();
                    if (that.get("controllers.showTag").get("change_tag_show_2"))
                    {
                        $(document).ready(function() {
                            $("#showTagSavePhoto").css("left", "265px");
                        });
                    }
                    else
                    {
                        $(document).ready(function() {
                            $("#showTagSavePhoto").css("left", "0px");
                        });
                    }
                    $('#tagname').focus();
                }, 20);
            }
        } else
        {
            this.set("contentTagsArticle", "");
            this.get("controllers.showTag").set("contentTags", "");
            if (!this.get('selectedPhoto')) {
                this.set('selectedPhoto', this.get('content').get('lastObject'));
            }
            var selectedIndex = this.findSelectedItemIndex();
            selectedIndex--;
            if (selectedIndex < -1) {
                this.get("controllers.checkingLoginStatus").popupLogin();
            }
            if (selectedIndex < 0) {

                selectedIndex = this.get('content').get('length') - 1;
                this.set('image_no', this.get('content').get('length'));
            }
            this.set("isShowPhotoUrl", true);
            this.set('image_no', selectedIndex + 1);
            this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
            this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
            this.get("controllers.showTag").readTags(this.get('selectedPhoto').get("id"), "article");
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
        if (this.get("enableTag") === true)
        {
            if (this.get("inImage") === true) {
                var that = this;
                setTimeout(function() {
                    $('#tagit').css({top: pic_y, left: pic_x, opacity: 1});
                    $('#tagit').fadeIn();
                    if (that.get("controllers.showTag").get("change_tag_show_2"))
                    {
                        $(document).ready(function() {
                            $("#showTagSavePhoto").css("left", "-265px");
                        });
                    }
                    else
                    {
                        $(document).ready(function() {
                            $("#showTagSavePhoto").css("left", "0px");
                        });
                    }
                    $('#tagname').focus();
                }, 20);
            }
        } else
        {
            this.set("contentTagsArticle", "");
            this.get("controllers.showTag").set("contentTags", "");
            this.set("isShowPhotoUrl", true);
            if (!this.get('selectedPhoto')) {
                this.set('selectedPhoto', this.get('content').get('firstObject'));
            }
            var selectedIndex = this.findSelectedItemIndex();
            selectedIndex++;
            if (selectedIndex >= this.get('content').get('length') - 1) {
                this.get("controllers.checkingLoginStatus").popupLogin();
            }
            if (selectedIndex >= (this.get('content').get('length'))) {

                this.set('image_no', 1);
                selectedIndex = 0;
            }
            this.set('image_no', selectedIndex + 1);
            this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
            this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
            this.get("controllers.showTag").readTags(this.get('selectedPhoto').get("id"), "article");
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
//alert("selected image in article");
        this.set("isShowPhotoUrl", true);
        this.set("contentTagsArticle", "");
        var megaModel = HubStar.Mega.find(e);
        this.set('megaResouce', megaModel);
        var photoObject = HubStar.Mega.find(e).get('photo').objectAt(0);
        if (this.get("fromsearchtag") === true)
        {
            this.get("controllers.showTag").readTags(e, "article");
            HubStar.set("isArticleTag", true);  //isArticleTag is true mean is the  photo tag,so it will set different tagcontent in showTagController
        }
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
            var search_type = address.split("#")[1].split("/")[1];
            if (search_type === "articles")
            {
                this.transitionTo("searchsArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
            }
            else {
                if (id === "default") //it is the search index
                {
                    this.transitionTo("searchDefaultArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
                else
                {
                    this.transitionTo("searchIndexArticlePhoto", this.get('megaResouce').get("photo").objectAt(0));
                }
            }
        }
        this.selectedImage(e);
        this.captionDisplay();

    },
    selectedImage: function(id) {
        var selectedImage_id = "#showalbum_" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
    },
    getInitData: function(megaObject) {

        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("contentTagsArticle", "");
        this.set("enableTag", false);
        this.set("showTagAfterSave", false);
        this.JudgeBusinessProfile(); //it is used to judge whether the user has business profile or it is the trends account
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
            that.set("showEachTagContent", false);
            that.checkCreditExist(megaObject.get('article').objectAt(0).get('credits'));
            that.checkAuthenticUser();
            var tempComment = [megaObject.id];
            requiredBackEnd('megas', 'SetViewCount', tempComment, 'POST', function() {
            });
        });


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
        this.get('article').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeleteArticleComment', delInfo, 'POST', function() {
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
                    for (var i = 0; i < length; i++) {
                        var temp = this.objectAt(i);
                        if (temp.get("photo") !== undefined) {
                            that.get("content").pushObject(temp.get("photo").objectAt(0)); //find the object which contain photos and push it into model
                        }
                    }
                    if (that.get("accessFromSearchBoard") === false)
                    {
                        if (this.get("isShowPhotoUrl") === true) //to controll show the photo url or not
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

                        var address = document.URL;
                        var search_id = address.split("#")[1].split("/")[2];
                        var search_type = address.split("#")[1].split("/")[1];
                        if (this.get("isShowPhotoUrl") === true)
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
                            else if (search_type === "articles")
                            {
                                that.transitionTo("searchsArticlePhoto", that.get('content').objectAt(0));
                            }
                            this.set("isShowPhotoUrl", false);
                        }

                    }
                    if (that.get('content').length !== 1) {
                        $(document).ready(function() {
                            setTimeout(function() {
                                $("#previousarticlephoto").removeClass("touch-cursor");
                                $("#nextarticlephoto").removeClass("touch-cursor");
                            }, 10);
                        });
                    }
                    else {
                        $(document).ready(function() {
                            setTimeout(function() {
                                $("#previousarticlephoto").addClass("touch-cursor");
                                $("#nextarticlephoto").addClass("touch-cursor");
                            }, 10);
                        });
                    }
                    that.set('selectedPhoto', that.get('content').objectAt(0)); //set selectedPhoto to the first photo
                    that.set('captionTitle', that.get('selectedPhoto').get("photo_title"));
                    that.set('caption', that.get('selectedPhoto').get("photo_caption"));
                    that.captionDisplay();
                    var address1 = document.URL;
                    var articlePhoto = address1.split("#")[1].split("/");
                    if (document.URL.search("search") !== -1)
                    {
                        that.set("fromsearchtag", true);
                        that.get("controllers.mega").photoSizeJudge(that.get('selectedPhoto'));
                    }
                    if (articlePhoto[articlePhoto.get("length") - 2] === "photos")
                    {
                        that.selectImage(articlePhoto[articlePhoto.get("length") - 1]);
                    }

                    else
                    {
                        that.selectImage(that.get("content").objectAt(0).get("id"));

                        if (HubStar.get("photoID") === null || HubStar.get("photoID") === undefined || HubStar.get("photoID") === "")
                        {
                        }
                        else
                        {
                            that.selectImage(HubStar.get("photoID"));
                            HubStar.set("photoID", "");

                        }
                    }
                }
            });
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
        this.set("contentTagsArticle", []);
        var address = document.URL;
        var collection_id = address.split("#")[1].split("/")[6];
        var user_id = address.split("#")[1].split("/")[2];
        var type = address.split("#")[1].split("/")[1];
        if (type === "search") //search from the seach board
        {
            if (user_id === "default") //it is the search index
            {
                this.transitionTo("searchIndexTom");
            }
            else
            {
                HubStar.set("escVideo", true);
                this.transitionTo("search", {id: user_id}); // go to search page, this can  work, but it is too slowlly.
            }
        }
        else
        {
            var photoObject;
            if (type === "users")
            {
                photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("userPhoto", photoObject); //user photo
            }
            else if (type === "profiles")
            {
                photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("profilePhoto", photoObject); // profile photo
            }
            else if (type === "photos" || type === "articles" || type === "videos")
            {
                var m = HubStar.Mega.find(user_id);
                HubStar.set("closeArticlePhoto", true);
                this.transitionTo("search", {id: m.get("owner_title")});
            }
        }
        HubStar.set('ctaView', true);
    },
    switchCollection: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('articleResouce').id;
            addCollectionController.setImageID(selectid);

            var tempUrl = this.get('articleResouce').get("article_image_url");
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
    closeShareEmail: function() {
        this.set('shareEmail', false);
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
        var id = '#dropdown_id_' + param;
        $(id).toggleClass('hideClass');
        $(id).click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
//        $('#dropdown_id_' + param).toggleClass('hideClass');
    },
    fbShare: function(param) {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
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
                picture: this.get('selectedPhoto').get('photo_image_original_url'),
                name: this.get('articleResouce').get("article_headline"),
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    var mega = HubStar.Mega.find(that.get('articleID'));
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
                    that.get('controllers.applicationFeedback').statusObserver(null, "Article shared successfully!");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }
    },
    //share to social google plus
    gpShare: function(param) {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
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
            $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_original_url'));


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
        }
    },
    //share to social twitter
    tShare: function(param) {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
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
        }
    },
    pShare: function(param) {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            this.dropdownPhotoSetting(param);

            var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
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
        }
    },
    eShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.set('descript', this.get('selectedPhoto').get('photo_title'));
            var currentUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
            if (this.get('selectedPhoto').get("type") === "article")
            {
                this.set('descript', this.get('selectedPhoto').get('article').objectAt(0).get("article_headline"));
            }
            else if (this.get('selectedPhoto').get("type") === "video")
            {
                this.set('descript', this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle"));
            }
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

            var shareEmailController = this.get('controllers.shareEmail');
            var selectid = this.get('selectedPhoto').id;
            shareEmailController.setImageID(selectid);
            var tempUrl = this.get('selectedPhoto').get('photo_image_original_url');
            shareEmailController.setThumbnailUrl(tempUrl);
            shareEmailController.setUrl(currentUrl);
            shareEmailController.setUser();
            shareEmailController.setRelatedController('article');
            shareEmailController.setSelectedMega(selectid);
            shareEmailController.setTitle(this.get('descript'));
            this.set("isShareEmail", true);
//        this.get("controllers.shareEmail").getClientId(this.get("Id"));

        }
    },
    addLike: function() {
        var controller = this.get('controllers.itemFunction');
        controller.addLike(this.get('article').get('id'));
    },
    unLike: function() {
        var controller = this.get('controllers.itemFunction');
        controller.unLike(this.get('article').get('id'));
    }
});
