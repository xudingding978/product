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
    needs: ['application', 'addCollection', 'contact', 'applicationFeedback', 'checkingLoginStatus', 'editComment', 'itemFunction', 'masonryCollectionItems'],
    init: function() {

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
    previesImage: function() {
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

        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
        this.set('captionTitle', this.get('selectedPhoto').photo_title);
        this.set('caption', this.get('selectedPhoto').photo_caption);

        this.captionDisplay();
    },
    nextImage: function() {
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

        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
        this.set('captionTitle', this.get('selectedPhoto').photo_title);
        this.set('caption', this.get('selectedPhoto').photo_caption);
        this.captionDisplay();
    },
    captionDisplay: function()
    {
        if (this.get("caption") === null || this.get("caption") === "")
        {
            $('#caption_action').attr('style', 'display:none');
        }
        else
        {
            $('#caption_action').attr('style', 'display:block');
        }
    },
    selectImage: function(e) { // it is click the photo
        this.set("isShowPhotoUrl", true);
        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));

        this.set('captionTitle', this.get('selectedPhoto').get("photo_title"));
        this.set('caption', this.get('selectedPhoto').get("photo_caption"));

        var contents = this.get('content');
        var selectedIndex = 1;
        for (var index = 0; index <= contents.get('length') - 1; index++) {
            if (this.get('selectedPhoto').get("id") === contents.objectAt(index).id) {
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
        this.set("content", []);
        this.set("selectedPhoto", '');
        this.set('image_no', 1);
        var megaResouce = HubStar.Mega.find(megaObject.id);
        this.set('articleResouce', megaResouce.get('article').objectAt(0));
        this.set('article', megaResouce);
        this.set('articleID', megaObject.id);
        this.set('megaResouce', megaResouce);
        this.addRelatedData(megaObject);
        this.getCommentsById(megaObject.id);
        this.checkCreditExist(megaResouce.get('article').objectAt(0).get('credits'));
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
                    var length = data.get("content").get("length");
                    for (var i = 0; i < length; i++) {
                        var temp = data.get("content").objectAt(i);
                        if (temp.data.photo !== undefined) {
                            that.get("content").pushObject(temp.data.photo.objectAt(0));                                  //find the object which contain photos and push it into model
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
                                    that.transitionTo("searchDefaultArticlePhoto", that.get('content').objectAt(0));
                                } else
                                {
                                    that.transitionTo("searchIndexArticlePhoto", that.get('content').objectAt(0));
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
                    that.set('captionTitle', that.get('selectedPhoto').photo_title);

                    that.set('caption', that.get('selectedPhoto').photo_caption);
                    that.captionDisplay();
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
    dropdownPhotoSetting: function() {
        $('#dropdown_id_').toggleClass('hideClass');
    },
    fbShare: function() {
        this.dropdownPhotoSetting();
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
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        this.dropdownPhotoSetting();
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

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function() {
        this.dropdownPhotoSetting();

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var url = 'https://twitter.com/share?text=' + this.get('articleResouce').get("article_headline") + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {

        this.dropdownPhotoSetting();

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').photo_image_original_url) +
                '&description=' + encodeURIComponent(this.get('articleResouce').get("article_headline"));
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
