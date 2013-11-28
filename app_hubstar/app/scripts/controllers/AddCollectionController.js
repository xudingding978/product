
HubStar.AddCollectionController = Ember.ObjectController.extend({
    collections: [],
    selectedDesc: "",
    selectedTitle: "Choose your Collection",
    selectedCollection: "",
    selectionPop: false,
    needs: ["mega", "article", "collection", "applicationFeedback", "comment", "video"],
    newCollectionName: null,
    objectID: "",
    selectedPhotoThumbnailUrl: "",
    parentController: "",
    commentObject: '',
    isComment: false,
    init: function()
    {
    },
    setUser: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);
        //  user.addObserver('isLoaded', function() {
        //     if (user.get('isLoaded')) {
        this.set("collections", user.get("collections"));
        if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
            this.setDesc("");
            this.setTitle("Choose your Collection");
        }
    },
    setImageID: function(id) {
        this.set("objectID", id);
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setTitle: function(title) {
        this.set("selectedTitle", title);
    },
    setThumbnailUrl: function(photo_image_thumbnail_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
    },
    submit: function()
    {
        if (this.get("selectionPop") !== true) {
            var collectionController = this.get('controllers.collection');
            var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
            var content = collection.get("collection_ids");
            this.addCollection(collection, content);
            this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
            this.addComment();
            collection.set('optional', localStorage.loginStatus);
            collection.set('type', 'user');
            collection.store.save();
            this.sendFeedBack();
            this.exit();
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please choose a collection.", "warnning");
        }

    },
    sendFeedBack: function() {
        var message = "Added to your " + this.get('selectedTitle') + " collection successfully.";
        if (this.get('parentController') === 'video') {
            message = "Saved video successfully.";
        } else if (this.get('parentController') === 'photo') {
            message = "Saved photo successfully.";
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
       
        var selectedCollection = null;
        for (var i = 0; i < this.get("collections").get("length"); i++) {
            var thisCollection = this.get("collections").objectAt(i);
            if (id === thisCollection.get("id")) {
                selectedCollection = thisCollection;
            }
        }
        this.set('selectedCollection', selectedCollection);
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
        if (this.get('parentController') === 'article')
        {
            this.get("controllers.article").switchCollection();
        }

        else if (this.get('parentController') === 'itemFunction')
        {
            var id = this.get("objectID");
            //console.log(id);
            $('#addCollection_' + id).attr('style', 'display: none');
        }

        else if (this.get('parentController') === 'video')
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
        var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', this.get("collections"));
        if (collection !== null && collection !== "") {
            collection.set('type', 'user');
            collection.set('optional', localStorage.loginStatus);
            this.get("collections").insertAt(0, collection);
            HubStar.store.save();
            this.set('selectedCollection', collection);
            //$('#recordID').text(this.get('newCollectionName'));
        } else {
            selectedCollection.deleteRecord();
        }
        this.set('newCollectionName', null);
        this.set('selectionPop', !this.get('selectionPop'));
    },
    collectionSwitch: function() {
        this.set('selectionPop', !this.get('selectionPop'));
    },
    chooseRecord: function(title, id) {        
        this.set('selectedTitle', title);
        this.setSelectedCollection(id);
        this.selectSelectedDesc();
        //$('#recordID').text(this.get('selectedTitle'));
        HubStar.set('chooseCollection', this.get('selectedTitle'));
        this.set('selectionPop', !this.get('selectionPop'));
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
        this.set('parentController', parentController);
    }
});
