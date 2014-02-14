
HubStar.UpdateTagController = Ember.ObjectController.extend({
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
    photo_id:"", //it is used to update
            selectedID: "", //it is selected profile id
    contentTags: "", //it is to save the every tag's content
    currentPhoto: "",
    linkTo: "", //the content link address
    photo_owner_user: [],
    isUpdateTag: false,
    selectedPhotoThumbnailUrl: "",
    needs: ["mega", "article", "collection", "applicationFeedback", "comment", "video", "showTag"],
    ////////////////////////////////////////////////////////////////profileCollection: [],

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
    init: function()
    {
        HubStar.set("isProfile", false);
    },
    /***get the original data of this tag**/
    updateTag: function(tag_id, photo_id)
    {
        this.set("isUpdateTag", true);
        var tag = "";

        for (var i = 0; i < this.get("controllers.showTag").get("contentTags").get("length"); i++)
        {
            if (this.get("controllers.showTag").get("contentTags").objectAt(i)["tag_id"] === tag_id)
            {
                tag = this.get("controllers.showTag").get("contentTags").objectAt(i);

                break;
            }

        }
        this.set("product_name", tag["product_name"]);
        this.set("description", tag["desc"]);
        this.set("linkTo", tag["linkto"]);
        this.set("selectedDesc", tag["profile_id"]);
        this.setThumbnailUrl(tag["pic_url"]);
        this.set("tag_id", tag_id);
        this.set("photo_id", photo_id);
        //   this.set()
    },
    saveUpdateTag: function()
    {
        var tag_id = this.get("tag_id");
        var photo_id = this.get("photo_id");
        console.log(photo_id + "444444" + tag_id);
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
        var tagInfo = [tag_id, this.get("product_name"), this.get("description"), this.get("linkTo"), time_stamp, this.get("selectedID"), photo_id];
        tagInfo = JSON.stringify(tagInfo);
        var that = this;
        requiredBackEnd('showTag', 'updateTag', tagInfo, 'POST', function(params) {
//reset the value
//  that.setTagIcon(pic_x, pic_y, tag_id); //set the tag icon location
            that.set("isUpdateTag", false);
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
    },
    profileSwitch: function() {
        var data = [localStorage.loginStatus];
        var dataNew = new Array();
        var that = this;
        this.set('selectionPop', false);
        requiredBackEnd('users', 'ReadProfileData', data, 'POST', function(params) {
            dataNew["profile_id"] = localStorage.loginStatus;
            dataNew["profile_name"] = "your profile";
            dataNew["type"] = "user";
            params.insertAt(0, dataNew);
            that.set("profiles", params);
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
