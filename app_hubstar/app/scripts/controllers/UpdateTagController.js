
HubStar.UpdateTagController = Ember.ObjectController.extend({
    change_tag_show: false,
    selectTagProfile: false,
    photo_id: "",
    profiles: [],
    collections: [],
    selectedCollection:[],
    profileCollection: [],
    product_name: "",
    selectedDesc: "",
    selectedID: "",
    description: "",
    pic_x: "",
    pic_y: "",
    aa: false,
    tag_id: "",
    photo_id:"",
            chooseProfileItem: false,
    selectedID: "",
    selectedCollectionID:"",
            contentTags: "",
    profile_name: "",
    currentPhoto: "",
    linkTo: "", //the content link address
    photo_owner_user: [],
    //isUpdateTag: false,
    selectedPhotoThumbnailUrl: "",
    isReadProfile: false,
    selectedTitle: "Choose your Collection",
    //selectedCollection: "",
    selectionPop: false,
    newCollectionName: null,
    objectID: "",
    parentTController: "",
    commentObject: '',
    isComment: false,
    //isProfile: false,
    userName: '',
    chosenProfile: '',
    needs: ["mega", "article", "collection", "applicationFeedback", "comment", "video", "showTag"],
    init: function()
    {
        HubStar.set("isProfile", false);
    },
    /***get the original data of this tag**/
    updateTag: function(tag_id, photo_id)
    {
        //this.set("isUpdateTag", true);
        var tag = "";

        for (var i = 0; i < this.get("controllers.showTag").get("contentTags").get("length"); i++)
        {
            if (this.get("controllers.showTag").get("contentTags").objectAt(i)["tag_id"] === tag_id)
            {
                tag = this.get("controllers.showTag").get("contentTags").objectAt(i);
                break;
            }
        }
        this.set("product_name", tag.product_name);
        //this.chooseProfile(tag.profile_name,tag.profile_id);
        this.set('profile_name', tag.profile_name);
        this.set("description", tag.desc);
        this.set("linkTo", tag.linkto);
        this.set("selectedDesc", "");
        this.set("selectedID", tag.profile_id);
        this.set("selectedCollectionID", tag.collectionID);
        this.setThumbnailUrl(tag.pic_url);
        this.set("tag_id", tag_id);
        this.set("photo_id", photo_id);
    },
    saveUpdateTag: function(profile_id)
    {
        var tag_id = this.get("tag_id");
        var photo_id = this.get("photo_id");
        var time_stamp = new Date();
        time_stamp = time_stamp.toString();

        for (var i = 0; i < this.get("controllers.showTag").get("contentTags").get("length"); i++)
        {
            if (this.get("controllers.showTag").get("contentTags").objectAt(i)["tag_id"] === tag_id)
            {
                this.get("controllers.showTag").get("contentTags").objectAt(i)["linkto"] = this.get("linkTo");
                this.get("controllers.showTag").get("contentTags").objectAt(i)["desc"] = this.get("description");
                this.get("controllers.showTag").get("contentTags").objectAt(i)["product_name"] = this.get("product_name");
                this.get("controllers.showTag").get("contentTags").objectAt(i)["tag_time"] = time_stamp;
                this.get("controllers.showTag").get("contentTags").objectAt(i)["profile_id"] = this.get("selectedID");
                this.get("controllers.showTag").get("contentTags").objectAt(i)["collectionID"] = this.get("selectedCollectionID");
                break;
            }
        }
        if (HubStar.get("isArticleTag") === true)
        {
            this.get("controllers.article").set("contentTagsArticle", this.get("controllers.showTag").get("contentTags"));
        }
        else
        {
            this.get("controllers.mega").set("contentTags", this.get("controllers.showTag").get("contentTags"));
        }
        var tagInfo = [tag_id, this.get("product_name"), this.get("description"), this.get("linkTo"), time_stamp, this.get("selectedID"), photo_id,this.get("selectedCollectionID")];
        tagInfo = JSON.stringify(tagInfo);
        var that = this;
        requiredBackEnd('showTag', 'updateTag', tagInfo, 'POST', function(params) {
            //that.set("isUpdateTag", false);
            if (HubStar.get("isArticleTag") === true)
            {
                that.get("controllers.article").set("enableEditTag", false);
                that.get("controllers.article").set("contentTagsArticle", params);
            }
            else
            {
                that.get("controllers.mega").set("enableEditTag", false);
                that.get("controllers.mega").set("contentTags", params);
            }
            that.get("controllers.showTag").readTags(photo_id);
        });
    },
    collectionSwitch: function() {
        this.set('selectionPop', !this.get("selectionPop"));
        this.set('selectTagProfile', false);
    },
    cancelUpdateTag: function()
    {
        if (HubStar.get("isArticleTag") === true)
        {
            this.get("controllers.article").set("enableEditTag", false);
        }
        else
        {
            this.get("controllers.mega").set("enableEditTag", false);
        }
        //this.set("isUpdateTag", false);
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
    },
    profileSwitch: function() {
        var data = [localStorage.loginStatus];
        var dataNew = new Array();
        var that = this;
        this.set('selectionPop', false);
        this.set('isReadProfile', true);
        requiredBackEnd('users', 'ReadProfileData', data, 'POST', function(params) {
//            dataNew["profile_id"] = localStorage.loginStatus;
//            dataNew["profile_name"] = "your profile";
//            dataNew["type"] = "user";
//            params.insertAt(0, dataNew);
            that.set("profiles", params);
            that.set('isReadProfile', false);
            that.set('selectTagProfile', !that.get('selectTagProfile'));
        });
    },
    chooseProfile: function(title, id) {
        this.set('selectedDesc', title);
        this.set("selectedID", id);
        this.set("aa", true);
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
        this.set("selectedCollectionID", selectedCollection.id);
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
    setImageID: function(id) {
        this.set("objectID", id);
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
            this.set("selectedDesc", HubStar.get('selectedDesc'));
        }
        else {
            this.set("selectedDesc", title);
        }
    }

});
