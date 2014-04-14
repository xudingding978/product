
HubStar.ShowTagController = Ember.ObjectController.extend({
    change_tag_show: false,
    selectTagProfile: false,
    photo_id: "", //selected photo's id
    profiles: [], // the list of profiles that user own
    collections: [],
    product_name: "", //it is the product name
    selectedDesc: "", //it is selected profile title
    description: "", //it is the descriptioin of the product
    pic_x: "",
    pic_y: "",
    tag_id: "", // it is used to update
    selectedID: "", //it is selected profile id
    contentTags: "", //it is to save the every tag's content
    currentPhoto: "",
    linkTo: "", //the content link address
    photo_owner_user: [],
    isUpdateTag: false,
    selectedPhotoThumbnailUrl: "",
    chosenProfile: '',
    selectedTitle: "Choose your Collection",
    needs: ["mega", "article", "collection", "applicationFeedback", "comment", "video"],
    //selectedCollection: "",
    selectionPop: false,
    newCollectionName: null,
    objectID: "",
    parentTController: "",
    commentObject: '',
    isComment: false,
    //isProfile: false,
    userName: '',
    init: function()
    {
        HubStar.set("isProfile", false);
    },
    saveTag: function(time)
    {
//  var name = $('#tagname').val();  //get the input txt value
        var mega = HubStar.Mega.find(this.get("photo_id"));
        this.set("currentPhoto", mega);
        $('#tagname').val(""); //set the input tagname filed to null string
        $('#tagit').fadeOut();
        this.set('selectTagProfile', false); // show list of profile
        var photo_id = this.get("photo_id");
        var selectedID = this.get("selectedID"); //the selected profile id
        if (selectedID === "" || selectedID === null || selectedID === undefined)
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please select the profile before save.", "warnning");
        }
        else
        {
            var product_name = this.get("product_name");
            var desc = this.get("description");

            var pic_x = this.get("pic_x"); //set the tag location
            var pic_y = this.get("pic_y");
            var linkAddress = this.get("linkTo");
            var time_stamp = new Date();
            var tag_id = time_stamp.getTime().toString();
            time_stamp = time_stamp.toString();
            var tagInfo = [selectedID, product_name, desc, pic_x, pic_y, linkAddress, time_stamp, photo_id, tag_id];
            tagInfo = JSON.stringify(tagInfo);
            var newTag = new Array();
            var that = this;
            requiredBackEnd('showTag', 'saveTag', tagInfo, 'POST', function(params) {
//set the model , data come from the front end rather than the get from the back end
                newTag["tag_id"] = tag_id;
                newTag["profile_id"] = selectedID;
                newTag["product_name"] = product_name;
                newTag["desc"] = desc;
                newTag["pic_x"] = pic_x;
                newTag["pic_y"] = pic_y;
                newTag["linkto"] = linkAddress;
                newTag["link_to_click_count"] = 0;
                newTag["tag_time"] = time_stamp;
                newTag["tag_approved"] = false;
                if (that.get("contentTags") !== null && that.get("contentTags") !== "" && that.get("contentTags") !== undefined)
                {
                    that.get("contentTags").pushObject(newTag);
                    that.createNotification(newTag, mega);
                }
//                that.get("controllers.article").set("showRequestTag", true);
//                that.get("controllers.mega").set("showRequestTag", true);
////reset the value
////  that.setTagIcon(pic_x, pic_y, tag_id); //set the tag icon location
                if (HubStar.get("isArticleTag") === true)
                {
                    that.get("controllers.article").set("showRequestTag", true);
                }
                else
                {
                    that.get("controllers.mega").set("showRequestTag", true);
                }

                that.setDescription("");
                that.setLinkTo("");
                that.set("product_name", "");
                that.readTags(photo_id); //call the read method to show all tags
            });
        }
    },
    activateUserTag: function(tag_id, photo_id)
    {
        /*************set the model data***********/
        var tagInfo = [tag_id, photo_id];
        tagInfo = JSON.stringify(tagInfo);
        var that = this;
        requiredBackEnd('showTag', 'activateTag', tagInfo, 'POST', function(params) {
            that.readTags(photo_id);
        });
    },
    deleteTag: function(tag_id, photo_id)
    {
        var tagInfo = [tag_id, photo_id];
        tagInfo = JSON.stringify(tagInfo);
        var that = this;
        requiredBackEnd('showTag', 'deleteTag', tagInfo, 'POST', function(params) {
            that.readTags(photo_id);
        });
    },
    createNotification: function(newTag, mega)
    {

        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var login_user_id = currentUser.get("id"); // current login user id
        var login_user_name = currentUser.get("display_name"); // current login user id
        var photo_owner = mega.get("owner_id"); //photo owner's profile id 
        var photo_type = mega.get("owner_type");
//        this.getCurrentOwner(photo_owner, login_user_id);


        if (photo_owner !== null && photo_owner !== undefined && photo_owner !== "")
        {
            var photo_owner_proifle = HubStar.Profile.find(photo_owner);
            var that = this;
            photo_owner_proifle.then(function() {
                var s = photo_owner_proifle.get("profile_creator");
                s = s + "," + photo_owner_proifle.get("profile_administrator");
                s = s + "," + photo_owner_proifle.get("profile_editor");

                var linkToCompany = newTag["linkto"];
                var time_stamp = newTag["tag_time"];
                var photo_id = that.get("photo_id");
                var tempComment = [s, login_user_id, time_stamp, photo_id, document.URL, login_user_name, linkToCompany];
                tempComment = JSON.stringify(tempComment);
//        var dataNew = new Array();
                requiredBackEnd('showTag', 'createNotification', tempComment, 'POST', function(params) {
                });

            });
        }


    },
//    sentRequestEmail: function(newTag)
//    {
//        var mega = HubStar.Mega.find(this.get("photo_id"));
//        var requestEmail = mega.get("owner_contact_email");
//        if (requestEmail !== null && requestEmail !== undefined && requestEmail !== "")
//        {
//            var profile_id = newTag["profile_id"];
//            var product_name = newTag["product_name"];
//            var time_stamp = newTag["tag_time"];
//            var linkAddress = newTag["linkto"];
//            var photo_id = this.get("photo_id");
//            var tagInfo = [profile_id, product_name, linkAddress, time_stamp, photo_id, requestEmail];
//            tagInfo = JSON.stringify(tagInfo);
//            var newTag = new Array();
//            var that = this;
//            requiredBackEnd('showTag', 'sent', tagInfo, 'POST', function(params) {
//            });
//        }
//    },
//    setTagIcon: function(pic_x, pic_y, tag_id)
//    {
//        setTimeout(function() {
//            var tagDiv = "#tag_" + tag_id;
//            $(tagDiv).fadeIn();
//            $(tagDiv).css({top: pic_y, left: pic_x});
//        }, 500);
//    },
    readTags: function(photo_id)
    {
        var mega = HubStar.Mega.find(this.get("photo_id"));
        this.set("currentPhoto", mega);
        var tagInfo = [photo_id];
        tagInfo = JSON.stringify(tagInfo);
        var newTag = new Array();
        var that = this;

        requiredBackEnd('showTag', 'readTag', tagInfo, 'POST', function(params) {
//set the model          
            var thatthat = that;
            if (params !== "" && params !== undefined && params !== null)
            {
                that.set("contentTags", params);
                //    that.get("controllers.article").set("contentTagsArticle", params);
                if (HubStar.get("isArticleTag") === true)
                {
                    that.get("controllers.article").set("contentTagsArticle", params);
                }
                else
                {
                    that.get("controllers.mega").set("contentTags", params);
                }

                var tags = params;

                $(document).ready(function() {
                    setTimeout(function() {
                        //thatthat.get("controllers.mega").set("tagCount", params.get("length"));
                        if (HubStar.get("isArticleTag") === true)
                        {
                            thatthat.get("controllers.article").set("tagCount", params.get("length"));
                        } else
                        {
                            thatthat.get("controllers.mega").set("tagCount", params.get("length"));
                        }
                        if (tags !== undefined && tags !== "" && tags !== null)
                        {
                            for (var i = 0; i < tags.length; i++)
                            {
                                var tagDiv = "#tag_" + tags[i].tag_id;
                                var center_y = $(window).height()/2;
                                var center_x = ($(window).width() - 320)/2;
                                var top = center_y-HubStar.get("pic_current_height")/2;
                                var left = center_x-HubStar.get("pic_current_width")/2;
                                var height = tags[i].pic_y * HubStar.get("pic_current_height") + top;  //set the tag's place which is the percentage of image and add the picture origin left point place
                                var width = tags[i].pic_x * HubStar.get("pic_current_width") + left;
                                $(tagDiv).css({top: height, left: width});
                            }
                        }
                    }, 5);
                });
            }
            else
            {
                //    thatthat.get("controllers.article").set("tagCount", 0);
                if (HubStar.get("isArticleTag") === true)
                {
                    thatthat.get("controllers.article").set("tagCount", 0);
                }
                else
                {
                    thatthat.get("controllers.mega").set("tagCount", 0);
                }


            }
        });

    },
    cancelUpdateTag: function()
    {
        this.set("isUpdateTag", false);
        this.cancelTag();
    },
    cancelTag: function()
    {
        $('#tagname').val("");
        $('#tagit').fadeOut();
        this.setDescription("");
        this.setLinkTo("");
        this.set("product_name", "");
        this.set('selectTagProfile', false);
    }
    ,
    profileSwitch: function() {
        var data = [localStorage.loginStatus];
        var dataNew = new Array();
        var that = this;
        this.set('selectionPop', false);
        requiredBackEnd('users', 'ReadProfileData', data, 'POST', function(params) {
//            dataNew["profile_id"] = localStorage.loginStatus;
//            dataNew["profile_name"] = "your profile";
//            dataNew["type"] = "user";
//            params.insertAt(0, dataNew);
            that.set("profiles", params);
            console.log(that.get('profiles'));
            that.set('selectTagProfile', !that.get('selectTagProfile'));
        });
    },
    chooseProfile: function(title, id) {
        this.set('selectedDesc', title);
        this.set("selectedID", id);
        for (var i = 0; i < this.get("profiles").get("length"); i++)
        {
            if (this.get("profiles").objectAt(i).profile_id === id)
            {
                if (id === localStorage.loginStatus && this.get("profiles").objectAt(i).type === "user")
                {
                }
                else
                {
                    this.set("chosenProfile", id);
                }

                this.setDesc(title); //set current profile
                if (this.get("selectedDesc") !== "")
                {
                    this.setThumbnailUrl(this.get("profiles").objectAt(i).profile_hero_cover_url);
                }

                this.setTitle("Choose your Collection");
            }
        }
        this.set('selectTagProfile', !this.get('selectTagProfile'));
    },
    profileCanel: function() {
        this.set('selectTagProfile', false);
    },
    setDesc: function(desc) {  //it is the select profile
        this.set("selectedDesc", desc);
    },
    setDescription: function(desc)
    {
        this.set("description", desc);
    },
    setLinkTo: function(linkToAddress)
    {
        this.set("linkTo", linkToAddress);
    },
    setThumbnailUrl: function(photo_image_thumbnail_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
    },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            
//    setUser: function()
//    {
//        var user = HubStar.User.find(localStorage.loginStatus);
//        this.set("collections", user.get("collections"));
//        if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
//            this.setDesc("");
//            this.setTitle("Choose your Collection");
//            this.setProfile("your profile");
//            this.set('selectionPop', false);
//        }
//    },
//    setImageID: function(id) {
//        this.set("objectID", id);
//    },
//    setTitle: function(title) {
//        if (HubStar.get("chooseCollection") !== null && HubStar.get("chooseCollection") !== "" && HubStar.get("chooseCollection") !== undefined)
//        {
//            this.set("selectedTitle", HubStar.get("chooseCollection"));
//        }
//        else {
//            this.set("selectedTitle", title);
//        }
//    },
//    setProfile: function(title) {
//        if (HubStar.get("selectedID") !== null && HubStar.get("selectedID") !== "" && HubStar.get("selectedID") !== undefined)
//        {
//            this.set("selectedDesc", HubStar.get('selectedDesc'));
//        }
//        else {
//            this.set("selectedDesc", title);
//        }
//    },
//    submit: function()
//    {
// console.log("aaaaaaaaaaaaaaaa");
// 
//        if (this.get("selectionPop") !== true && HubStar.get('selectedCollection') !== undefined && HubStar.get('selectedCollection') !== null) {
//            if (HubStar.get("isProfile") === false) {
//                var collectionController = this.get('controllers.collection');
//                var collection = collectionController.getUpdateCollection(HubStar.get('selectedCollection'));
//                var content = collection.get("collection_ids");
//                this.addCollection(collection, content);
//                this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
//                this.addComment();
//                collection.set('optional', localStorage.loginStatus);
//                collection.set('type', 'user');
//                collection.store.save();
//                this.sendFeedBack();
//                this.exit();
//            }
//            else
//            {
//                var content = HubStar.get('selectedCollection').collection_ids;
//                if (content === null || content === undefined || content === "") {
//                    HubStar.get('selectedCollection').collection_ids = this.get("objectID");
//                }
//                else if (content.indexOf(this.get("objectID")) !== -1)
//                {
//                }
//                else {
//                    var ids = content;
//                    ids = ids + "," + this.get("objectID");
//                    HubStar.get('selectedCollection').collection_ids = ids;
//                }
//                var data = JSON.stringify(HubStar.get('selectedCollection'));
//                var that = this;
//                requiredBackEnd('collections', 'saveCollection', data, 'POST', function(params) {
//                    that.sendFeedBack();
//                    that.exit();
//                });
//                this.set("chosenProfile", "");
//                this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
//                this.addComment();
//            }
//        } else {
//            this.get('controllers.applicationFeedback').statusObserver(null, "Please choose a collection.", "warnning");
//        }
//
//    },
//    sendFeedBack: function() {
//        var message = "Saved to your " + this.get('selectedTitle') + " collection.";
//        if (this.get('parentTController') === 'video') {
////message = "Saved video successfully.";
//        } else if (this.get('parentTController') === 'photo') {
////message = "Saved photo successfully.";
//        }
//        this.get('controllers.applicationFeedback').statusObserver(null, message);
//    },
//    addComment: function() {
//
//        var currentUser = HubStar.User.find(localStorage.loginStatus);
//        var commentContent = this.get('selectedDesc');
//        if (commentContent) {
//            var comments = this.get("commentObject").get('comments');
//            var commenter_profile_pic_url = currentUser.get('photo_url_large');
//            var commenter_id = currentUser.get('id');
//            var name = currentUser.get('display_name');
//            var date = new Date();
//            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
//                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
//                "is_delete": false, optional: this.get("commentObject").get('type') + '/' + this.get("commentObject").get('id')});
//            comments.insertAt(0, tempComment);
//            comments.store.save();
//            commentContent = '';
//            $('#addcommetBut').attr('style', 'display:block');
//            $('#commentBox').attr('style', 'display:none');
//        }
//    },
//    setSelectedCollection: function(id) {
//        if (HubStar.get("isProfile") === false) {
//            var selectedCollection = null;
//            for (var i = 0; i < this.get("collections").get("length"); i++) {
//                var thisCollection = this.get("collections").objectAt(i);
//                if (id === thisCollection.get("id")) {
//                    selectedCollection = thisCollection;
//                }
//            }
//            HubStar.set('selectedCollection', selectedCollection);
//        }
//        else
//        {
//            var selectedCollection = null;
//            for (var i = 0; i < HubStar.get("profileCollection").get("length"); i++) {
//                var thisCollection = HubStar.get("profileCollection").objectAt(i);
//                if (id === thisCollection.id) {
//                    selectedCollection = thisCollection;
//                }
//            }
//            HubStar.set('selectedCollection', selectedCollection);
//        }
//    },
//    addCollection: function(collection, content)
//    {
//        if (content === null || content === undefined || content === "") {
//            collection.set("collection_ids", this.get("objectID"));
//        }
//
//        else if (content.indexOf(this.get("objectID")) !== -1)
//        {
//        }
//        else {
//            var ids = collection.get("collection_ids");
//            if (ids !== undefined || ids !== null)
//            {
//                ids = this.get("objectID") + "," + ids;
//            }
//            else
//            {
//                ids = this.get("objectID");
//            }
//            collection.set("collection_ids", ids);
//        }
//    },
    exit: function() {
        this.set('selectionPop', false);
        this.set('selectTagProfile', false);
        if (this.get('parentTController') === 'article')
        {
            this.get("controllers.article").switchCollection();
        }

        else if (this.get('parentTController') === 'itemFunction')
        {
            var id = this.get("objectID");
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
//    addNewCollection: function()
//    {
//
//        var collectionController = this.get('controllers.collection');
//        if (HubStar.get("isProfile") === false) {
//            var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', this.get("collections"));
//            if (collection !== null && collection !== "") {
//                collection.set('type', 'user');
//                collection.set('optional', localStorage.loginStatus);
//                this.get("collections").insertAt(0, collection);
//                this.get("collections").store.save();
//                HubStar.set('selectedCollection', collection);
//                this.chooseRecord(collection.get("title"), collection.get("id"));
//                //$('#recordID').text(this.get('newCollectionName'));
//            } else {
//            }
//        }
//        else
//        {
//            var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', HubStar.get("profileCollection"));
//            if (collection !== null && collection !== "") {
//                collection.set('type', 'profile');
//                collection.set('optional', this.get("chosenProfile"));
//                var newCollection = new Object();
//                newCollection.collection_ids = collection.get("collection_ids");
//                newCollection.cover = collection.get("cover");
//                newCollection.desc = collection.get("desc");
//                newCollection.id = collection.get("id");
//                newCollection.optional = collection.get("optional");
//                newCollection.title = collection.get("title");
//                newCollection.type = collection.get("type");
//                newCollection.created_at = collection.get("created_at");
//                newCollection.parent_type = collection.get("parent_type");
//                collection.store.save();
//                HubStar.get("profileCollection").insertAt(0, newCollection);
//                HubStar.set('selectedCollection', collection);
//                this.chooseRecord(collection.get("title"), collection.get("id"));
//                //$('#recordID').text(this.get('newCollectionName'));
//            }
//
//        }
//
//        this.set('newCollectionName', null);
//        //this.set('selectionPop', !this.get('selectionPop'));
//    },
//    collectionSwitch: function() {
//        this.set('selectionPop', !this.get("selectionPop"));
//        this.set('selectTagProfile', false);
//    },
//    chooseRecord: function(title, id) {
//        this.set('selectedTitle', title);
//        this.setSelectedCollection(id);
//        this.selectSelectedDesc();
//        //$('#recordID').text(this.get('selectedTitle'));
//        HubStar.set('chooseCollection', this.get('selectedTitle'));
//        this.set('selectionPop', !this.get("selectionPop"));
//    },
//    selectSelectedDesc: function()
//    {
//        var desc = "";
//        for (var i = 0; i < this.get("collections").get("length"); i++)
//        {
//            var collection = this.get("collections").objectAt(i);
//            if (collection.get("title") === this.get("selectedTitle"))
//            {
////desc = collection.get("desc");
//            }
//        }
//        this.set("selectedDesc", desc);
//    },
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
