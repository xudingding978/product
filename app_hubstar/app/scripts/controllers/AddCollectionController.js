
HubStar.AddCollectionController = Ember.ObjectController.extend({
    collections: [],
    //profileCollection: [],
    selectedDesc: "",
    selectedTitle: "Choose your Collection",
    //selectedCollection: "",
    selectionPop: false,
    needs: ["mega", "article", "collection", "applicationFeedback", "comment", "video"],
    newCollectionName: null,
    objectID: "",
    selectedPhotoThumbnailUrl: "",
    parentTController: "",
    commentObject: '',
    isComment: false,
    selectionProfile: false,
    profiles: [],
    //isProfile: false,
    selectedProfile: "",
    userName: '',
    chosenProfile: '',
    isSaveTopProfile: "false",
    isReadProfile:false,
    init: function()
    {
        HubStar.set("isProfile", false);
    },
    setUser: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);

        this.set("collections", user.get("collections"));
        if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
            this.setDesc("");
            this.setTitle("Choose your Collection");
            this.setProfile("your profile");
            this.set('selectionPop', false);
        }

        if (user.get("profiles") === undefined || user.get("profiles") === null || user.get("profiles").get("length") === 0)
        {
            this.set("isSaveTopProfile", false);
        }
        else {
            this.set("isSaveTopProfile", true);
        }

    },
    setImageID: function(id) {
        this.set("objectID", id);
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setTitle: function(title) {
        if (HubStar.get("chooseCollection") !== null && HubStar.get("chooseCollection") !== "" && HubStar.get("chooseCollection") !== undefined)
        {
            this.set("selectedTitle", HubStar.get("chooseCollection"));
        }
        else {
            this.set("selectedTitle", title);
        }
    },
    setProfile: function(title) {
        if (HubStar.get("selectedID") !== null && HubStar.get("selectedID") !== "" && HubStar.get("selectedID") !== undefined)
        {
            this.set("selectedProfile", HubStar.get('selectedProfile'));
        }
        else {
            this.set("selectedProfile", title);
        }
    },
    setThumbnailUrl: function(photo_image_thumbnail_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
    },
    submit: function()
    {

        if (this.get("selectionPop") !== true && HubStar.get('selectedCollection') !== undefined && HubStar.get('selectedCollection') !== null) {
            var content;
            var that = this;
            var message;
            var data;
            var defaulturl="https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png";
            var ob_id = this.get("objectID");
            if (HubStar.get("isProfile") === false) {
                var collectionController = this.get('controllers.collection');
                var collection = collectionController.getUpdateCollection(HubStar.get('selectedCollection'));
                content = collection.get("collection_ids");
                var flag = this.addCollection(collection, content);
                if (flag === true) {
                    this.set("commentObject", HubStar.Mega.find(ob_id));
                    this.addComment();
                    collection.set('optional', localStorage.loginStatus);
                    collection.set('type', 'user');
                    if(collection.get("cover") === defaulturl){
                        collection.set('cover',this.get("commentObject").get("object_image_url"));
                    }
                    collection.store.save();
                    var tempComment = [ob_id];
                    requiredBackEnd('megas', 'SetSaveCount', tempComment, 'POST', function(params) {
                        that.get("commentObject").set("save_count", params);
                        that.get("commentObject").store.save();
                    });
                    this.sendFeedBack();
                }
                else
                {
                    message = "This is already in the collection";
                    this.get('controllers.applicationFeedback').statusObserver(null, message);
                }
                this.exit();
            }
            else
            {
                content = HubStar.get('selectedCollection').collection_ids;
                if (content === null || content === undefined || content === "") {                 
                    HubStar.get('selectedCollection').collection_ids = ob_id;
                    
                    this.set("commentObject", HubStar.Mega.find(ob_id));
                    if(HubStar.get('selectedCollection').cover === defaulturl){
                        HubStar.get('selectedCollection').cover = this.get("commentObject").get("object_image_url");
                    }
                    data = JSON.stringify(HubStar.get('selectedCollection'));
                    requiredBackEnd('collections', 'saveCollection', data, 'POST', function(params) {
                        //HubStar.get('selectedCollection').collection_ids = params;                       
                        var tempComment = [ob_id];
                        //that.commitCollection();
                        requiredBackEnd('megas', 'SetSaveCount', tempComment, 'POST', function(params) {
                            that.get("commentObject").set("save_count", params);
                            that.get("commentObject").store.save();
                        });
                        that.sendFeedBack();
                        that.exit();
                    });
                    this.set("chosenProfile", "");

                    this.addComment();
                }

                else {
                    if (content.indexOf(this.get("objectID")) !== -1)
                    {
                        message = "This is already in the collection";
                        this.get('controllers.applicationFeedback').statusObserver(null, message);
                    }
                    else {
                        var ids = content;
                        ids = ids + "," + this.get("objectID");
                        HubStar.get('selectedCollection').collection_ids = ids;

                        data = JSON.stringify(HubStar.get('selectedCollection'));
                        this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
                        requiredBackEnd('collections', 'saveCollection', data, 'POST', function(params) {
                            HubStar.get('selectedCollection').collection_ids = params;
                            var tempComment = [that.get("objectID")];
                            //that.commitCollection();
                            requiredBackEnd('megas', 'SetSaveCount', tempComment, 'POST', function(params) {
                                that.get("commentObject").set("save_count", params);
                                that.get("commentObject").store.save();
                            });
                            that.sendFeedBack();
                            that.exit();
                        });
                        this.set("chosenProfile", "");

                        this.addComment();
                    }
                }
            }
            $("#body_id").css("overflow", "auto");
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please choose a collection.", "warnning");
        }
        
        

    },
    commitCollection: function() {
        var profile = HubStar.Profile.find(HubStar.get('selectedCollection').optional);
        var collection;
        profile.then(function() {
            for (var i = 0; i < profile.get("collections").get("length"); i++)
            {
                if (HubStar.get('selectedCollection').id === profile.get("collections").objectAt(i).get("id")) {
                    collection = profile.get("collections").objectAt(i);
                    break;
                }
            }
            collection.set("collection_ids", HubStar.get('selectedCollection').collection_ids);
            
            collection.store.save();
        });
    },
    sendFeedBack: function() {
       var itemType=HubStar.Mega.find(this.get("objectID")).get("type");
        if (itemType === 'article') {
             var message = "Great! Article saved to " + this.get('selectedTitle') + " collection.";
        } else if (itemType === 'photo') {
             message = "Great! Image saved to " + this.get('selectedTitle') + " collection.";
        }else if (itemType === 'video') {
             message = "Great! Video saved to " + this.get('selectedTitle') + " collection.";
        }
        this.get('controllers.applicationFeedback').statusObserver(null, message);
    },
    addComment: function() {

        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var commentContent = this.get('selectedDesc');
        if (commentContent) {
            var comments = this.get("commentObject").get('comments');
            var commenter_profile_pic_url = currentUser.get('photo_url_large');
            var commenter_id = currentUser.get('id');
            var name = currentUser.get('display_name');
            var date = new Date();
            var message_id = createMessageid() + commenter_id;

            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "message_id": message_id, "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get("commentObject").get('type') + '/' + this.get("commentObject").get('id')});    
            comments.insertAt(0, tempComment);
            comments.store.save();
            commentContent = '';
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_user_container').masonry();
                $('#masonry_photo_collection_container').masonry();
                $('#masonry_container').masonry();
            }, 10);
        }
    },
    setSelectedCollection: function(id) {
        var selectedCollection = null;
        var thisCollection;
        var i = 0;        
        if (HubStar.get("isProfile") === false) {
            for ( i = 0; i < this.get("collections").get("length"); i++) {
                thisCollection = this.get("collections").objectAt(i);
                if (id === thisCollection.get("id")) {
                    selectedCollection = thisCollection;
                }
            }
            HubStar.set('selectedCollection', selectedCollection);
        }
        else
        {
            for ( i = 0; i < HubStar.get("profileCollection").get("length"); i++) {
                thisCollection = HubStar.get("profileCollection").objectAt(i);
                if (id === thisCollection.id) {
                    selectedCollection = thisCollection;
                }
            }
            HubStar.set('selectedCollection', selectedCollection);
        }
    },
    chooseProfile: function(title, id) {
        this.set('selectedProfile', title);
        for (var i = 0; i < this.get("profiles").get("length"); i++)
        {
            if (this.get("profiles").objectAt(i).profile_id === id)
            {
                if (id === localStorage.loginStatus && this.get("profiles").objectAt(i).type === "user")
                {
                    HubStar.set("isProfile", false);
                }
                else
                {
                    HubStar.set("profileCollection", this.get("profiles").objectAt(i).collection);
                    this.set("chosenProfile", id);
                    HubStar.set("isProfile", true);
                }
                HubStar.set('selectedCollection', null);
                HubStar.set('chooseCollection', "Choose your Collection");
                this.setTitle("Choose your Collection");
                HubStar.set('selectedID', id);
                HubStar.set('selectedProfile', title);
            }
        }
        this.set('selectionProfile', !this.get('selectionProfile'));
    },
    profileCanel: function() {
        this.set('selectionProfile', false);
    },
    addCollection: function(collection, content)
    {
        if (content === null || content === undefined || content === "") {
            collection.set("collection_ids", this.get("objectID"));
            return true;
        }

        else if (content.indexOf(this.get("objectID")) !== -1)
        {
            return false;
        }
        else {
            var ids = collection.get("collection_ids");
            if (ids !== undefined || ids !== null)
            {
                ids = this.get("objectID") + "," + ids;
            }
            else
            {
                ids = this.get("objectID");
            }
            collection.set("collection_ids", ids);
            return true;
        }
    },
    exit: function() {
        this.set('selectionPop', false);
        this.set('selectionProfile', false);
        if (this.get('parentTController') === 'article')
        {
            this.get("controllers.article").switchCollection();
        }

        else if (this.get('parentTController') === 'itemFunction')
        {
            var id = this.get("objectID");
            //console.log(id);
            $('#addCollection_' + id).attr('style', 'display: none');
        }

        else if (this.get('parentTController') === 'video')
        {
            this.get("controllers.video").switchCollection();
        }
        else {
            this.get("controllers.mega").switchCollection();
        }
        $("#body_id").css("overflow", "auto");
    },
    addNewCollection: function()
    {

        var collectionController = this.get('controllers.collection');
        var collection;
        if (HubStar.get("isProfile") === false) {
             collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', this.get("collections"));
            if (collection !== null && collection !== "") {
                collection.set('type', 'user');
                collection.set('optional', localStorage.loginStatus);
                this.get("collections").insertAt(0, collection);
                this.get("collections").store.save();
                HubStar.set('selectedCollection', collection);
                this.chooseRecord(collection.get("title"), collection.get("id"));
            } else {
            }
        }
        else
        {
             collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', HubStar.get("profileCollection"));
             
            if (collection !== null && collection !== "") {
                collection.set('type', 'profile');
                collection.set('optional', HubStar.get("selectedID"));

                var newCollection = {};
                newCollection.collection_ids = collection.get("collection_ids");

                newCollection.cover = collection.get("cover");
                newCollection.desc = collection.get("desc");
                newCollection.id = collection.get("id");
                newCollection.optional = collection.get("optional");
                newCollection.title = collection.get("title");
                newCollection.type = collection.get("type");
                newCollection.created_at = collection.get("created_at");
                newCollection.parent_type = collection.get("parent_type");

                collection.store.save();
                HubStar.get("profileCollection").insertAt(0, newCollection);

                HubStar.set('selectedCollection', collection);
                this.chooseRecord(collection.get("title"), collection.get("id"));
                //$('#recordID').text(this.get('newCollectionName'));
            }

        }

        this.set('newCollectionName', null);
        //this.set('selectionPop', !this.get('selectionPop'));
    },
    collectionSwitch: function() {
        this.set('selectionPop', !this.get("selectionPop"));
        this.set('selectionProfile', false);
    },
    profileSwitch: function() {
        var data = [localStorage.loginStatus];
        var dataNew = [];
        var that = this;
        this.set('selectionPop', false);
        this.set("isReadProfile",true);
        requiredBackEnd('users', 'ReadCollection', data, 'POST', function(params) {
            dataNew.profile_id = localStorage.loginStatus;
            dataNew.profile_name = "your profile";
            dataNew.type = "user";
            params.insertAt(0, dataNew);
            that.set("profiles", params);
            that.set("isReadProfile",false);
            that.set('selectionProfile', !that.get('selectionProfile'));
        });
    },
    chooseRecord: function(title, id) {
        this.set('selectedTitle', title);
        this.setSelectedCollection(id);
        this.selectSelectedDesc();
        //$('#recordID').text(this.get('selectedTitle'));
        HubStar.set('chooseCollection', this.get('selectedTitle'));

        this.set('selectionPop', !this.get("selectionPop"));

    },
    selectSelectedDesc: function()
    {
        var desc = "";
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            var collection = this.get("collections").objectAt(i);
            if (collection.get("title") === this.get("selectedTitle"))
            {
//desc = collection.get("desc");
            }
        }
        this.set("selectedDesc", desc);
    },
    checkingValidInput: function(title) {

        if (title.indexOf(" ") !== -1) {
            title = title.split(' ').join('-');
        }
        return title;
    },
    checkInput: function(title) {
        var isInputValid = false;
        if (title !== null && title !== "")
        {
            isInputValid = this.isTitleNotExist(title);

        }
        else {
            isInputValid = false;
        }
        return isInputValid;
    },
    isTitleNotExist: function(title) {
        var isContainsTitle = true;


        for (var i = 0; i < this.get("collections").get("length"); i++)
        {


            var collection = this.get("collections").objectAt(i);
            if (collection.get("title") === title)
            {
                isContainsTitle = false;
            }
        }
        return isContainsTitle;
    }, setRelatedController: function(parentController)
    {

        this.set('parentTController', parentController);
    }
});
