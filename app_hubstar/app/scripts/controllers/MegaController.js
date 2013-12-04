/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MegaController = Ember.ArrayController.extend({
    content: [],
    clickOrRoute: false,
    megaResouce: null,
    temp: null,
    image_no: 1,
    from: null,
    selectedPhoto: null,
    isSelected: false,
    needs: ['application', 'collection', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'checkingLoginStatus', 'masonryCollectionItems', 'editComment'],
    currentUser: null,
    currentUserProfile: null,
    photo_album_id: null,
    photo_thumb_id: null,
    is_authentic_user: false,
    selectPhoto: false,
    parentControler: null,
    accessFromProfile: false,
    is_article_video: true,
    sharePhotoUrl: '',
    type: null,
    selectType: null,
    loadingTime: false,
    sharePhotoName: '',
    makeSureDelete: false,
    willDelete: false,
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
    setBack: function()
    {

        var address = document.URL;
        var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
        var id = address.split("#")[1].split("/")[2];
        var collection_id = address.split("#")[1].split("/")[4];
        var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
        var user_photo_id = address.split("#")[1].split("/")[8];
        if (type === "users")
        {
            var user = HubStar.User.find(id);
            if (user_photo_id !== undefined || colectionType === "article" || colectionType === "photo") //type:article means it 
            {
                for (var i = 0; i < user.get('collections').get("length"); i++) {
                    var data = user.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }

                this.transitionTo("collection", data); //user
            }
            else
            {
                window.history.back();
            }
        }
        else if (type === "photos")
        {

            this.closeWindow();
        }
        else
        {

            window.history.back();
        }
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
        this.set("selectPhoto", true);
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        if (this.get("controllers.masonryCollectionItems").get("type") === "user")
        {
            this.transitionTo("userPhoto", this.get("megaResouce"));
        }
        else if (this.get("selectType") === "profile")
        {
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];


            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }

            this.transitionTo("profileCollection", data);
            this.transitionTo("profilePhoto", this.get("megaResouce"));
        }
        else
        {
            this.transitionTo("photo", this.get("megaResouce"));
        }
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
        this.set("selectPhoto", true);
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        if (this.get("controllers.masonryCollectionItems").get("type") === "user")
        {
            this.transitionTo("userPhoto", this.get("megaResouce"));
        }
        else if (this.get("selectType") === "profile")
        {
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];


            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
            this.transitionTo("profileCollection", data);
            this.transitionTo("profilePhoto", this.get("megaResouce"));
        }
        else
        {
            this.transitionTo("photo", this.get("megaResouce"));
        }
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);

        this.selectedImage(this.get('selectedPhoto').id);

    },
    getInitData: function(megaObject) {

        if (megaObject.get("isLoaded")) {
            this.set("is_article_video", true);

            if (megaObject.get("type") === 'article')
            {

                var photoUrl = megaObject.get("article").objectAt(0).get("article_image_url");
                var photoObj = megaObject.set('photo_image_original_url', photoUrl);
                photoObj.set("photo_title", megaObject.get("article").objectAt(0).get("article_headline"));
                photoObj.set("photo_caption", megaObject.get("article").objectAt(0).get("article_body"));
                this.set("is_article_video", false);
                photoObj.set("photo_image_thumbnail_url", photoUrl);
            }
            else if (megaObject.get("type") === 'video')
            {

                var photoUrl = megaObject.get("videoes").objectAt(0).get("videoImg");
                var photoObj = megaObject.set('photo_image_original_url', photoUrl);

                photoObj.set("photo_title", megaObject.get("videoes").objectAt(0).get("videoTitle"));
                photoObj.set("photo_caption", megaObject.get("videoes").objectAt(0).get("videoDesc"));
                this.set("is_article_video", false);
                photoObj.set("photo_image_thumbnail_url", photoUrl);
            }
            else
            {

                var photoObj = megaObject.get('photo').objectAt(0);
                this.set("currentUser", HubStar.User.find(localStorage.loginStatus));


            }
            if (this.get("selectPhoto") === false)   //selectPhoto is user to control left or right operation
            {

                this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
                this.set("content", []);
//                this.set('image_no', 1);
                this.set("selectedPhoto", photoObj);
                this.get("content").pushObject(photoObj);
                var megaResouce = HubStar.Mega.find(megaObject.id);
                this.set('megaResouce', megaResouce);
                this.set("photo_album_id", "album_" + megaObject.id);
                this.set("photo_thumb_id", "thumb_" + megaObject.id);
                if (megaObject.get("type") === 'article' || megaObject.get("type") === 'video')
                {
                    if (this.get("controllers.masonryCollectionItems").get("type") === "user")
                    {

                        this.addRelatedCollectionItemData(megaObject);
                    }
                    else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
                    {

                        this.addProfileRelatedData(megaObject);
                    }

                }
                else
                {
                    if (this.get("controllers.masonryCollectionItems").get("type") === "user") //it is for user's collection
                    {

                        this.addRelatedCollectionItemData(megaObject);
                    }
                    else if (this.get("selectType") === "profile")
                    {

                        this.addProfileRelatedData(megaObject);
                    }
                    else
                    {

                        this.addRelatedData(megaObject);  //it is for profile's collection
                    }
                    this.checkAuthenticUser();
                    this.getCommentsById(megaObject.id);
                }
            }
        }

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
    addProfileRelatedData: function(mega)
    {
        var a = document.URL;
        var collection_id = a.split("#")[1].split("/")[4];


        if (this.get("clickOrRoute") === false) //it  accesses the collection photo by click
        {
            var photoContent = "";
            photoContent = this.get("controllers.masonryCollectionItems").get("content");

            var isCollectionIDExist = this.isParamExist(collection_id);

            if ((isCollectionIDExist || mega.get("type") === "video")) {

                for (var i = 0; i < photoContent.length; i++) {

                    if (photoContent.objectAt(i).get("type") === "photo")
                    {
                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {

                            this.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "article")
                    {

                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("article").objectAt(0).get("article_image_url");
                            photoContent.objectAt(i).set("photo_title", photoContent.objectAt(i).get("article").objectAt(0).get("article_headline"));
                            photoContent.objectAt(i).set("photo_caption", photoContent.objectAt(i).get("article").objectAt(0).get("article_body"));
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);

                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "video")
                    {


                        var id = photoContent.objectAt(i).get("id");
                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoImg");
                            var object_title = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoTitle");
                            var photo_caption = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoDesc");
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);
                            photoContent.objectAt(i).set("photo_title", object_title);
                            photoContent.objectAt(i).set("photo_caption", photo_caption);
                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                }
            }
        }
        else if (this.get("clickOrRoute") === true) // it  assesses the collection photo from route
        {
            var photoContent = new Array();
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];
            var profile = HubStar.Profile.find(owner_id);
            var id = "";
            for (var j = 0; j < profile.get('collections').get('length'); j++) {
                if (profile.get('collections').objectAt(j).get('id') === collection_id)
                {
                    id = profile.get('collections').objectAt(j).get('optional');
                }
            }


            var results = HubStar.Mega.find({RquireType: "collection", "collection_id": collection_id, "owner_profile_id": id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    for (var i = 0; i < this.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        if (tempmega.get('profile').get('length') === 0 && tempmega.get('user').get('length') === 0 && (collection_id === tempmega.get('collection_id')))
                        {
                            if (that.get("content").objectAt(0).get("id") !== tempmega.get("id")) {
                                that.get("content").pushObject(tempmega.get('photo').objectAt(0));
                            }
                        }
                    }





                }
            });
            var pics = HubStar.Mega.find({RquireType: "profileCollection", user_id: id, collection_id: collection_id});
            var that = this;
            pics.addObserver('isLoaded', function() {
                if (pics.get('isLoaded')) {

                    for (var i = 0; i < pics.get("length"); i++) {

                        if (pics.objectAt(i).get("type") === "photo")
                        {
                            if (that.get("content").objectAt(0).get("id") !== pics.objectAt(i).get("id")) {
                                var idd = pics.objectAt(i).get("id");

                                that.get("content").pushObject(pics.objectAt(i).get('photo').objectAt(0));
                            }

                        }
                        else if (pics.objectAt(i).get("type") === "article")
                        {
                            if (that.get("content").objectAt(0).get("id") !== pics.objectAt(i).get("id")) {
                                var idd = pics.objectAt(i).get("id");

                                var photoUrl = pics.objectAt(i).get("article").objectAt(0).get("article_image_url");
                                var article = pics.objectAt(i);
                                article.set("photo_image_original_url", photoUrl);
                                article.set("photo_image_thumbnail_url", photoUrl);
                                that.get("content").pushObject(article);
                            }

                        }
                        else if (pics.objectAt(i).get("type") === "video")
                        {

                            if (that.get("content").objectAt(0).get("id") !== pics.objectAt(i).get("id")) {
                                var idd = pics.objectAt(i).get("id");
                                var photoUrl = pics.objectAt(i).get("videoes").objectAt(0).get("videoImg");





                                var article = pics.objectAt(i);
                                article.set("photo_image_original_url", photoUrl);
                                article.set("photo_image_thumbnail_url", photoUrl);
                                that.get("content").pushObject(article);
                            }
                        }
                    }

                }
            });



        }
        this.set("clickOrRoute", false);
    },
    addRelatedCollectionItemData: function(mega)
    {
        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");

        if (this.get("clickOrRoute") === false) //it  accesses the collection photo by click
        {
            var photoContent = "";
            photoContent = this.get("controllers.masonryCollectionItems").get("content");

            var isProfileIDExist = this.isParamExist(owner_profile_id);
            var isCollectionIDExist = this.isParamExist(collection_id);

            if (isProfileIDExist && (isCollectionIDExist || mega.get("type") === "video")) {

                for (var i = 0; i < photoContent.length; i++) {

                    if (photoContent.objectAt(i).get("type") === "photo")
                    {
                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {

                            this.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "article")
                    {

                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("article").objectAt(0).get("article_image_url");
                            photoContent.objectAt(i).set("photo_title", photoContent.objectAt(i).get("article").objectAt(0).get("article_headline"));
                            photoContent.objectAt(i).set("photo_caption", photoContent.objectAt(i).get("article").objectAt(0).get("article_body"));
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);

                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "video")
                    {


                        var id = photoContent.objectAt(i).get("id");
                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoImg");
                            var object_title = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoTitle");
                            var photo_caption = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoDesc");
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);
                            photoContent.objectAt(i).set("photo_title", object_title);
                            photoContent.objectAt(i).set("photo_caption", photo_caption);
                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                }
            }
        }
        else if (this.get("clickOrRoute") === true) // it  assesses the collection photo from route
        {
            var photoContent = new Array();
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {

                    for (var i = 0; i < this.get("content").length; i++) {
                        var tempObject = this.get("content").objectAt(i);
                        photoContent.pushObject(tempObject);
                    }
                    for (var i = 0; i < photoContent.length; i++) {
                        if (photoContent.objectAt(i).record.get("type") === "photo")
                        {
                            var id = photoContent.objectAt(i).record.get("id");

                            if (that.get("content").objectAt(0).get('id') !== id)
                            {
                                that.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));

                            }
                        }
                        else if (photoContent.objectAt(i).record.get("type") === "article")
                        {

                            var id = photoContent.objectAt(i).record.get("id");
                            if (that.get("content").objectAt(0).get('id') !== id)
                            {
                                var photoUrl = photoContent.objectAt(i).record.get("article").objectAt(0).get("article_image_url");
                                var article = HubStar.Mega.find(id);
                                if (that.get("content").objectAt(0).get('id') !== id)
                                {
                                    article.set("photo_image_original_url", photoUrl);
                                    article.set("photo_image_thumbnail_url", photoUrl);
                                    that.get("content").pushObject(article);
                                }
                            }
                        }
                        else if (photoContent.objectAt(i).record.get("type") === "video")
                        {
                            var id = photoContent.objectAt(i).record.get("id");
                            if (that.get("content").objectAt(0).get('id') !== id)
                            {
                                var photoUrl = photoContent.objectAt(i).record.get("videoes").objectAt(0).get("videoImg");

                                var article = HubStar.Mega.find(id);
                                article.set("photo_image_original_url", photoUrl);
                                article.set("photo_image_thumbnail_url", photoUrl);
                                that.get("content").pushObject(article);
                            }
                        }
                    }

                }
            });

        }
        this.set("clickOrRoute", false);
    },
    selectImage: function(e) {

        this.set('megaResouce', HubStar.Mega.find(e));


        if (this.get('megaResouce').get("type") === "photo")
        {
            this.set('selectedPhoto', this.get('megaResouce').get('photo').objectAt(0));
            if (this.get("controllers.masonryCollectionItems").get("type") === "user")
            {
                this.transitionTo("userPhoto", this.get("megaResouce").get('photo').objectAt(0));
            }
            else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {
                var address = document.URL;
                var owner_id = address.split("#")[1].split("/")[2];


                var collection_id = address.split("#")[1].split("/")[4];
                var profile = HubStar.Profile.find(owner_id);
                for (var i = 0; i < profile.get('collections').get("length"); i++) {
                    var data = profile.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }

                this.transitionTo("profileCollection", data);

                this.transitionTo("profilePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
            else
            {
                this.transitionTo("photo", this.get("megaResouce"));
            }
        }
        else if (this.get('megaResouce').get("type") === "article") //different types of photo in mega
        {
            this.set('selectedPhoto', this.get('megaResouce'));
            if (this.get("controllers.masonryCollectionItems").get("type") === "user")
            {
                this.transitionTo("userPhoto", this.get("megaResouce"));
            }
            else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profilePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
        }
        else if (this.get('megaResouce').get("type") === "video")
        {
            this.set('selectedPhoto', this.get('megaResouce'));
            if (this.get("controllers.masonryCollectionItems").get("type") === "user")
            {
                this.transitionTo("userPhoto", this.get("megaResouce"));
            }
            else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profilePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
        }
        this.set("selectedPhoto", this.get('selectedPhoto'));

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
        this.selectedImage(e);
    },
    selectedImage: function(id) {
        var selectedImage_id = "#" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
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
        var address = document.URL;
        if (this.get('controllers.masonryCollectionItems').get("type") === "profile")
        {
            if (this.get("from") !== "profile") //from : profile means  close from the profile collection's photo
            {
                this.transitionTo("indexIndex"); //search page
            }
            else
            {
                //   var collection_id = address.split("#")[1].split("/")[4];


                var address = document.URL;
                var collection_id = address.split("#")[1].split("/")[4];
                var owner_id = address.split("#")[1].split("/")[2];
                var profile = HubStar.Profile.find(owner_id);
                var data = null;
                for (var i = 0; i < profile.get('collections').get("length"); i++) {
                    data = profile.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }

                this.set("selectPhoto", false);
                this.transitionTo("profile", profile); // transition to profile
                this.transitionTo("profileCollection", data);
            }
        }
        else
        {
            var collection_id = address.split("#")[1].split("/")[4];
            var id = address.split("#")[1].split("/")[2]; //user id
            var user = HubStar.User.find(id);
            var data = null;

            for (var i = 0; i < user.get('collections').get("length"); i++) {
                data = user.get('collections').objectAt(i);
                if (data.id === collection_id) {

                    break;
                }
            }
            this.set("selectPhoto", false);
            this.transitionTo("collection", data); //user
        }

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
//            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
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
        var message = "Do you want to delete this comment?";
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
        var link_text = this.get('selectedPhoto.link_text');
        var link_url = this.get('selectedPhoto.link_url');
        photoObject.set('photo_title', photo_title);
        photoObject.set('photo_caption', photo_caption);
        photoObject.set('link_text', link_text);
        photoObject.set('link_url', link_url);
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
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        var caption = '';

        if (this.get('selectedPhoto').get('photo_caption') !== null)
        {
            caption = this.get('selectedPhoto').get('photo_caption');
        }
        else
        {
            caption = '';
        }
        var descript = this.get('selectedPhoto').get('photo_title');
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }



        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.get('selectedPhoto').get('photo_image_thumbnail_url'),
            name: descript,
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
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        var descript = this.get('selectedPhoto').get('photo_title');
        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }
        $("meta[property='og\\:title']").attr("content", descript);
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));

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
        var descript = this.get('selectedPhoto').get('photo_title');
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }
        var url = 'https://twitter.com/share?text=' + descript + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {
        this.dropdownPhotoSetting();

        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');

        var descript = this.get('selectedPhoto').get('photo_title');

        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }

        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
                '&description=' + encodeURIComponent(descript);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});
