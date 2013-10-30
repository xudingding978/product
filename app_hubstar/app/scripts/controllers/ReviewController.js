
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
    reviewList: false,
    //currentUserID:"",
    reviewDate: "",
    review_id: null,
    isReply: false,
    profileName: "",
    replyContent:"",
    needs: ['profile', 'applicationFeedback', 'user'],
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
            var reviews = this.get("controllers.profile").get('reviews');
            var reviewUserPhoto = this.get("currentUser").get('photo_url_large');
            var reviewUserID = this.get("currentUser").get('id');

            var reviewStarValue = $('#post-star-rating').text();
            var reviewStarValueLength = reviewStarValue * 20;
            var reviewUserName = this.get("currentUser").get('first_name') + this.get("currentUser").get('last_name');
            var reviewDate = new Date();
            var reviewId = localStorage.loginStatus + createReviewid();
            var optional = this.get("controllers.profile").get("currentUserID");



            var tempReview = HubStar.Review.createRecord({"review_user_photo_url": reviewUserPhoto,
                "review_user_id": reviewUserID, "review_user_name": reviewUserName, "review_content": reviewContent, "review_time_stamp": reviewDate.toString(), "optional": optional, "review_id": reviewId, "review_star_rating_value": reviewStarValue, "review_length": reviewStarValueLength});
            reviews.insertAt(0, tempReview);
            reviews.store.save();
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

    }, 
             addReviewReply: function(reviewID) {

        var replyContent = this.get('replyContent'); //replyContent is just the user input txt, it is not a whole reply object
        if (replyContent) {
            this.set("isReply", false);
            var replyUserID = this.get("currentUser").get('id');
            var replyDate = new Date();
            var ownerID =this.get("controllers.profile").get('currentUserID');
            var newStyleImage = "";
            var imageStyleName = "";
            if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
            {
                newStyleImage = this.get("newStyleImageSource");
            }
            else
            {
                newStyleImage = null;
            }
            if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
            {
                imageStyleName = this.get('newStyleImageName');

            }
            else
            {
                imageStyleName = "";
            }
            var imageName = "";
            var imageType = "";
            if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var replyReviewID = createReviewid();
            var tempReply = [replyUserID, replyDate.toString(), replyContent, ownerID, newStyleImage, imageType, imageStyleName, replyReviewID, reviewID];

            tempReply = JSON.stringify(tempReply);
            var that = this;

            var dataNew = new Array();
            requiredBackEnd('reviews', 'CreateReviewReply', tempReply, 'POST', function(params) {
                that.set("isReply", true);
                for (var i = 0; i < that.get("controllers.profile").get('reviews').get("length"); i++)
                {
                    if (that.get("controllers.profile").get('reviews').objectAt(i).get("review_id") === params["review_id"])
                    {

                        dataNew["review_reply_id"] = params["replyReviewCollection"][0]["review_reply_id"];
                        dataNew["review_user_id"] = params["replyReviewCollection"][0]["review_user_id"];
                        dataNew["review_time_stamp"] = params["replyReviewCollection"][0]["review_time_stamp"];
                        dataNew["review_msg"] = params["replyReviewCollection"][0]["review_msg"];
                        dataNew["review_user_name"] = params["replyReviewCollection"][0]["review_user_name"];
                        dataNew["review_photo_url_large"] = params["replyReviewCollection"][0]["review_photo_url_large"];
                        dataNew["review_url"] = params["replyReviewCollection"][0]["review_url"];
                        dataNew["review_enableToEdit"] = false;

//                        var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount") + 1;
//                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);

                        if (params["replyReviewCollection"][0]["review_user_id"] === localStorage.loginStatus)
                        {
                            dataNew["isUserself"] = true;
                        }
                        if (params["replyReviewCollection"][0]["review_url"] !== null)
                        {
                            dataNew["isUrl"] = true;
                        }
                        else
                        {
                            dataNew["isUrl"] = false;
                        }


                        if (that.get("controllers.profile").get('reviews').objectAt(i).get("replyReviewCollection") !== undefined)
                        {
                            that.get("controllers.profile").get('reviews').objectAt(i).get("replyReviewCollection").insertAt(0, dataNew);
                        }
                        else
                        {
                           that.get("controllers.profile").get('reviews').objectAt(i).set("replyReviewCollection", dataNew);
                        }
                        dataNew["replyReviewCollection"] = new Array();

                    }
                    that.set("isUploadPhoto", false);
                }
                dataNew = new Array();
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
                that.set('replyContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });


            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reloadItems");

            }, 200);
        }
    }

});
