HubStar.Message = DS.Model.extend({
    reply_id: DS.attr('string'),
    user_id: DS.attr('string'),
    time_stamp: DS.attr('string'),
    msg: DS.attr('string'),
    url:DS.attr('string'),
    user_name: DS.attr('string'),
    photo_url_large: DS.attr('string'),
    enableToEdit: DS.attr('string')
});

