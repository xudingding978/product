
HubStar.ReviewReplyListSingleController = Ember.Controller.extend({
    currentUser: "",
    review_length: "",
    profile: "",
    review_id: null,
    profileReview:"",
   replyReviewContent: "",
    isUploadPhoto: false,
    isEdit: true,
    isPosting: true,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewListSingle'],
    init: function()
    {

    }

});
