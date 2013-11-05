
HubStar.ReviewListController = Ember.Controller.extend({
    rateTime: false,
    currentUser: "",
    review_length: "",
    profile: "",
    review_id: null,
    profileReview:"",
    profileName: "",
   replyReviewContent: "",
    isUploadPhoto: false,
    isEdit: true,
    isPosting: true,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user'],
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
    setUserReviews: function(reviews) {

        this.getReviewId(reviews); // It is used to get the mesage model

    }


});
