
HubStar.ReviewController = Ember.Controller.extend({
    rateTime: false,
    review_user_photo_url: "",
    currentUser:"",
    review_user_name:"",
    review_content:"",
    review_time_stamp:"",
    review_star_value:"",
    review_count:"",
    profile:null,
    
    
    needs:['profile'],
//    commentLength: null,
//    thisComments: null,
//    stringFiedTime_stamp: null,
//    mega: null,
//    count:null,
    init: function()
    {

        if (localStorage.loginStatus) {

            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            this.set('review_user_photo_url', currentUser.get('photo_url_large'));
            this.set('review_user_name', currentUser.get('first_name')+currentUser.get('last_name'));
            this.set('review_star_value', this.get('review_star_value'));
             this.set('review_count', this.get('review_count'));
             
        }

    },
    reviewCancel: function() {
        this.get("controllers.profile").set("rateTime", false);
        console.log(this.get('mega'));
       
    },
    reviewPost: function() {

     var reviewContent = this.get('review_content');
         console.log(reviewContent);
        if (reviewContent) {
             var reviews = this.get("controllers.profile").get('model').get('reviews');
            var reviewUserPhoto= this.get("currentUser").get('photo_url_large');
            var reviewUserID = this.get("currentUser").get('id');
            var reviewUserName = this.get("currentUser").get('first_name') + this.get("currentUser").get('last_name');
            var reviewDate = new Date();
            var tempReview= HubStar.Review.createRecord({"review_user_photo_url": reviewUserPhoto,
                "review_user_id": reviewUserID, "review_user_name": reviewUserName, "review_content": reviewContent, "review_time_stamp": reviewDate.toString()});
            reviews.insertAt(0, tempReview);
            console.log(reviewUserPhoto);
            console.log(reviewUserID);
            console.log(reviewUserName);
            console.log(reviewDate);
            reviews.store.save();
            this.set('reviewContent', "");
            
            $('#addreviewBut').attr('style', 'display:block');
            $('#reviewBox').attr('style', 'display:none');







        }
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
