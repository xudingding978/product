
HubStar.ShowTagController = Ember.ObjectController.extend({
    change_tag_show: false,
    change_tag_show_2: false,
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
    selectedCollection: [],
    selectionPop: false,
    newCollectionName: null,
    objectID: "",
    parentTController: "",
    commentObject: '',
    isComment: false,
    //isProfile: false,
    userName: '',
    chooseProfileItem: false,
    profileCollection: [],
    isReadProfile: false,
    init: function()
    {
        HubStar.set("isProfile", false);
    },
    saveTag: function(time)
    {
//  var name = $('#tagname').val();  //get the input txt value
        var mega = HubStar.Mega.find(this.get("photo_id"));
        this.set("currentPhoto", mega);
        this.set('selectTagProfile', false); // show list of profile
        var photo_id = this.get("photo_id");
        var selectedID = this.get("selectedID"); //the selected profile id
        var collectionID = this.get("selectedCollection").id;
        var collection_name = this.get("selectedCollection").title;
        if (selectedID === "" || selectedID === null || selectedID === undefined ||
                //collectionID === "" || collectionID === null || collectionID === undefined ||
                this.get("product_name") === "" || this.get("product_name") === null || this.get("product_name") === undefined)
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please fill all the blanks before save.", "warnning");
        }
        else
        {
            $('#tagname').val(""); //set the input tagname filed to null string
            $('#tagit').fadeOut();
            var product_name = this.get("product_name");
            var desc = this.get("description");

            var pic_x = this.get("pic_x"); //set the tag location
            var pic_y = this.get("pic_y");
            var linkAddress = this.get("linkTo");
            var time_stamp = new Date();
            var tag_id = createMessageid() + localStorage.loginStatus;
            time_stamp = time_stamp.toString();
            var tagInfo = [selectedID, product_name, desc, pic_x, pic_y, linkAddress, time_stamp, photo_id, tag_id, collectionID, collection_name, localStorage.loginStatus];
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
                newTag["collectionID"] = collectionID;
                newTag["collection_name"] = collection_name;
                newTag["tag_owner"] = localStorage.loginStatus;
                newTag["is_tag_owner"] = true;
                if (that.get("contentTags") !== null && that.get("contentTags") !== "" && that.get("contentTags") !== undefined)
                {
                    that.get("contentTags").pushObject(newTag);
                    that.createNotification(newTag, mega, tag_id);
                }

                if (HubStar.get("isArticleTag") === true)
                {
                    that.get("controllers.article").set("showRequestTag", true);
                    that.get("controllers.article").set("enableTag", false);
                }
                else
                {
                    that.get("controllers.mega").set("showRequestTag", true);
                    that.get("controllers.mega").set("enableTag", false);
                }

                that.setDescription("");
                that.setLinkTo("");
                that.set("product_name", "");
                that.readTags(photo_id); //call the read method to show all tags
            });
            this.get('controllers.applicationFeedback').statusObserver(null, "Great job! A message to the content owner requesting activation of your tag.", "warnning");
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
    createNotification: function(newTag, mega, tag_id)
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
                var photo_id = tag_id;
                var tempComment = [s, login_user_id, time_stamp, photo_id, document.URL, login_user_name, linkToCompany];
                tempComment = JSON.stringify(tempComment);
                requiredBackEnd('showTag', 'createNotification', tempComment, 'POST', function(params) {
                });

            });
        }


    },
    readTags: function(photo_id)
    {
        var mega = HubStar.Mega.find(this.get("photo_id"));
        this.set("currentPhoto", mega);
        var tagInfo = [photo_id];
        tagInfo = JSON.stringify(tagInfo);
        var newTag = new Array();
        var that = this;
        that.set("contentTags", []);
        requiredBackEnd('showTag', 'readTag', tagInfo, 'POST', function(params) {
//set the model          
            var thatthat = that;
            if (params !== "" && params !== undefined && params !== null)
            {
                that.set("contentTags", params);
                for (var i = 0; i < params.length; i++)
                {
                    if (params[i].tag_owner === localStorage.loginStatus)
                    {
                        params[i].is_tag_owner = true;
                    }
                    else
                    {
                        params[i].is_tag_owner = false;
                    }
                    var center_y = $(window).height() / 2;
                    var isArticle = false;
                    if (document.URL.search("article") !== -1)
                    {
                        isArticle = true;
                    }
                    var center_x = 0;
                    if (isArticle === true) {
                        center_x = ($(window).width() * 0.55) / 2;
                    }
                    else
                    {
                        center_x = ($(window).width() - 320) / 2;
                    }
                    var top = center_y - HubStar.get("pic_current_height") / 2;
                    var left = center_x - HubStar.get("pic_current_width") / 2;
                    var height = Math.ceil(params[i].pic_y * HubStar.get("pic_current_height") + top) + "px";  //set the tag's place which is the percentage of image and add the picture origin left point place
                    var width = Math.ceil(params[i].pic_x * HubStar.get("pic_current_width") + left) + "px";
                    params[i].top = height;
                    params[i].left = width;

                    var url = params[i].pic_url.split("_");
                    var length = url.length;
                    var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
                    var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);

                    if (width > height)
                    {
                        height = Math.ceil(85 / width * height);
                        width = 85;
                    }
                    else
                    {
                        width = Math.ceil(85 / height * width);
                        height = 85;
                    }
                    width = width + "px";
                    height = height + "px";
                    params[i].height = height;
                    params[i].width = width;
                }
                if (HubStar.get("isArticleTag") === true)
                {
                    that.get("controllers.article").set("contentTagsArticle", params);
                }
                else
                {
                    that.get("controllers.mega").set("contentTags", params);
                }
            }
            else
            {
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
        this.set("isReadProfile", true);
        requiredBackEnd('users', 'ReadProfileData', data, 'POST', function(params) {
            that.set("profiles", params);
            //console.log(that.get('profiles'));
            that.set("isReadProfile", false);
            that.set('selectTagProfile', !that.get('selectTagProfile'));
        });
    },
    chooseProfile: function(title, id) {
        this.set('selectedDesc', title);
        this.set("selectedID", id);
        var link = 'http://' + document.domain + '/#/profiles/' + this.get("selectedID") + "/collections/";
        this.setLinkTo(link);
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
                    this.set("profileCollection", this.get("profiles").objectAt(i).collection);
                    this.set("chooseProfileItem", true);
                }

                this.setDesc(title);
                if (this.get("selectedDesc") !== "")
                {
                    this.setThumbnailUrl(this.get("profiles").objectAt(i).profile_hero_cover_url);
                }

                this.setTitle("Choose your Collection");
            }
        }
        this.set('selectTagProfile', !this.get('selectTagProfile'));
    },
    chooseRecord: function(title, id) {
        this.set('selectedTitle', title);
        this.setSelectedCollection(id);
        var link = 'http://' + document.domain + '/#/profiles/' + this.get("selectedID") + "/collections/" + id;
        this.setLinkTo(link);
        this.set('selectionPop', !this.get("selectionPop"));
    },
    setSelectedCollection: function(id) {
        var selectedCollection = null;
        for (var i = 0; i < this.get("profileCollection").get("length"); i++) {
            var thisCollection = this.get("profileCollection").objectAt(i);
            if (id === thisCollection.id) {
                selectedCollection = thisCollection;
            }
        }
        this.set('selectedCollection', selectedCollection);
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
    setTitle: function(title) {
        if (HubStar.get("chooseCollection") !== null && HubStar.get("chooseCollection") !== "" && HubStar.get("chooseCollection") !== undefined)
        {
            this.set("selectedTitle", HubStar.get("chooseCollection"));
        }
        else {
            this.set("selectedTitle", title);
        }
    },
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
    collectionSwitch: function() {
        this.set('selectionPop', !this.get("selectionPop"));
        this.set('selectTagProfile', false);
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
