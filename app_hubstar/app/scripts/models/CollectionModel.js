HubStar.Collection = DS.Model.extend({
    title: DS.attr('string'),
    desc: DS.attr('string'),
    collection_ids: DS.attr('string'),
    created_at: DS.attr('string'),
    cover: DS.attr('string'),
    parent_type: DS.attr('string'),
    optional:DS.attr('string'),
    type:DS.attr('string'),
    didLoad: function() {
    },
        getCollectionId: function()
    {
        var id = "C" + this.get('id');
        return id;
    }.property('id')
});
