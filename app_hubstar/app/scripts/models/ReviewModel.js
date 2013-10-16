HubStar.Review = DS.Model.extend({
    review_user_photo_url: DS.attr('string'),
    review_user_name: DS.attr('string'),
    review_user_id: DS.attr('string'),
    review_content: DS.attr('string'),
    review_time_stamp: DS.attr('string'),
    review_is_delete: DS.attr('boolean'),
    review_is_edit: DS.attr('boolean'),
    review_star_value: DS.attr('string'),
    review_count: DS.attr('string'),
    review_star_average_value: DS.attr('string'),
     optional: DS.attr('string'),
    didLoad: function() {

    }


});
