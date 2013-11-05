
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
      
    //    this.getReviewId(HubStar.Review.find(this.get("profile")));

},
    setUserReviews: function(reviews) {

        this.getReviewId(reviews); // It is used to get the mesage model

    }
//    getReviewId: function(model) {
//        this.set("isPosting", true);
//        this.set("model", model);
//        this.set('clientID', model.get("id"));
//        this.set('loadingTime', true);
//        var data = this.get('clientID');
//        // data = JSON.stringify(data);
//        var dataNew = new Array();
//        var that = this;
////        requiredBackEnd('reviews', 'Read', data, 'POST', function(params) {
////        console.log(params);
////        //  that.set("reviews", []);
//////            for (var i = 0; i < params.length; i++)
//////            {
//////                //First reply message and it is the last one of message and it contail the reply message collection
//////                
//////                //  dataNew["replyCount"] = params[i]["reply_reviews"].length - 1;
//////
//////                dataNew["reply_reviews"] = new Array();  // replyMessageCollection is used to store all the replyMessage except the last one which is the first Reply.
//////
//////                    var dataReply = new Array();
////// 
//////                   
//////
//////                    if (params[i]["reply_reviews"][j]["review_url"] !== null)
//////                    {
//////                        dataReply["isUrl"] = true;
//////                    }
//////                    else
//////                    {
//////                        dataReply["isUrl"] = false;
//////                    }
//////                    if (params[i]["reply_reviews"][j]["review_user_id"] === localStorage.loginStatus)
//////                    {
//////                        dataReply["isUserself"] = true;  // isUserself is used to judge whether the reply message is written by the current login user
//////                    }
//////                    dataNew["reply_reviews"][j] = dataReply;
//////                }
//////  
////
////                that.get("model").set("reviews", params);
//////                dataNew = new Array();
//////            }
////            that.set('loadingTime', false);
////            setTimeout(function() {
////                $('#masonry_user_container').masonry("reload");
////            }, 200);
////            
////             setTimeout(function() {
////                $('#masonry_user_container').masonry("reloadItems");
////                $("#content_4").mCustomScrollbar({
////                    scrollButtons: {
////                        enable: false,
////                        scrollSpeed: "auto"
////                    },
////                    advanced: {
////                        updateOnBrowserResize: true,
////                        updateOnContentResize: true,
////                        autoScrollOnFocus: false,
////                        normalizeMouseWheelDelta: false
////                    },
////                    autoHideScrollbar: true,
////                    mouseWheel: true,
////                    theme: "dark-2",
////                    set_height: 300
////                });
////            }, 200);
////        
////        
////    });
//    }

});
