/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MegaController = Ember.ArrayController.extend({
    content: [],
    megaResouce: null,
    temp: null,
    image_no: 1,
    selectedPhoto: null,
    isSelected: false,
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'checkingLoginStatus', 'editComment'],
    currentUser: null,
    currentUserProfile: null,
    photo_album_id: null,
    photo_thumb_id: null,
    is_authentic_user: false,
    sharePhotoUrl: '',
    sharePhotoName: '',
    init: function()
    {

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
    getInitData: function(megaObject) {

        var photoObj = megaObject.get('photo').objectAt(0);
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("content", []);
        this.set('image_no', 1);
        this.set("selectedPhoto", photoObj);
        this.get("content").pushObject(photoObj);
        var megaResouce = HubStar.Mega.find(megaObject.id);
        this.set('megaResouce', megaResouce);
        this.set("photo_album_id", "album_" + megaObject.id);
        this.set("photo_thumb_id", "thumb_" + megaObject.id);
        this.addRelatedData(megaObject);
        this.checkAuthenticUser();
        this.getCommentsById(megaObject.id);
    },
    selectImage: function(e) {

        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));
        this.set("selectedPhoto", this.get('selectedPhoto'));
        this.selectedImage(e);
    },
    selectedImage: function(id) {
        var selectedImage_id = "#" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
    },
    addRelatedData: function(mega)
    {
        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");
        var isProfileIDExist = this.isParamExist(owner_profile_id);
        var isCollectionIDExist = this.isParamExist(collection_id);
        var that = this;
        if (isProfileIDExist && isCollectionIDExist) {
            var data = HubStar.Mega.find({RequireType: "collection", "collection_id": collection_id, "owner_profile_id": owner_profile_id});
            data.addObserver('isLoaded', function() {
                if (data.get('isLoaded')) {
                    for (var i = 0; i < this.get("content").length; i++) {
                        var id = this.get("content").objectAt(i).id;
                        if (HubStar.Mega.find(id).get('photo').get('length') === 1 && mega.get('id') !== id)
                        {
                            if (HubStar.Mega.find(id).get('collection_id') === collection_id) {
                                // that.setPhotoStatus(HubStar.Mega.find(id).get("comments"));
                                that.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                            }
                        }
                    }
                }
            });
        }
    },
    isParamExist: function(param)
    {
        var result = (param !== null && param !== undefined);
        return result;
    },
    dropdownPhotoSetting: function() {
        this.set('sharePhotoUrl', this.get('selectedPhoto').get('photo_image_thumbnail_url'));
        this.set('sharePhotoName', this.get('selectedPhoto').get('photo_title'));
        $('#dropdown_id_').toggleClass('hideClass');
    },
    switchCollection: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('selectedPhoto').id;
            addCollectionController.setImageID(selectid);
            var tempUrl = this.get('selectedPhoto').get('photo_image_thumbnail_url');
            addCollectionController.setThumbnailUrl(tempUrl);
            addCollectionController.setUser();
            addCollectionController.setRelatedController('photo');
            this.set('collectable', !this.get('collectable'));
        }
    },
    keydown: function(e) {
        var currKey = 0, e = e || event;


        currKey = e.keyCode || e.which || e.charCode;    //支持IE、FF 
        if (currKey === 27) {
            window.history.back();

        }
    },
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        window.history.back();
    },
    editingContactForm: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var contactController = this.get('controllers.contact');
            var selectid = this.get('selectedPhoto').id;
            this.get("controllers.contact").set('secondStepOfContactEmail', false);
            this.get("controllers.contact").set('firstStepOfContactEmail', false);
            contactController.setSelectedMega(selectid);
            contactController.selectionCheckBox();

            this.set('contact', !this.get('contact'));
        }

    }
    ,
    closeContact: function() {
        this.set('contact', false);
    },
    EditDelete: function(id, time_stamp) {
    },
    EditDeleteLeave: function(id, time_stamp) {
       
    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {
            var comments = this.get('megaResouce').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var message_id = createMessageid() + commenter_id;
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
    },
    removeComment: function(object)
    {
        var id = this.get('megaResouce').get("id");
        var message_id = object.get("message_id");
        var delInfo = [id, message_id];

        delInfo = JSON.stringify(delInfo);
        var that = this;
        this.get('megaResouce').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeletePhotoComment', delInfo, 'POST', function(params) {
        });
    },
    updateComment: function(object) {
        this.get("controllers.editComment").setRelatedController("mega");
        var comments = this.get('megaResouce').get('comments');
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
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("commenter_id") === localStorage.loginStatus)
            {
                comments.objectAt(i).set("isUserSelf", true);
            }
        }
        this.set('thisComments', comments);
    },
    dateTImeStamp: function(date) {
        if (date === "" || date === null || date === undefined) {
            return "";
        } else {
            var matches = date.match('^[0-9]+$');
            if (matches !== null) {
                return moment.unix(date).valueOf();
            } else {
                return moment(date).valueOf();
            }
        }
    },
    editingPhotoMegaData: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    yes: function(photoObject) {
        var photo_title = this.get('selectedPhoto.photo_title');
        var photo_caption = this.get('selectedPhoto.photo_caption');
        photoObject.set('photo_title', photo_title);
        photoObject.set('photo_caption', photo_caption);
        photoObject.store.save();
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    no: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });


    },
    // share to social facebook
    fbShare: function() {
        this.dropdownPhotoSetting();
        var that = this;
        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
        var caption = '';

        if (this.get('selectedPhoto').get('photo_caption') !== null)
        {
            caption = this.get('selectedPhoto').get('photo_caption');
        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.get('selectedPhoto').get('photo_image_thumbnail_url'),
            name: this.get('selectedPhoto').get('photo_title'),
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
        this.dropdownPhotoSetting();
        var caption = '';
        if (this.get('selectedPhoto').get('photo_caption') !== null)
        {
            caption = this.get('selectedPhoto').get('photo_caption');
        }
        else
        {
            caption = '';
        }

        $("meta[property='og\\:title']").attr("content", this.get('selectedPhoto').get('photo_title'));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));


        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
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
        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
        var url = 'https://twitter.com/share?text=' + this.get('selectedPhoto').get('photo_title') + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {
        this.dropdownPhotoSetting();

        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');

        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
                '&description=' + encodeURIComponent(this.get('selectedPhoto').get('photo_title'));
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});
