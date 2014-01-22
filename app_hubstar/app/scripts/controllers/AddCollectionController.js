
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
    init: function()
    {
        HubStar.set("isProfile", false);
    },
    setUser: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);   
        console.log(user);
        this.set("collections", user.get("collections"));
        if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
            this.setDesc("");
            this.setTitle("Choose your Collection");
            this.setProfile("your profile");
            this.set('selectionPop', false);
        }
        if (user.get("profiles") === undefined || user.get("profiles") === null || user.get("profiles").get("length") === 0)
        {
            this.set("isSaveTopProfile",false);
        }
        else {          
            this.set("isSaveTopProfile",true);
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
            if (HubStar.get("isProfile") === false) {
                var collectionController = this.get('controllers.collection');
                var collection = collectionController.getUpdateCollection(HubStar.get('selectedCollection'));
                var content = collection.get("collection_ids");
                this.addCollection(collection, content);
                this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
                this.addComment();
                collection.set('optional', localStorage.loginStatus);
                collection.set('type', 'user');
                collection.store.save();
                this.sendFeedBack();
                this.exit();
            }
            else
            {
                var content = HubStar.get('selectedCollection').collection_ids;
                if (content === null || content === undefined || content === "") {
                    HubStar.get('selectedCollection').collection_ids = this.get("objectID");
                }
                else if (content.indexOf(this.get("objectID")) !== -1)
                {
                }
                else {
                    var ids = content;
                    ids = ids + "," + this.get("objectID");
                    HubStar.get('selectedCollection').collection_ids = ids;
                }
                var data = JSON.stringify(HubStar.get('selectedCollection'));
                var that = this;
                requiredBackEnd('collections', 'saveCollection', data, 'POST', function(params) {
                    that.sendFeedBack();
                    that.exit();
                });
                this.set("chosenProfile", "");
                this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
                this.addComment();

            }
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please choose a collection.", "warnning");
        }

    },
    sendFeedBack: function() {
        var message = "Saved to your " + this.get('selectedTitle') + " collection.";
        if (this.get('parentTController') === 'video') {
            //message = "Saved video successfully.";
        } else if (this.get('parentTController') === 'photo') {
            //message = "Saved photo successfully.";
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
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get("commentObject").get('type') + '/' + this.get("commentObject").get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            commentContent = '';
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
    },
    setSelectedCollection: function(id) {
        if (HubStar.get("isProfile") === false) {
            var selectedCollection = null;
            for (var i = 0; i < this.get("collections").get("length"); i++) {
                var thisCollection = this.get("collections").objectAt(i);
                if (id === thisCollection.get("id")) {
                    selectedCollection = thisCollection;
                }
            }
            HubStar.set('selectedCollection', selectedCollection);
        }
        else
        {
            var selectedCollection = null;
            for (var i = 0; i < HubStar.get("profileCollection").get("length"); i++) {
                var thisCollection = HubStar.get("profileCollection").objectAt(i);
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
        }

        else if (content.indexOf(this.get("objectID")) !== -1)
        {
        }
        else {
            var ids = collection.get("collection_ids");
            ids = ids + ", " + this.get("objectID");
            collection.set("collection_ids", ids);
        }
    },
    exit: function() {
        this.set('selectionPop', false);
        this.set('selectionProfile', false);
        //console.log(this.get("parentTController"));
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
    },
    addNewCollection: function()
    {

        var collectionController = this.get('controllers.collection');
        if (HubStar.get("isProfile") === false) {
            var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', this.get("collections"));
            if (collection !== null && collection !== "") {
                collection.set('type', 'user');
                collection.set('optional', localStorage.loginStatus);
                this.get("collections").insertAt(0, collection);
                this.get("collections").store.save();
                HubStar.set('selectedCollection', collection);
                this.chooseRecord(collection.get("title"), collection.get("id"));
                //$('#recordID').text(this.get('newCollectionName'));
            } else {
            }
        }
        else
        {
            var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', HubStar.get("profileCollection"));

            if (collection !== null && collection !== "") {
                collection.set('type', 'profile');
                collection.set('optional', this.get("chosenProfile"));

                var newCollection = new Object();
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
        var dataNew = new Array();
        var that = this;
        this.set('selectionPop', false);
        requiredBackEnd('users', 'ReadCollection', data, 'POST', function(params) {
            dataNew["profile_id"] = localStorage.loginStatus;
            dataNew["profile_name"] = "your profile";
            dataNew["type"] = "user";
            params.insertAt(0, dataNew);
            that.set("profiles", params);
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
