
HubStar.ArticleController = Ember.Controller.extend({
    content: [],
    image_no: 1,
    selectedPhoto: null,
    needs: ['application', 'addCollection', 'contact'],
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
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
    },
    addRelatedData: function(mega) {
        //console.log("aaaaaaaaaaaaaa");
        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");
        var isProfileIDExist = this.isParamExist(owner_profile_id);
        var isCollectionIDExist = this.isParamExist(collection_id);
        var that = this;
        if (isProfileIDExist && isCollectionIDExist) {
            var data = HubStar.Mega.find({RequireType: "articleRelatedImage", "article_id": collection_id, "owner_id": owner_profile_id});
            data.addObserver('isLoaded', function() {
                if (data.get('isLoaded')) {          
                var length=    data.get("content").get("length");
                    for (var i = 0; i <length; i++) {
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

        var selectid = this.get('selectedPhoto').id;
        contactController.setSelectedMega(selectid);
        this.set('contact', !this.get('contact'));
    },
    closeContact: function() {
        this.set('contact', false);
    }
    , getTest: function() {

        return "test";

    }
});
