
HubStar.ReviewController = Ember.Controller.extend({
    rateTime: false,
    review_user_photo_url: "",
    currentUser: "",
    review_user_name: "",
    review_content: "",
    review_time_stamp: "",
    review_star_rating_value: null,
    review_length: "",
    profile: "",
    reviewList: false,
    //currentUserID:"",
    reviewDate: "",
    review_count: null,
    isSingle: false,
    needs: ['profile'],

    init: function()
    {

        if (localStorage.loginStatus) {

            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            this.set('review_user_photo_url', currentUser.get('photo_url_large'));
            this.set('review_user_name', currentUser.get('first_name') + currentUser.get('last_name'));
           // this.set('review_star_value', $('#example-rating-1').text());
            this.set('review_length', this.get("controllers.profile").get('reviews').get("length"));

        }

        this.set("profile", this.get("controllers.profile").get('currentUserID'));

    },
    rateStar: function(id) {
     //   console.log(this.get("controllers.profile").get("currentUserID"));
//console.log(HubStar.get("review_star_value"));
    },
    reviewCancel: function() {
        this.get("controllers.profile").set("rateTime", false);

    },
    reviewPost: function(id) {

        if (this.get("controllers.profile").get('reviews') !== 0) {
            this.set("review_count", this.get("controllers.profile").get('reviews').get("length"));
            var reviewContent = this.get('review_content');
        }
        
        if (reviewContent) {
            var reviews = this.get("controllers.profile").get('reviews');
            var reviewUserPhoto = this.get("currentUser").get('photo_url_large');
            var reviewUserID = this.get("currentUser").get('id');
           
            
            var reviewStarValue=parseInt($('#example-rating-1').text());
            
           console.log(reviewStarValue);
            var reviewUserName = this.get("currentUser").get('first_name') + this.get("currentUser").get('last_name');
            var reviewDate = new Date();
            var reviewCount = this.get("review_count");
            var optional = this.get("controllers.profile").get("currentUserID");

        }
        var tempReview = HubStar.Review.createRecord({"review_user_photo_url": reviewUserPhoto,
            "review_user_id": reviewUserID, "review_user_name": reviewUserName, "review_content": reviewContent, "review_time_stamp": reviewDate.toString(),"review_count": reviewCount, "optional": optional, "review_star_rating_value": reviewStarValue});
        reviews.insertAt(0, tempReview);
        console.log(tempReview);
        reviews.store.save();
        this.set('reviewContent', "");
         this.get("controllers.profile").set("rateTime", false);
        
           $(window).scrollTop(1500);
           $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
        
        this.get("controllers.profile").set('partnerTag', false);
        this.get("controllers.profile").set('collectionTag', false);
     this.get("controllers.profile").set('followerProfileTag', false);
         this.get("controllers.profile").set('reviewTag', true);
         


    },
    getReviewsById: function(id)
    {
        // console.log(id);
        var profile = HubStar.Profile.find(id);
        var reviews = profile.get('reviews');

    }
    
   
    
//            
//    linkingUser: function(id) {
//            
//            self.location="#/users/"+id;
//
//    },
//    getReviewsById: function(id)
//    {
//        //console.log(id);
//        var profile = HubStar.Profile.find(id);
//        var reviews = profile.get('reviews');
//        this.set('mega', mega);
//        this.set('thisComments', comments);
//    },
//    deleteComment: function(object) {
//        var message = "Do you wish to delete this comment ?";
//        this.set("message", message);
//        this.set('makeSureDelete', true);
//        if (this.get('willDelete')) {
//            this.getCommentsById(this.get('content').id);
//            var comments = this.get("thisComments");
//            HubStar.get('data').deleteRecord();
//            comments.store.save();
//            this.cancelDelete();
//        } else {
//            this.set('willDelete', true);
//            HubStar.set('data', object);
//        }
//    },
//    cancelDelete: function() {
//        this.set('willDelete', false);
//        this.set('makeSureDelete', false);
//        HubStar.set('data', null);
//    },
//    addLike: function(id)
//    {
//        var mega = HubStar.Mega.find(id); 
//        var type = mega.get("type");
//          var people_like = mega.get("people_like");
//          if (people_like === null || people_like === undefined) {
//            people_like = "";
//        }
//        if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
//        {
//            if (people_like.indexOf(localStorage.loginStatus) !== -1)
//            {
//                this.count = mega.get('likes_count');
//                
//            }
//            else{     
//                var likeArray = [localStorage.loginStatus,id,type];
//                 likeArray=JSON.stringify(likeArray);
//                 var that = this;
//                    requiredBackEnd('megas', 'addlike', likeArray, 'POST', function(params) {
//                        params = params+"";
//                        var like = params.split(",");
//                        mega.set("likes_count", like.length);
//                        mega.set("people_like",params);
//                        that.count = like.length;
//                        //console.log(that.count);
//                        //console.log("sssssssssssssssssssss");
//                    }); 
//            }
//        }
//    }, 
//
//    pushComment: function(comment)
//    {
//        var tempurl = getRestAPIURL();
//        $.ajax({
//            url: tempurl + '/megas/addcomment',
//            type: 'POST',
//            data: JSON.stringify(comment),
//            success: function() {
//            }
//        });
//    }
});
