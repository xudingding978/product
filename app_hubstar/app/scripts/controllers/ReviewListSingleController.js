
HubStar.ReviewListSingleController = Ember.Controller.extend({
    currentUser: "",
    review_id: null,
    profileReview: "",
    userPhoto: "",
    replyReviewContent: "",
    review_content: "",
    currentOwner: "",
    review_is_edit: false,
    isUserself: false,
    isSelf: false,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewList', 'review'],
    init: function()
    {
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }

    },
    addLike: function()
    {

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
    editReview: function() {

        this.set("review_is_edit", !this.get('review_is_edit'));
        this.set("review_content", this.get("model").get('review_content'));
        this.transitionToRoute('review', {id: this.get("model").get("review_id")});
    },
    saveReview: function() {
        var reviewDate = new Date();
        this.get("model").set('review_content', this.get('review_content'));
        this.get("model").set('review_time_stamp', reviewDate.toString());
        requiredBackEnd('reviews', 'Update', this.get("model"), 'POST', function(params) {
        });
        this.set("review_is_edit", !this.get('review_is_edit'));
        
    },
    cancelReview: function() {
        this.set("review_is_edit", !this.get('review_is_edit'));
    },
    removeReview: function() {
        this.set('message', "Remove this Review?");
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set("delete_id", this.get('model').get("review_id"));
    },
    deleteConfirm: function()
    {
        this.deleteSelectedReview();
        this.cancelDelete();
        this.get("controllers.profile").set("profileReviewStatistics", this.get("controllers.profile").get('profileReviewStatistics') - 1);
    },
    deleteSelectedReview: function()
    {
        for (var i = 0; i < this.get("controllers.profile").get('reviews').get('length'); i++) {
            var review = this.get("controllers.profile").get('reviews').objectAt(i);
            if (review.get('review_id') === this.get('delete_id'))
            {
                review.deleteRecord();
                this.get("controllers.profile").get('reviews').removeObject(review);
                requiredBackEnd('reviews', 'Delete', review, 'POST', function(params) {

                });
                break;
            }
        }

        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 500);


    },
    cancelDelete: function() {
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set('message', "");
        HubStar.set('data', null);
        this.set('delete_id', null);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);
    },
    addReviewReply: function(reviewID) {

        var replyContent = this.get("replyReviewContent");

        if (replyContent) {
            var replyUserID = this.get("currentUser").get('id');
            if (replyUserID === this.get('model').get("review_user_id")) {
                this.set("isSelf", true);
            } else
            {
                this.set("isSelf", false);
            }

            var replyDate = new Date();
            var replyReviewID = createReviewid();
            var tempReply = HubStar.Reply.createRecord({'review_reply_id': replyReviewID, "review_user_id": replyUserID, "review_time_stamp": replyDate.toString(),
                'review_msg': replyContent, 'review_url': null, 'review_user_name': this.get("currentUser").get('display_name'), 'review_photo_url_large': this.get("currentUser").get('photo_url_large'),
                'review_enableToEdit': false, 'optional': this.get('model').get('optional') + '/' + this.get('model').get('review_id'), "review_userself": this.get("isSelf")});
            this.get('model').get('reply_reviews').insertAt(0, tempReply);
            this.get('model').store.save();

            $('#reply_' + reviewID).attr('style', 'display: block;max-height:0;');
            $('#view-comments_' + reviewID).attr('style', 'display:none; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px');
            $('#view-comments_' + reviewID).animate({display: 'none'}, 500);
            $('#up-comments_' + reviewID).attr('style', 'background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
            $('#up-comments_' + reviewID).animate({display: 'none'}, 500);
            $('#reply_' + reviewID).animate({maxHeight: '200px'}, 10);
            
            for (var i = 0; i < this.get("controllers.profile").get('reviews').get('length'); i++) {
                if (this.get("controllers.profile").get('reviews').objectAt(i).get('review_id') !== reviewID) {
                    this.upComments(this.get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                }
            }

            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 10);

        }
        this.set("replyReviewContent", "");

    },
    upComments: function(event) {
        $('#reply_' + event).attr('style', 'display: none; max-height:0;');
        $('#up-comments_' + event).attr('style', 'display: none;background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#up-comments_' + event).animate({display: 'none'}, 500);
        $('#view-comments_' + event).attr('style', ' display:block; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#view-comments_' + event).animate({display: 'block'}, 500);
        $('#reply_' + event).animate({maxHeight: '0px'}, 10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    },
    close: function() {
        this.set("replyReviewContent", "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
    },
    dropdownPhotoSetting: function(event) {
        var id = "#dropdown_id_" + event;
        $(id).toggleClass('hideClass');
        $(id).click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
    },
    fbShare: function(event) {
        var that = this;
        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get("controllers.profile").get('currentUserID') + '/reviews/' + event.get("review_id");
        var caption = '';
        if (event.get('review_content') !== null)
        {
            caption = event.get('review_content');

        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: event.get('review_user_photo_url'),
            name: event.get('review_user_name'),
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function(event) {
        var caption = '';
        if (event.get('review_content') !== null)
        {
            caption = event.get('review_content');

        }
        else
        {
            caption = '';
        }
        $("meta[property='og\\:title']").attr("content", event.get('review_user_name'));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", event.get('review_user_photo_url'));


        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get("controllers.profile").get('currentUserID') + '/reviews/' + event.get("review_id");
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function(event) {
        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get("controllers.profile").get('currentUserID') + '/reviews/' + event.get("review_id");
        var url = 'https://twitter.com/share?text=' + event.get('review_user_name') + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});
