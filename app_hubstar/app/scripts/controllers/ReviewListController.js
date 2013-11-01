
HubStar.ReviewListController = Ember.Controller.extend({
    rateTime: false,
    currentUser: "",
    review_length: "",
    profile: "",
    review_id: null,
    profileReview:"",
    profileName: "",
   replyReviewContent: "",
    reviewContent: null,
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
      
        this.getReviewId(HubStar.Review.find(this.get("profile")));

    },
    setUserReviews: function(reviews) {

        this.getReviewId(reviews); // It is used to get the mesage model

    },
    getReviewId: function(model) {
        this.set("isPosting", true);
        this.set("model", model);
        this.set('clientID', model.id);
        this.set('loadingTime', true);
        var data = this.get('clientID');
        // data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('reviews', 'Read', data, 'POST', function(params) {

          that.set("reviewContent", []);
            for (var i = 0; i < params.length; i++)
            {
                //First reply message and it is the last one of message and it contail the reply message collection
                dataNew["review_id"] = params[i]["review_id"];
                dataNew["review_user_id"] = params[i]["review_user_id"];
                dataNew["review_user_photo_url"] = params[i]["review_user_photo_url"];
                dataNew["review_user_name"] = params[i]["review_user_name"];
                dataNew["review_content"] = params[i]["review_content"];
                dataNew["review_time_stamp"] = params[i]["review_time_stamp"];
                dataNew["review_star_rating_value"] = params[i]["review_star_rating_value"];
                dataNew["review_length"] = params[i]["review_length"];
                dataNew["review_like_count"] = params[i]["review_like_count"];
                dataNew["review_people_like"] = params[i]["review_people_like"];
                dataNew["review_is_edit"] = false;
                dataNew["review_is_reply"] = true;
                dataNew["review_is_delete"] = false;
                //  dataNew["replyCount"] = params[i]["replyReviewCollection"].length - 1;

                dataNew["replyReviewCollection"] = new Array();  // replyMessageCollection is used to store all the replyMessage except the last one which is the first Reply.
                for (var j = 0; j < params[i]["replyReviewCollection"].get("length"); j++)
                {
                    var dataReply = new Array();
 
                    dataReply["review_reply_id"] = params[i]["replyReviewCollection"][j]["review_reply_id"];
                    dataReply["review_user_id"] = params[i]["replyReviewCollection"][j]["review_user_id"];
                    dataReply["review_time_stamp"] = params[i]["replyReviewCollection"][j]["review_time_stamp"];
                    dataReply["review_msg"] = params[i]["replyReviewCollection"][j]["review_msg"];
                    dataReply["review_url"] = params[i]["replyReviewCollection"][j]["review_url"];
                    dataReply["review_user_name"] = params[i]["replyReviewCollection"][j]["review_user_name"];
                    dataReply["review_photo_url_large"] = params[i]["replyReviewCollection"][j]["review_photo_url_large"];
                    dataReply["review_enableToEdit"] = false;

                    if (params[i]["replyReviewCollection"][j]["review_url"] !== null)
                    {
                        dataReply["isUrl"] = true;
                    }
                    else
                    {
                        dataReply["isUrl"] = false;
                    }
                    if (params[i]["replyReviewCollection"][j]["review_user_id"] === localStorage.loginStatus)
                    {
                        dataReply["isUserself"] = true;  // isUserself is used to judge whether the reply message is written by the current login user
                    }
                    dataNew["replyReviewCollection"][j] = dataReply;
                }
                that.get("reviewContent").pushObject(dataNew);
                dataNew = new Array();
            }
            that.set('loadingTime', false);
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
            

        });

    },
    addLike: function(event)
    {
        var profile = this.get('model.id');
        console.log(event);
        var review_people_like = event.get("review_people_like");

        console.log(review_people_like);
        if (review_people_like === null || review_people_like === undefined) {
            review_people_like = "";
        }
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
        {
            if (review_people_like.indexOf(localStorage.loginStatus) !== -1)
            {
            }
            else {
                event.set('review_people_like', event.get('review_people_like') + ',' + localStorage.loginStatus);
                event.set('review_like_count', event.get('review_like_count') + 1);

                HubStar.store.save();

            }
        }
    },
    addReviewReply: function(reviewID) {
       
       
      var replyContent = this.get("replyReviewContent"); //replyContent is just the user input txt, it is not a whole reply object
//      var replyContent = $('#'+ reviewID).val();
      console.log(replyContent);
        if (replyContent) {
            //      this.set("isReply", false);
            var replyUserID = this.get("currentUser").get('id');
            var replyDate = new Date();
            var ownerID = this.get("controllers.profile").get('currentUserID');
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
                //          that.set("isReply", true);

                for (var i = 0; i < that.get('reviewContent').get("length"); i++)
                {
                    if (that.get('reviewContent').objectAt(i).get("review_id") === params["review_id"])
                    {
                        
                        dataNew["review_reply_id"] = params["replyReviewCollection"][0]["review_reply_id"];
                        dataNew["review_user_id"] = params["replyReviewCollection"][0]["review_user_id"];
                        dataNew["review_time_stamp"] = params["replyReviewCollection"][0]["review_time_stamp"];
                        dataNew["review_msg"] = params["replyReviewCollection"][0]["review_msg"];
                        dataNew["review_user_name"] = params["replyReviewCollection"][0]["review_user_name"];
                        dataNew["review_photo_url_large"] = params["replyReviewCollection"][0]["review_photo_url_large"];
                        dataNew["review_url"] = params["replyReviewCollection"][0]["review_url"];
                        dataNew["review_enableToEdit"] = false;

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


                        if (that.get('reviewContent').objectAt(i).get("replyReviewCollection") !== undefined)
                        {
                            that.get('reviewContent').objectAt(i).get("replyReviewCollection").insertAt(0, dataNew);
                        }
                        else
                        {
                            that.get('reviewContent').objectAt(i).set("replyReviewCollection", dataNew);
                        }
                  //      dataNew["replyReviewCollection"] = new Array();
                       console.log(dataNew);
                    }
                    that.set("isUploadPhoto", false);
                }
                dataNew = new Array();   
                that.set("replyReviewContent", "");
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
              
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });


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
