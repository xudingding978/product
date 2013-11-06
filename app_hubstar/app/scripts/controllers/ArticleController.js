
HubStar.ArticleController = Ember.Controller.extend({
    content: [],
    image_no: 1,
    selectedPhoto: null,         
    captionTitle: "",
    readCaption: true,
    caption: '',
    checkLoginStatus:false,
    needs: ['application', 'addCollection', 'contact', 'applicationFeedback', 'checkingLoginStatus'],
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
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
        this.set('captionTitle', this.get('selectedPhoto').photo_title);
        this.set('caption', this.get('selectedPhoto').photo_caption);
        this.set('readCaption', false);
        this.setCaption();
    },
    nextImage: function() {
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
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
        this.set('captionTitle', this.get('selectedPhoto').photo_title);
        this.set('caption', this.get('selectedPhoto').photo_caption);
        this.set('readCaption', false);
        this.setCaption();
    },
    selectImage: function(e) {
        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));

        this.selectedImage(e);
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
        this.set('megaResouce', megaResouce);
        this.addRelatedData(megaObject);
        this.getCommentsById(megaObject.id);
    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {
            var comments = this.get('megaResouce').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
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
                            //console.log(temp.data.photo.objectAt(0));
                            that.get("content").pushObject(temp.data.photo.objectAt(0));                                  //find the object which contain photos and push it into model
                            //that.set('selectedPhoto', temp.data.photo.objectAt(0));
                        }
//                        else if (temp.record._data.article !== undefined) {                                                      // there is no hasMany in this object
//                            console.log("record._data");
//                            that.get("content").pushObject(temp.record._data.hasMany.photo.objectAt(0));
//                            that.set('selectedPhoto', temp.record._data.hasMany.photo.objectAt(0));
//                        }
                    }
                    that.set('selectedPhoto', that.get('content').objectAt(0));                                                  //set selectedPhoto to the first photo

                    that.set('captionTitle', that.get('selectedPhoto').photo_title);
                    that.set('caption', that.get('selectedPhoto').photo_caption);
                }
            });
        }
    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('thisComments', comments);
    },
    isParamExist: function(param)
    {
        var result = (param !== null && param !== undefined);
        return result;
    },
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        window.history.back();
    },
    switchCollection: function() {

        var addCollectionController = this.get('controllers.addCollection');
        var selectid = this.get('articleResouce').id;
        addCollectionController.setImageID(selectid);
        var tempUrl = this.get('selectedPhoto').photo_image_thumbnail_url;
        addCollectionController.setThumbnailUrl(tempUrl);
        addCollectionController.setRelatedController('article');
        addCollectionController.setUser();
        this.set('collectable', !this.get('collectable'));
    },
    editingContactForm: function() {
        var contactController = this.get('controllers.contact');
        this.get("controllers.contact").set("firstStepOfContactEmail",false);      
        this.get("controllers.contact").set('secondStepOfContactEmail', false);
        var selectid = this.get('selectedPhoto').id;
        contactController.setSelectedMega(selectid);
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.set('contact', !this.get('contact'));
        }
    },
    closeContact: function() {
        this.set('contact', false);
    },
    setCaption: function()
    {
        if (this.get("readCaption"))
        {
            $('#caption_action').animate({
                left: -320
            }, 800);

            this.set("readCaption", false);
        }
        else
        {
            $('#caption_action').animate({
                left: 0
            }, 800);
            this.set("readCaption", true);
        }
    },
    getTest: function() {

        return "test";

    },
    dropdownPhotoSetting: function() {
        $('#dropdown_id_').toggleClass('hideClass');
    },
    fbShare: function() {
        var that = this;
        var currntUrl = 'http://beta.trendsideas.com/#/articles/' + this.get('selectedPhoto').id;
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
            picture: this.get('selectedPhoto').photo_image_thumbnail_url,
            name: this.get('articleResouce').get("article_headline"),
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessfully.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        var caption = '';
        if (this.get('articleResouce').get("article_body") !== null)
        {
            caption = this.get('articleResouce').get("article_body");
        }
        else
        {
            caption = '';
        }


//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
        $("meta[property='og\\:title']").attr("content", this.get('articleResouce').get("article_headline"));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').photo_image_thumbnail_url);


        var currntUrl = 'http://beta.trendsideas.com/#/articles/' + this.get('selectedPhoto').id;
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
        var currntUrl = 'http://beta.trendsideas.com/#/articles/' + this.get('selectedPhoto').id;
        var url = 'https://twitter.com/share?text=' + this.get('articleResouce').get("article_headline") + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {
         console.log(this.get('selectedPhoto'));
        var currntUrl = 'http://beta.trendsideas.com/#/articles/' + this.get('selectedPhoto').id;
        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').photo_image_original_url) +
                '&description=' + encodeURIComponent(this.get('articleResouce').get("article_headline"));
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});
