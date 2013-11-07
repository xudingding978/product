HubStar.ConversationItem = DS.Model.extend({
    item_id: DS.attr('string'),
    name: DS.attr('string'),
    time_stamp: DS.attr('string'),
    content: DS.attr('string'),
    sender_id:DS.attr('string'),
    sender_photo_url_large: DS.attr('string')
});

