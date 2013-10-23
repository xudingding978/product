
HubStar.ReviewController = Ember.Controller.extend({
    rateTime: false,
    review_user_photo_url: "",
    currentUser: "",
    review_user_name: "",
    review_content: "",
    review_time_stamp: "",
    review_star_rating_value: "",
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
            this.set("review_count", this.get("controllers.profile").get('reviews').get("length") + 1);
            var reviewContent = this.get('review_content');
        }

        if (reviewContent) {
            var reviews = this.get("controllers.profile").get('reviews');
            var reviewUserPhoto = this.get("currentUser").get('photo_url_large');
            var reviewUserID = this.get("currentUser").get('id');
            var reviewStarValue = $('#example-rating-1').text();
            var reviewUserName = this.get("currentUser").get('first_name') + this.get("currentUser").get('last_name');
            var reviewDate = new Date();
            var reviewCount = this.get("review_count");
            var optional = this.get("controllers.profile").get("currentUserID");

            var averageReview = (parseInt(this.get("controllers.profile").get('profile_average_review')) + parseInt(reviewStarValue)) / (this.get("controllers.profile").get('reviews').get("length") + 1);
            console.log(reviewStarValue);
            console.log(parseInt(this.get("controllers.profile").get('profile_average_review')));
            console.log(averageReview);
            console.log(this.get("controllers.profile").get('profile_average_review'));
           // this.get("controllers.profile").set('profile_average_review', this.get("controllers.profile").get("currentUserID"));
            this.saveStarValue();
        }
        var tempReview = HubStar.Review.createRecord({"review_user_photo_url": reviewUserPhoto,
            "review_user_id": reviewUserID, "review_user_name": reviewUserName, "review_content": reviewContent, "review_time_stamp": reviewDate.toString(), "review_count": reviewCount, "optional": optional, "review_star_rating_value": reviewStarValue});
        reviews.insertAt(0, tempReview);
        
        console.log(tempReview);
        reviews.store.save();
        //    HubStar.store.save();
       
        this.set('reviewContent', "");
        this.get("controllers.profile").set("rateTime", false);

        $(window).scrollTop(1500);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
         console.log("ffffffffffffffffffffff");
        this.get("controllers.profile").set('partnerTag', false);
        this.get("controllers.profile").set('collectionTag', false);
        this.get("controllers.profile").set('followerProfileTag', false);
        this.get("controllers.profile").set('reviewTag', true);
console.log("dddddddddddddddddddddddddddd");
//       setTimeout(function() {
//            $('#masonry_user_container').masonry("reload");
//        }, 200);

    },
    saveStarValue: function() {
        console.log(this.get('averageReview'));
    },
    getReviewsById: function(id)
    {
        // console.log(id);
        var profile = HubStar.Profile.find(id);
        var reviews = profile.get('reviews');

    }


});
