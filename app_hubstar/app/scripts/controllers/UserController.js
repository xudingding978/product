
var isExsinting = true;
var interest_record;
var collection_title_record;
var collection_desc_record;

HubStar.UserController = Ember.Controller.extend({
    user: null,
    identifier: "",
    uploadMode: null,
    newCollectionName: null,
    collections: [],
    temp: [],
    follower: "",
    following: "",
    follow_status: false,
    selectedDesc: "",
    selectedTitle: "",
    coverImg: "",
    display_name: "",
    userTage: true,
    currentUserID: "",
    facebook: "",
    twitter: "",
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    location: "",
    email: "",
    password: "",
    needs: ['photoCreate', 'applicationFeedback'],
    makeSureDelete: false,
    updateOrCreate: true,
    collectionTag: true,
    selectedCollection: "",
    profileSelectionStatus: "Collections",
    selected_topics: [],
    interests: "",
    editingInterest: false,
    interest: "interest",
    is_authentic_user: false,

    aboutMe: "",
    is_Photoclick: false,
    is_click: false,
    init: function()

    {
        this.setUser();
    },
    getCurrentUser: function()
    {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        return user;
    },
    setUser: function()
    {
        var user = this.getCurrentUser();
        this.setIntersetsArr(user);
        this.set("collections", user.get("collections"));
        this.set("coverImg", user.get("photo_url"));
        this.set("description", user.get("description"));
        this.set("user", user);
        this.set("collections", user.get("collections"));
        this.set("coverImg", user.get("photo_url"));
        this.set("description", user.get("description"));
        this.set("display_name", user.get("display_name"));

        this.set("identifier", user.get("identifier"));
        this.set("aboutMe", user.get("about_me"));
        this.set("facebook", user.get("facebook_link"));
        this.set("twitter", user.get("twitter_link"));
        this.set("googleplus", user.get("googleplus_link"));
        this.set("pinterest", user.get("pinterest_link"));
        this.set("linkedin", user.get("linkedin_link"));
        this.set("youtube", user.get("youtube_link"));
        this.set("location", user.get("region"));
        this.set("email", user.get("email"));
        this.set("password", user.get("password"));

       // this.isFollowed();
        if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
            this.setDesc(this.get("collections").objectAt(0).get("desc"));
            this.setTitle(this.get("collections").objectAt(0).get("title"));
        }

        var collections = user.get("collections");
        for (var i = 0; i < collections.get("length"); i++)
        {
            var col = collections.objectAt(i);
            if ((col.get("collection_ids") !== null && col.get("collection_ids") !== "")) {
                var imgId = col.get("collection_ids").split(",").objectAt(0);
                //  this.getHeroImage(imgId, col);
            }
        }
        this.checkAuthenticUser();

    },
    userDashboardButton: function() {
        if (this.get('is_click') === false) {
            this.set('is_click', true);
            $('#user-board_right_front').hide();
            $('#user-board_right_back').show();

        }

    },
    userDashboardBackButton: function() {

        if (this.get('is_click') === true) {
            this.set('is_click', false);
            this.setUser();
            $('#user-board_right_front').show();
            $('#user-board_right_back').hide();

        }
    },
    userPhotoEditButton: function() {


        if (this.get('is_Photoclick') === false) {
            this.set('is_Photoclick', true);

            $('#user-photo_left').hide();
            $('#user-photo_left-back').show();
        }

    },
    userPhotoEditBackButton: function() {
        if (this.get('is_Photoclick') === true) {
            this.set('is_Photoclick', false);
            $('#user-photo_left').show();
            $('#user-photo_left-back').hide();

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
    checkingIdisExsinting: function(id, postOrPut) {

//        if (postOrPut === "update") {
//            for (var i = 0; i < this.get("temp").get('length'); i++) {
//
//                if (this.get("temp").objectAt(i) === id) {
//
//                    isExsinting = false;
//                }
//            }
//            if (!isExsinting) {
//
//                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting!!!");
//            }
//        } else


        if (postOrPut === "create") {

            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {

                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting!!!");
            }
        }
    },
    interestEdit: function(data, checkingInfo) {
        if (checkingInfo === "interest") {
            interest_record = data;
            this.set('editingInterest', !this.get('editingInterest'));
            //console.log();
        }
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "interest") {
            this.set('editingInterest', !this.get('editingInterest'));
        }

        this.saveUpdateInterest();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "interest") {
            //console.log(this.profile_name);
            this.set('interests', interest_record);
            // this.set("profile_name",profile_record);
            this.set('editingInterest', !this.get('editingInterest'));
        }

    },
    submit: function()
    {

        var desc = this.checkingValidInput(this.selectedCollection.get('desc'));
        var id = this.checkingValidInput(this.selectedCollection.get('title'));
        this.checkingIdisExsinting(id, "create");

        if (isExsinting) {
            var validID = this.checkingValidInput(id);
            var checkingCharater = this.specialCharactersChecking(validID);
            if (checkingCharater) {
                this.selectedCollection.set('id', validID.toLowerCase());
                this.selectedCollection.set('title', this.selectedCollection.get('title'));
                this.selectedCollection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
                if (this.selectedCollection.get('desc') !== null && this.selectedCollection.get('desc') !== "") {
                    this.selectedCollection.set('desc', desc);
                } else {
                    this.selectedCollection.set('desc', "Add a short description to your Collection");
                }
                this.get("collections").insertAt(0, this.selectedCollection);
                HubStar.store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "invalide characters...");
            }

        } else {
            isExsinting = true;
        }
    },

    socialLink: function(link) {

        if (link === 'facebook') {
            window.open(this.get("facebook"));
        }
        else if (link === 'twitter') {
            window.open(this.get("twitter"));
        }
        else if (link === 'googleplus') {
            window.open(this.get("googleplus"));

        }

        else if (link === 'pinterest') {
            window.open(this.get("pinterest"));
        }
        else if (link === 'youtube') {
            window.open(this.get("youtube"));
        }
        else if (link === 'linkedin') {
            window.open(this.get("linkedin"));
        }
    },
    saveUpdate: function() {
        var update_user_record = this.getCurrentUser();
        var http = "http://";
    
        update_user_record.set('collections', this.get('collections'));
        update_user_record.set('photo_url', this.get('coverImg'));
        update_user_record.set('description', this.get('description'));
        update_user_record.set('display_name', this.get('display_name'));
        update_user_record.set('about_me', this.get('aboutMe'));
        if (this.get('facebook').slice(0, 5) === 'http:' || this.get('facebook').slice(0, 5) === 'https'|| this.get('facebook')==='') {
            update_user_record.set('facebook_link', this.get('facebook'));
        } else {

            update_user_record.set('facebook_link', http.concat(this.get('facebook')));
        }
        if (this.get('twitter').slice(0, 5) === 'http:' || this.get('twitter').slice(0, 5) === 'https'|| this.get('twitter')==='') {
            update_user_record.set('twitter_link', this.get('twitter'));
        } else {
            update_user_record.set('twitter_link', http.concat(this.get('twitter')));
        }
        if (this.get('googleplus').slice(0, 5) === 'http:' || this.get('googleplus').slice(0, 5) === 'https'|| this.get('googleplus')==='') {
            update_user_record.set('googleplus_link', this.get('googleplus'));
        } else {
            update_user_record.set('googleplus_link', http.concat(this.get('googleplus')));
        }
        if (this.get('pinterest').slice(0, 5) === 'http:' || this.get('pinterest').slice(0, 5) === 'https'|| this.get('pinterest')==='') {
            update_user_record.set('pinterest_link', this.get('pinterest'));
        } else {
            update_user_record.set('pinterest_link',http.concat(this.get('pinterest')));
        }
//        if (this.get('linkedin').slice(0, 5) === 'http:' || this.get('linkedin').slice(0, 5) === 'https'|| this.get('linkedin')==='') {
//            update_user_record.set('linkedin_link', this.get('linkedin'));
//        } else {
//            update_user_record.set('linkedin_link', http.concat(this.get('linkedin')));
//        }
        if (this.get('youtube').slice(0, 5) === 'http:' || this.get('youtube').slice(0, 5) === 'https'|| this.get('youtube')==='') {
            update_user_record.set('youtube_link', this.get('youtube'));
        } else {
            update_user_record.set('youtube_link',http.concat(this.get('youtube')));
        }
        update_user_record.set('region', this.get('location'));
        update_user_record.set('email', this.get('email'));
        update_user_record.set('password', this.get('password'));

        this.get('controllers.applicationFeedback').statusObserver(null, "Updated Successfully!!!");
        HubStar.store.save();
    },
            
    saveUpdateInterest: function() {
        var update_interest_record = HubStar.User.find(this.get('user.id'));

        update_interest_record.set('selected_topics', this.get('interests'));
    
        HubStar.store.save();
        this.setIntersetsArr(update_interest_record);
    },
    specialCharactersChecking: function(str) {

        var re = /^[a-zA-Z-][a-zA-Z0-9-]*$/;
        return re.test(str);
    },
    checkingValidInput: function(title) {
        if (title === null || title === "") {
        } else {
            if (title.indexOf(" ") !== -1) {
                title = title.split(' ').join('-');
            }
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
        this.setIntersetsArr(user);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function()
    {

        var id = this.checkingValidInput(this.selectedCollection.get('id'));
        var title = this.get("selectedCollection").get("title");
        this.get("selectedCollection").set("title", title);
        this.set("selectedTitle", title);
        this.get("selectedCollection").store.save();
        $(".Targeting_Object_front").attr("style", "display:inline-block");
        $(" #uploadArea").attr('style', "display:none");
        $(" #uploadObject").attr('style', "display:block");

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
    },
    setCollectionAttr: function() {
        collection_title_record = this.get('selectedCollection').get('title');
        collection_desc_record = this.get('selectedCollection').get('desc');
    },
    getCollectionAttr: function() {
        this.get('selectedCollection').set('title', collection_title_record);
        this.get('selectedCollection').set('desc', collection_desc_record);
    },
    setIntersetsArr: function(user) {
        interests = user.get('selected_topics');
        this.set('interests', user.get('selected_topics'));
        this.set('selected_topics', []);
        if (interests !== null && interests !== "" && interests !== undefined) {
            var interests = interests.split(",");
            for (var i = 0; i < interests.length; i++) {
                this.get('selected_topics').pushObject({interests: interests[i]});

            }
        }
    },
//    isFollowed: function()
//    {
//        if (this.checkFollowStatus())
//        {
//            this.set('follow_status', true);
//        }
//        else {
//            this.set('follow_status', false);
//        }
//    },
//    checkFollowStatus: function()
//    {
//        var isFollow = false;
//        var followers = this.get("model").get("followers");
//        for (var i = 0; i < followers.get('length'); i++) {
//            var follower_id = followers.objectAt(i).get("follower_id");
//            if (follower_id === localStorage.loginStatus)
//            {
//                isFollow = true;
//                break;
//            }
//        }
//        return isFollow;
//    },
    uploadUserPhoto: function() 
     {
 
    }

}



);
