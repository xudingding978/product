HubStar.Collection = DS.Model.extend({
    title: DS.attr('string'),
    desc: DS.attr('string'),
    collection_ids: DS.attr('string'),
    created_at: DS.attr('string'),
    cover: DS.attr('string'),
    didLoad: function() {
    }
});
