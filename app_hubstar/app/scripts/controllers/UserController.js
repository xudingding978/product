
var isExsinting = true;

HubStar.UserController = Ember.Controller.extend({
    user: null,
    uploadMode: null,
    newCollectionName: null,
    collections: [],
    temp: [],
    selectedDesc: "",
    selectedTitle: "",
    coverImg: "",
    display_name: "",
    userTage: true,
    currentUserID: "",
    needs: ['photoCreate'],
    makeSureDelete: false,
    updateOrCreate: true,
    collectionTag: true,
    selectedCollection: "",
    profileSelectionStatus: "Collections",
    selected_topics: [],
    is_authentic_user: false,
    is_click:false,
    init: function()
    {
        this.setUser();
    },
    setUser: function()
    {
        var user = this.getCurrentUser();
        topics = user.get('selected_topics');
        this.set('selected_topics', []);
        if (topics !== null && topics !== "" && topics !== undefined) {
            var topics = topics.split(",");
            for (var i = 0; i < topics.length; i++) {
                this.get('selected_topics').pushObject({topics: topics[i]});
            }
        }
        this.set("collections", user.get("collections"));
        this.set("coverImg", user.get("photo_url"));
        this.set("description", user.get("description"));
        this.set("display_name", user.get("display_name"));
        if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
            this.setDesc(this.get("collections").objectAt(0).get("desc"));
            this.setTitle(this.get("collections").objectAt(0).get("title"));
        }
        this.set("user", user);
        var collections = user.get("collections");
        for (var i = 0; i < collections.get("length"); i++)
        {
            var col = collections.objectAt(i);
            if ((col.get("collection_ids") !== null && col.get("collection_ids") !== "")) {
                var imgId = col.get("collection_ids").split(",").objectAt(0);
                this.getHeroImage(imgId, col);
            }
        }
        this.checkAuthenticUser();
    },
       
    userDashboardButton: function() {
    if (this.get('is_click')===false){
      
    this.set('is_click',true);
       $('.user-board_left').hide();
    }
   else if (this.get('is_click')===true){
       
 this.set('is_click',false);
 $('.user-board_left').show();
  }
    },
 
    getHeroImage: function(id, col) {
        var photo = HubStar.Mega.find(id);
        photo.addObserver('isLoaded', function() {
            if (photo.get('isLoaded')) {
                if (col.get("cover") === null || col.get("cover") === "" || col.get("cover") === undefined || col.get("cover") === 'null'
                        || col.get("cover") === 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png') {
                    col.set("cover", photo.get('photo').objectAt(0).get("photo_image_hero_url"));
                    col.store.save();
                }
            }
        });
    },
    exit: function()
    {
    },
    getCurrentUser: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        return user;
    },
    checkingIdisExsinting: function(id, postOrPut) {

        if (postOrPut === "update") {
            for (var i = 0; i < this.get("temp").get('length'); i++) {

                if (this.get("temp").objectAt(i) === id) {

                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                alert('This Collection is already exsiting!!!');
            }
        } else if (postOrPut === "create") {

            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {

                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                alert('This Collection is already exsiting!!!');
            }
        }
    },
    submit: function()
    {
        if (this.selectedCollection.get('id') !== null && this.selectedCollection.get('id') !== "" && this.selectedCollection.get('id') !== undefined) {
            var id = this.checkingValidInput(this.selectedCollection.get('id'));
            this.checkingIdisExsinting(id, "create");
            if (isExsinting) {
                this.selectedCollection.set('id', id);
                this.selectedCollection.set('title', id);
                this.get("collections").insertAt(0, this.selectedCollection);
                this.get("collections").store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
            } else {
                isExsinting = true;
            }
        }
    },
    checkingValidInput: function(title) {

        if (title.indexOf(" ") !== -1) {

            title = title.split(' ').join('-');
        }
        return title;
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setTitle: function(title) {
        this.set("selectedTitle", title);
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
    },
    deleteSelectedCollection: function()
    {

        var message = "Do you wish to delete " + this.get("selectedCollection").get('id') + " ?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.get("collections").removeObject(this.get("selectedCollection"));
            var user = this.getCurrentUser();
            user.store.save();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    deleteTopic: function(topic) {

        var user = HubStar.User.find(localStorage.loginStatus);
        user.set('selected_topics', user.get('selected_topics') + ',');
        $('#' + topic).attr('style', 'display:none');
        user.set('selected_topics', user.get('selected_topics').replace(topic + ",", ""));
        user.set('selected_topics', user.get('selected_topics').substring(0, user.get('selected_topics').length - 1));
        user.store.commit();
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function()
    {

        var id = this.checkingValidInput(this.selectedCollection.get('id'));
        this.checkingIdisExsinting(id, "update");
        if (isExsinting) {
            var title = this.get("selectedCollection").get("id");
            this.get("selectedCollection").set("title", title);
            this.set("selectedTitle", title);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
        } else {
            isExsinting = true;
        }
    },
    setSelectedCollection: function(id) {
        for (var i = 0; i < this.get("collections").get("length"); i++) {
            var thisCollection = this.get("collections").objectAt(i);
            this.get('temp').pushObject(thisCollection.get("id"));
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }
    },
    newCollection: function()
    {
        var collection = HubStar.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date(),
            'cover': 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png'
        });
        this.set("selectedCollection", collection);
    },
    checkAuthenticUser: function() {
        {

            if (localStorage.loginStatus === this.get('user').id) {
                this.set('is_authentic_user', true);
            }
            else {
                this.set('is_authentic_user', false);
            }
        }
    },
    selectCollection: function() {
        this.set('profileSelectionStatus', 'Collections');
        this.set('partnerTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
    },
    selectFollowing: function(model) {

        this.set('profileSelectionStatus', 'Following');
        this.set('partnerTag', true);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        this.get('controllers.itemProfiles').setPartnerRemove();
    },
    selectFollower: function(model) {
        this.set('profileSelectionStatus', 'Followers');
        this.set('partnerTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', true);
    },
    flickButtonClick: function()
    {
        this.set("isEditingMode", !this.get("isEditingMode"));
    }
}
);
