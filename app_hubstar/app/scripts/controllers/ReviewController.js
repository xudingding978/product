
HubStar.ReviewController = Ember.Controller.extend({
    rateTime: false,
    reviews: "",
    review_user_photo_url: "",
    currentUser: "",
    review_user_name: "",
    review_content: "",
    review_time_stamp: "",
    review_star_rating_value: null,
    review_length: "",
    profile: "",
    replyReviewCollection:[],
    reviewList: false,
    //currentUserID:"",
    reviewDate: "",
    review_id: null,
   // isReply: true,
    profileName: "",
    needs: ['profile', 'applicationFeedback', 'user', 'reviewList'],
    init: function()
    {

        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            this.set('review_user_photo_url', currentUser.get('photo_url_large'));
            this.set('review_user_name', currentUser.get('first_name') + currentUser.get('last_name'));
        }
        this.set("profile", this.get("controllers.profile").get('currentUserID'));
        this.set("profileReview", this.get("controllers.profile").get('reviews'));
        this.set("profileName", this.get("controllers.profile").get('profile_name'));
    },
                      
    reviewCancel: function() {
        this.get("controllers.profile").set("rateTime", false);
//        if (this.get("controllers.profile").get('isInreview') === true)
//        {
//            this.get("controllers.profile").set('reviewTag', true);
//            this.get("controllers.profile").set('isInreview', false);
//        }

    },
    reviewPost: function(id) {
        if (this.get("controllers.profile").get('reviews') !== 0) {

            var reviewContent = this.get('review_content');
        }
        if (reviewContent) {
           
            var reviewUserPhoto = this.get("currentUser").get('photo_url_large');
            var reviewUserID = this.get("currentUser").get('id');
            var reviewStarValue = $('#post-star-rating').text();
            var reviewStarValueLength = reviewStarValue * 20;
            var reviewUserName = this.get("currentUser").get('first_name') + this.get("currentUser").get('last_name');
            var replyReviewCollection = this.get("replyReviewCollection");
            var reviewDate = new Date();
            var reviewId = localStorage.loginStatus + createReviewid();
            var optional = this.get("controllers.profile").get("currentUserID");
            var tempReview = HubStar.Review.createRecord({"review_user_photo_url": reviewUserPhoto,
                "review_user_id": reviewUserID, "review_user_name": reviewUserName, "review_content": reviewContent, "review_time_stamp": reviewDate.toString(), "optional": optional, "review_id": reviewId, "review_star_rating_value": reviewStarValue, "review_length": reviewStarValueLength, "replyReviewCollection": replyReviewCollection});
            this.get("controllers.profile").get('reviews').insertAt(0, tempReview);      
            HubStar.store.save();
            this.get("controllers.profile").set("profileReviewStatistics", this.get("controllers.profile").get('profileReviewStatistics') + 1);
            this.set('reviewContent', "");
            this.get("controllers.profile").set("rateTime", false);

            $(window).scrollTop(1500);
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#reviewList').addClass('selected-user-stats');

            this.get("controllers.profile").set('partnerTag', false);
            this.get("controllers.profile").set('collectionTag', false);
            this.get("controllers.profile").set('followerProfileTag', false);
            this.get("controllers.profile").set('reviewTag', true);

  
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
 
        }
        else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please add some review!.", "warnning");
        }

    }

});
