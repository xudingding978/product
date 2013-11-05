
HubStar.ReviewListSingleController = Ember.Controller.extend({
    currentUser: "",
    review_length: "",
    profile: "",
    review_id: null,
    profileReview:"",
   replyReviewContent: "",
    isUploadPhoto: false,
    isEdit: true,
    isPosting: true,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewList'],
    init: function()
    {
    if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
//            var currentUser = HubStar.User.find(localStorage.loginStatus);
//            this.set('currentUser', currentUser);
        }

    },
   
    addLike: function()
    {
        console.log(this.get('model'));
        var review = this.get('model');

        var review_people_like = review.get("review_people_like");

  
        if (review_people_like === null || review_people_like === 'undefined') {
            review_people_like = "";
        }
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
        {
            if (review_people_like.indexOf(localStorage.loginStatus) !== -1)
            {
            }
            else {
                review.set('review_people_like', review_people_like + ',' + localStorage.loginStatus);
                review.set('review_like_count', review.get('review_like_count') + 1);

                 requiredBackEnd('reviews', 'Update', review, 'POST', function(params) {
      
                 });
                 }

            }
        
    },
    addReviewReply: function(reviewID) {
       
       
      var replyContent = this.get("replyReviewContent"); //replyContent is just the user input txt, it is not a whole reply object
//      var replyContent = $('#'+ reviewID).val();
        if (replyContent) {
            //      this.set("isReply", false);
            var replyUserID = this.get("currentUser").get('id');
            var replyDate = new Date();
            var ownerID = this.get("controllers.profile").get('currentUserID');
            var newStyleImage = "";
            var imageStyleName = "";
          
//            if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
//            {
//                newStyleImage = this.get("newStyleImageSource");
//            }
//            else
//            {
//                newStyleImage = null;
//            }
//            if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
//            {
//                imageStyleName = this.get('newStyleImageName');
//
//            }
//            else
//            {
//                imageStyleName = "";
//            }
            var imageName = "";
            var imageType = "";
            if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var replyReviewID = createReviewid();
            var tempReply = HubStar.Reply.createRecord({'review_reply_id': replyReviewID, "review_user_id": replyUserID, "review_time_stamp": replyDate.toString(),
            'review_msg': replyContent, 'review_url': null, 'review_user_name': this.get("currentUser").get('display_name'), 'review_photo_url_large': this.get("currentUser").get('photo_url_large'),
            'review_enableToEdit': false, 'optional': this.get('model').get('optional')+ '/' + this.get('model').get('review_id')});
//            var tempReply = [replyUserID, replyDate.toString(), replyContent, ownerID, newStyleImage, imageType, imageStyleName, replyReviewID, reviewID];
//            tempReply = JSON.stringify(tempReply);
//            var that = this;
//            var dataNew = new Array();
//            var dataArray = [this.get('model').get('optional'), this.get('model').get('review_id'), tempReply];
//            requiredBackEnd('reviews', 'CreateReviewReply', JSON.stringify([this.get('model').get('optional'), this.get('model').get('review_id'), tempReply]), 'POST', function(params) {
                this.get('model').get('reply_reviews').insertAt(0, tempReply);
//            });
            HubStar.store.save();

            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reloadItems");

            }, 200);
        }
        
    },
    close: function() {
       this.set("replyReviewContent", "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }

});
