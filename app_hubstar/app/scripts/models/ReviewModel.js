

DS.RESTAdapter.map('HubStar.Review', {

    reply_reviews: {embedded: 'load'}
});



HubStar.Review = DS.Model.extend({
    review_id: DS.attr('string'),
    review_user_photo_url: DS.attr('string'),
    review_user_name: DS.attr('string'),
    review_user_id: DS.attr('string'),
    review_content: DS.attr('string'),
    review_time_stamp: DS.attr('string'),
    review_is_delete: DS.attr('boolean'),
    review_is_edit: DS.attr('boolean'),
    review_star_rating_value: DS.attr('number'),  
    review_count: DS.attr('string'),
    review_length: DS.attr('string'),
    review_like_count:DS.attr('number'),
    review_people_like:DS.attr('string'),
    reply_reviews: DS.hasMany('HubStar.Reply'), 
    optional: DS.attr('string'),
    isLike: false,
    getUser: function() {
        return this.get('review_user_id') === localStorage.loginStatus;
    }.property('isUserSelf'),
    review_isLike: function() {
        if (this.get("review_people_like") !== null) {
            if (this.get("review_people_like").indexOf(localStorage.loginStatus) !== -1) {
                this.set("isLike", true);
            } else {
                this.set("isLike", false);
            }
        } else {
            this.set("isLike", false);
        }
    }.property("review_people_like")
 
});
