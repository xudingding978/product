HubStar.Reply = DS.Model.extend({
    review_reply_id: DS.attr('string'),
    review_user_id: DS.attr('string'),
    review_time_stamp: DS.attr('string'),
    review_msg: DS.attr('string'),
    review_url: DS.attr('string'),
    review_user_name: DS.attr('string'),
    review_photo_url_large: DS.attr('string'),
    review_enableToEdit: DS.attr('string'),
    optional: DS.attr('string')
});

