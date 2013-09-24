
var interest_record;
var collection_title_record;
var collection_desc_record;
var about_record;

HubStar.UserController = Ember.Controller.extend({
    user: null,
    identifier: "",
    uploadMode: null,
    newCollectionName: null,
    collections: [],
    temp: [],
    followerTag: false,
    followingTag: false,
    newDesc:'',
    newTitle:'',
    selectedDesc: "",
    selectedTitle: "",
    display_name: "",
    userTage: true,
    currentUserID: "",
    needs: ['photoCreate', 'applicationFeedback', 'userFollowers', 'userFollowings', 'application', 'platformBar','collection','htmlEditor'],
    facebook: "",
    twitter: "",
    follow_status: false,
    following_status: false,
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    location: "",
    email: "",
    password: "",
    makeSureDelete: false,
    updateOrCreate: true,
    collectionTag: true,
    selectedCollection: "",
    profileSelectionStatus: "Collections",
    selected_topics: [],
    interests: "",
    userCollectionStatistics: "",
    userFollowingStatistics: "",
    userFollowerStatistics: "",
    editingInterest: false,
    interest: "interest",
    is_authentic_user: false,
    aboutMe:"aboutMe",
  // about_me:"",
    first_name:"",
    last_name:"",
    is_Photoclick: false,
    is_click: false,
    photo_url_large: "",
    photo_url: "",
    cover_url: "",
    isPhotoUploadMode: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    currentWidth: '',
    currentHeight: '',
    CurrentImageSize: "",
    RequiredImageSize: "",
    UploadImageMode: "",
    isUserSelf: false,
    interestsActive:false,
    init: function()
    {
        this.setUser();

    },
    isUserSelfOrNot: function(currentUserID) {
        this.set("isUserSelf", false);
        if (currentUserID === localStorage.loginStatus) {
            this.set("isUserSelf", true);
        }
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
        this.set("model", user);
        this.set("user", user);
        this.set("collections", user.get("collections"));
        this.set("description", user.get("description"));
        this.set("display_name", user.get("display_name"));

         this.set("first_name", user.get("first_name"));
          this.set("last_name", user.get("last_name"));

        this.set("identifier", user.get("identifier"));
        this.set("about_me", user.get("about_me"));
        this.set("facebook", user.get("facebook_link"));
        this.set("twitter", user.get("twitter_link"));
        this.set("googleplus", user.get("googleplus_link"));
        this.set("pinterest", user.get("pinterest_link"));
        this.set("linkedin", user.get("linkedin_link"));
        this.set("youtube", user.get("youtube_link"));
        this.set("location", user.get("region"));
        this.set("email", user.get("email"));
        this.set("password", user.get("password"));
        

        if(user.get('cover_url')===null||user.get('cover_url')===""||user.get('cover_url')===undefined){
                   user.set('cover_url', 'http://develop.devbox.s3.amazonaws.com/profile_cover/default/defaultcover6.jpg');
               }
        else
               {//this.set('cover_url', HubStar.get('photoDomain')+'/users/'+user.get('id')+'/user_cover/user_cover');
                   this.set("cover_url", user.get("cover_url"));
               }
         this.set("photo_url", user.get("photo_url"));
          this.set("photo_url_large", user.get("photo_url_large"));
//        this.set('photo_url', HubStar.get('photoDomain')+'/users/'+user.get('id')+'/user_cover_small/user_cover');
//        this.set('photo_url_large', HubStar.get('photoDomain')+'/users/'+user.get('id')+'/user_picture/user_picture');


        this.get('controllers.applicationFeedback').set('photo_url', this.get('photo_url_large'));
//        var ac = this.get("controllers.application");
//        var pb = this.get("controllers.platformBar");
//        ac.changeImage(this.get('photo_url_large'));
//        pb.changeImage(this.get('photo_url_large'));

        this.isUserSelfOrNot(this.get("currentUserID"));

        this.isFollowed();
        if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
            this.setDesc(this.get("collections").objectAt(0).get("desc"));
            this.setTitle(this.get("collections").objectAt(0).get("title"));
        }

        var collections = user.get("collections");
        for (var i = 0; i < collections.get("length"); i++)
        {
            var col = collections.objectAt(i);
            if (col.get("collection_ids") !== undefined&&col.get("collection_ids") !== null && col.get("collection_ids") !== "") {
                var imgId = col.get("collection_ids").split(",").objectAt(0);
            }
        }
        if (this.get('editingInterest')===true) {
            this.set('editingInterest', false);
            this.set('interestsActive', false);
            $('#show_interest').animate({top: 298, height: 150}, 400,  function(){ $('.interesttags-container').css('height', '100px');});
            $('#interest_btn').addClass('icon-double-angle-up');
            $('#interest_btn').removeClass('icon-double-angle-down');
            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
                $('#interest_btn').css('display', 'block');
                $('.interesttags-container').css('height', '100px');
            }, 120);
        }
        this.initStastics(user);
        this.checkAuthenticUser();
        this.labelBarRefresh();
        this.userPhotoEditBackButton();
        this.userDashboardBackButton();
    },
    labelBarRefresh: function() {
        this.set("profileSelectionStatus", "Collections");
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');
        });
    },
    initStastics: function(user) {
        if (user.get("followers") !== null) {
            this.set('userFollowerStatistics', user.get("followers").get("length"));
        }
        else {
            this.set('userFollowerStatistics', 0);
        }
        if (user.get("followings") !== null) {
            this.set('userFollowingStatistics', user.get("followings").get("length"));
        }
        else {
            this.set('userFollowingStatistics', 0);
        }
        this.statstics();
    },
    statstics: function()
    {
        if (this.get("collections").get("length") !== 0) {
            this.set('userCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('userCollectionStatistics', 0);
        }
    },
    userDashboardButton: function(mode) {

        if (this.get('is_click') === false) {
            this.set('is_click', true);

            $('#user-board_right_front').hide();
            $('#user-board_right_back').show();
            $('#change_profile').hide();
            this.setUploadImageMode(mode);

        }

    },
    userDashboardBackButton: function() {
        if (this.get('is_click') === true) {
            this.set('is_click', false);

            $('#user-board_right_front').show();
            $('#user-board_right_back').hide();
            $('#change_profile').show();
            this.set('newStyleImageSource', "");
            this.set('newStyleImageName', "");
            this.set('CurrentImageSize', "");


        }
    },
    userPhotoEditButton: function(mode) {

        if (this.get('is_Photoclick') === false) {
            this.set('is_Photoclick', true);
            $('#flip-front').hide();
            $('#user-photo_left').hide();
            $('#user-photo_left-back').show();
            this.setUploadImageMode(mode);

        }

    },
    userPhotoEditBackButton: function() {
        if (this.get('is_Photoclick') === true) {
            this.set('is_Photoclick', false);
            $('#flip-front').show();
            $('#user-photo_left').show();
            $('#user-photo_left-back').hide();
            this.set('newStyleImageSource', "");
            this.set('newStyleImageName', "");
            this.set('CurrentImageSize', "");

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
    getCurrentPage: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        this.set('model', user);
        return user;
    },
    checkingIdisExsinting: function(id, postOrPut) {
        var isExsinting = true;
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
        return isExsinting;
    },
    toggleEditing: function(data, checkingInfo) {
        if (checkingInfo === "interest") {
            interest_record = data;
            this.set('editingInterest', !this.get('editingInterest'));
        
        } 
        else if (checkingInfo === "aboutMe") {
            about_record = data;
            this.set('editingAbout', !this.get('editingAbout'));
           
        }
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "interest") {
            this.set('editingInterest', !this.get('editingInterest'));
        }else if (checkingInfo === "aboutMe") {
            this.set('editingAbout', !this.get('editingAbout'));
        }

        this.saveUpdateInterest();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "interest") {
            this.set('interests', interest_record);
            this.set('editingInterest', !this.get('editingInterest'));
        } 
        else if (checkingInfo === "aboutMe") {
            this.set('about_me', about_record);
            this.set('editingAbout', !this.get('editingAbout'));
        }

    },
    submit: function()
    {

        var collectionController = this.get('controllers.collection');
        console.log(this.get('newTitle'));
        var collection = collectionController.getCreateCollection(this.get('newTitle'),this.get('newDesc'),  this.get("collections"));
        console.log(collection);
        
        if (collection !== null && collection !== "") {
            collection.set('type', 'user');
            collection.set('optional', this.get('model').get('id'));
            this.get("collections").insertAt(0, collection);
            HubStar.store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
            this.statstics();
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
        if (this.isInputValid())
        {
            update_user_record.set('collections', this.get('collections'));
            update_user_record.set('description', this.get('description'));
            update_user_record.set('display_name', this.get('display_name'));
            update_user_record.set('first_name', this.get('first_name'));
            update_user_record.set('last_name', this.get('last_name'));
          
            this.saveLink('facebook_link', 'facebook'); 
            this.saveLink('twitter_link','twitter');
            this.saveLink('googleplus_link', 'googleplus');
            this.saveLink('pinterest_link', 'pinterest');
            this.saveLink('linkedin_link','linkedin');
            this.saveLink('youtube_link', 'youtube');
            update_user_record.set('region', this.get('location'));
            update_user_record.set('email', this.get('email'));
            update_user_record.set('password', this.get('password'));
            
            this.get('controllers.applicationFeedback').statusObserver(null, "Updated Successfully!!!");
       
            HubStar.store.save();
        }
        else{
            this.get('controllers.applicationFeedback').statusObserver(null, "Please check you have already filled the mandatory field");
        }
    },
    isInputValid: function() {

        function checkObject(id, input, length, isUrlValid, isEmailValid, shouldInclude)
        {
            this.id = id;
            this.input = input;
            this.length = length;
            this.isUrlValid = isUrlValid;
            this.isEmailValid = isEmailValid;
            this.shouldInclude = shouldInclude;
      
        }
        var checkList = new Array();
        var result;
        var displayName = new checkObject("displayName", this.get('display_name'), 128, null, null, null,true);
        checkList.push(displayName);
        var email = new checkObject("email", this.get('email'), 128, null, true, null);
        checkList.push(email);
        
        var first_name = new checkObject("first_name", this.get('first_name'), 128, null, null, null);
        checkList.push(first_name);
        var last_name = new checkObject("last_name", this.get('last_name'), 128, null, null, null);
        checkList.push(last_name);
        
//        var about_me = new checkObject("about_me", this.get('about_me'), 4096, null, null, null);
//        checkList.push(about_me);
        var location = new checkObject("location", this.get('location'), 128, null, null, null);
        checkList.push(location);
        var facebook = new checkObject("facebook", this.get('facebook'), 128, true, null, "facebook");
        checkList.push(facebook);
        var twitter = new checkObject("twitter", this.get('twitter'), 128, true, null, "twitter");
        checkList.push(twitter);
        var googleplus = new checkObject("googleplus", this.get('googleplus'), 128, true, null, "plus.google");
        checkList.push(googleplus);
        var pinterest = new checkObject("pinterest", this.get('pinterest'), 128, true, null, "pinterest");
        checkList.push(pinterest);
        var linkedin = new checkObject("linkedin", this.get('linkedin'), 128, true, null, "linkedin");
        checkList.push(linkedin);
        var youtube = new checkObject("youtube", this.get('youtube'), 128, true, null, "youtube");
        checkList.push(youtube);
//        var password = new checkObject("password", this.get('password'), 128, null, null);
//        checkList.push(password);


        for (var i = 0; i < checkList.length; i++)
        {
            //       var patternUrl = /^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([\w]+)(.[\w]+){1,2}$/;

            var patternEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
            document.getElementById(checkList[i].id).style.border = '';

            if (checkList[i].input !== null && checkList[i].input.length > checkList[i].length)
            {
                result = false;
                document.getElementById(checkList[i].id).style.border = '2px solid red';
                break;
            }

if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name')
            {
                if( checkList[i].input===null ||checkList[i].input===""){
                result = false;
                document.getElementById(checkList[i].id).style.border = '2px solid red';
                break;
                }
            }


            if (checkList[i].input !== null && checkList[i].isUrlValid === true)
            {
                if (checkList[i].input.indexOf(checkList[i].shouldInclude) !== -1 || checkList[i].input === "") {
                    result = true;
                }
                else {
                    result = false;
                    document.getElementById(checkList[i].id).style.border = '2px solid red';
                    break;
                }
            }
            if (checkList[i].input !== null && checkList[i].isEmailValid === true)
            {

                if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
                    result = true;
                }
                else {
                    result = false;
                    document.getElementById(checkList[i].id).style.border = '2px solid red';
                    break;
                }
            }
        }
        return result;
    },
    saveLink: function(link_url,link) {//link =param; this,get('facebook')
                                                                            
        var http = "http://";
        var update_user_record = this.getCurrentUser();
        if (this.get(link) === null || this.get(link) === "")
        {
            this.get(link)  === "";      
            update_user_record.set(link_url, this.get(link));
            this.set(link,this.get(link)); 
        }
        else if (this.get(link).slice(0, 5) === 'https' || this.get(link).slice(0, 5) === 'http:') {
            update_user_record.set(link_url, this.get(link));
            
             this.set(link,this.get(link)); 
        } else if (this.get(link) !== "") {      
            update_user_record.set(link_url,http.concat(this.get(link)));
           this.set(link,http.concat(this.get(link))); 
        }
        return update_user_record;
    },
    saveUpdateInterest: function() {

        var checkString = this.get('interests').trim();
        if ((checkString.substring(checkString.length - 1, checkString.length) !== ',') && (!/,,/.test(checkString))) {
            var update_interest_record = HubStar.User.find(this.get('user.id'));
            interests = this.get('interests');
            var tempInterest = '';
            this.set('selected_topics', []);
            if (interests !== null && interests !== "" && interests !== undefined) {
                var interests = interests.split(",");
                for (var i = 0; i < interests.length; i++) {
                    this.get('selected_topics').pushObject({interests: interests[i].trim()});
                    tempInterest = tempInterest + ',' + interests[i].trim();
                }
            }
            this.set('interests', tempInterest.substring(1, tempInterest.length));
            update_interest_record.set('selected_topics', this.get('interests'));
              update_interest_record.set('about_me', editor.getValue());
            HubStar.store.save();
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "invalid input");
        }

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
            var tempCollection = this.get("selectedCollection");
            var delInfo = [tempCollection.id, this.get('model').get('id'), 'user'];
            delInfo = JSON.stringify(delInfo);
            requiredBackEnd('collections', 'delete', delInfo, 'POST', function(params) {
            });
            this.get("collections").removeObject(this.get("selectedCollection"));
            var user = this.getCurrentPage();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
        }
        this.statstics();
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
    //console.log("sssssssssssssssssssssssssssss");
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function()
    {
        this.get('selectedCollection').set('title',this.get('newTitle'));
        this.get('selectedCollection').set('desc',this.get('newDesc'));
        var collectionController = this.get('controllers.collection');
        console.log(this.get('selectedCollection'));
        var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
        collection.set('optional', this.get('model').get('id'));
        collection.set('type', 'user');
        this.set('selectedCollection', collection);
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
            'cover': 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png', "optional": this.get('model').get('id'), 'type': 'user'
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
        this.set('followingTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
    },
    selectFollowing: function(model) {
        this.set('profileSelectionStatus', 'Following');
        this.get('controllers.userFollowings').getClientId(model);
        this.set('followingTag', true);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    selectFollower: function(model) {
        this.set('profileSelectionStatus', 'Followers');
        this.get('controllers.userFollowers').getClientId(model);
        this.set('followingTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', true);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
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
    isFollowed: function()
    {


        var currentUser = HubStar.User.find(localStorage.loginStatus);
        if (currentUser.get('isLoaded')) {
            //console.log('is foollwwed ');
            this.get("controllers.userFollowers").checkFollowStatus(currentUser, this, null);
        }
        else {
            var that = this;
            currentUser.addObserver('isLoaded', function() {
                if (currentUser.get('isLoaded')) {
                    //console.log('is foollwwed ');
                    that.get("controllers.userFollowers").checkFollowStatus(currentUser, that, null);
                }
            });
        }

    },
    followThisUser: function() {
        var user_id = this.get('model').get('id');

        if (this.get("follow_status") === false) {
            //console.log(this.get("controllers.userFollowers"));
            this.get("controllers.userFollowers").followUser(user_id, this, null);
            //this.get('controllers.profile')
        } else {
            //console.log(this.get("controllers.userFollowers"));
            this.get("controllers.userFollowers").unFollowUser(user_id, this, null);
        }
    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
        var that = this;

        getImageWidth(src, function(width, height) {
            that.set('newStyleImageSource', src);
            that.set('newStyleImageName', name);
            that.set('currentWidth', width);
            that.set('currentHeight', height);
            if (that.get('newStyleImageSource') !== null && that.get('newStyleImageSource') !== "")
            {
                var size = " size is " + width + "x" + height;
                that.set('CurrentImageSize', size);

            }
        });
    },
    savePhotoUpdate: function()
    {
        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {
            var src = this.get('newStyleImageSource');
            var that = this;
            getImageWidth(src, function(width, height) {
                that.set('currentWidth', width);
                that.set('currentHeight', height);
                var data = {"RequireIamgeType": that.get('UploadImageMode')};

                requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {
                    if ((width >= params.width) && (height >= params.height))
                    {
                        var imageName = that.get('newStyleImageName').split('.');
                        var type = imageName[imageName.length - 1];

                        that.setTempImage();

                        $('#uploadStyleImg').attr("style", "display:block");
                        var data1 = {"newStyleImageSource": that.get('newStyleImageSource'),
                            'newStyleImageName': that.get('newStyleImageName'),
                            'mode': that.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                            'id': that.get('model.id'), 'type': type};
                        requiredBackEnd('users', 'updateStyleImage', data1, 'POST', function(params) {
                            $('#uploadStyleImg').attr("style", "display:none");
                            that.set('isPhotoUploadMode', false);
                            HubStar.store.save();
                        });
                        that.userPhotoEditBackButton();
                        that.userDashboardBackButton();
//                        that.get('controllers.applicationFeedback').set('photo_url', src);
                        that.get('controllers.applicationFeedback').statusObserver(null, "Update Successfully!!!");
                    }
                    else if (width < params.width || height < params.height) {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Please upload image size larger than  " + params.width + "x" + params.height + " !!!");
                        that.set('newStyleImageSource', "");
                        that.set('newStyleImageName', "");
                        that.set('CurrentImageSize', "");
                    }

                });
            });

        }

    },
    setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('UploadImageMode', mode);
        var data = {"RequireIamgeType": mode};
        var that = this;
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {

            var requiredSize = "Best Results Require A Minimum Image Size of " + params.width+ "px" + " x " + params.height + "px";
            that.set('RequiredImageSize', requiredSize);
        });
    },
    setTempImage: function() {
        var model = this.get('model');

        if (this.get('UploadImageMode') === "User Picture")
        {
            this.set('photo_url_large', this.get('newStyleImageSource'));
            this.set('newStyleImageName', 'user_picture');
            var ac = this.get("controllers.application");
            var pb = this.get("controllers.platformBar");
            ac.changeImage(this.get('photo_url_large'));
            pb.changeImage(this.get('photo_url_large'));
            this.get('controllers.applicationFeedback').set('photo_url', this.get('photo_url_large'));
            model.set('photo_url_large', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "User Cover") {

            this.set('cover_url', this.get('newStyleImageSource'));
            this.set('cover_url_small', this.get('newStyleImageSource'));
            this.set('newStyleImageName', 'user_cover');

            model.set('cover_url', this.get('newStyleImageSource'));
        }
    }



}



);
























