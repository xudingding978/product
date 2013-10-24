HubStar.Review = DS.Model.extend({
    review_user_photo_url: DS.attr('string'),
    review_user_name: DS.attr('string'),
    review_user_id: DS.attr('string'),
    review_content: DS.attr('string'),
    review_time_stamp: DS.attr('string'),
    review_is_delete: DS.attr('boolean'),
    review_is_edit: DS.attr('boolean'),
    review_star_rating_value: DS.attr('number'),
    review_id: DS.attr('string'),
    review_length: DS.attr('string'),
    review_star_average_value: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    },
    isValid: function() {
        var isEven = false;
        if (this.get('review_count') === "" || this.get('review_count') === null || this.get('review_count') === undefined) {
            isEven = false;
        }
        else if (this.get('review_count') % 2 === 0)
        {
            isEven = false;
        }
        else
        {
            isEven = true;
        }

        return isEven;
    }.property('review_count')



});
