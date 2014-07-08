
HubStar.ReviewReplyListSingleController = Ember.Controller.extend({
    currentUser: "",
    review_msg: "",
    review_enableToEdit: false,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewListSingle', 'review'],
    actions: {
        cancelReviewReply: function() {
            this.set("review_enableToEdit", !this.get('review_enableToEdit'));
        },
        saveReviewReply: function() {
            var reviewDate = new Date();
            this.get("model").set('review_msg', this.get('review_msg'));
            this.get("model").set('review_time_stamp', reviewDate.toString());
            requiredBackEnd('replys', 'Update', this.get("model"), 'POST', function() {
            });
            this.set("review_enableToEdit", !this.get('review_enableToEdit'));
            if (this.get("controllers.reviewListSingle").get("model").id !== null && this.get("controllers.reviewListSingle").get("model").id !== undefined) {
                var id = "#ReplyData_" + this.get("controllers.reviewListSingle").get("model").id;
            }
            $(id).attr("style", "display:block");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 200);
        },
        removeReviewReply: function() {
            this.set('message', "Remove this comment?");
            this.set('makeSureDelete', !this.get('makeSureDelete'));
            this.set("delete_id", this.get('model').get("review_reply_id"));
        },
        editReviewReply: function() {

            if (this.get("controllers.reviewListSingle").get("model").id !== null && this.get("controllers.reviewListSingle").get("model").id !== undefined) {
                var id = "#ReplyData_" + this.get("controllers.reviewListSingle").get("model").id;
            }
            $(id).attr("style", "display:none");
            this.set("review_enableToEdit", !this.get('review_enableToEdit'));
            this.set("review_msg", this.get("model").get('review_msg'));
            this.transitionToRoute('reply', {id: this.get("model").get("review_reply_id")});
        },
        deleteConfirm: function()
        {
            this.deleteSelectedreply();
            this.send("cancelDelete");
        },
        cancelDelete: function() {
            this.set('makeSureDelete', !this.get('makeSureDelete'));
            this.set('message', "");
            HubStar.set('data', null);
            this.set('delete_id', null);
            setTimeout(function() {
                $('#masonry_user_container').masonry("");
            }, 500);
        }
    },
    init: function()
    {
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
    },
    deleteSelectedreply: function()
    {
        for (var i = 0; i < this.get("controllers.profile").get('reviews').get('length'); i++) {

            for (var j = 0; j < this.get("controllers.profile").get('reviews').objectAt(i).get("reply_reviews").get('length'); j++) {
                var reviewreply = this.get("controllers.profile").get('reviews').objectAt(i).get("reply_reviews").objectAt(j);
                if (reviewreply.get('review_reply_id') === this.get('delete_id'))
                {
                    reviewreply.deleteRecord();
                    this.get("controllers.profile").get('reviews').objectAt(i).get("reply_reviews").removeObject(reviewreply);
                    requiredBackEnd('replys', 'Delete', reviewreply, 'POST', function() {

                    });
                    break;
                }
            }
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 500);
    }
});
