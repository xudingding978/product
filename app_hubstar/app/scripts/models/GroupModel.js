
DS.RESTAdapter.map('HubStar.Group', {
    collections: {embedded: 'load'},
    keywords: {embedded: 'load'}
});
HubStar.Group = DS.Model.extend({
    group_step: DS.attr('string'),
    group_budget: DS.attr('string'),
    group_expertise: DS.attr('string'),
    group_category: DS.attr('string'),
    group_subcategory: DS.attr('string'),
    group_hero_url: DS.attr('string'),
    group_pic_url: DS.attr('string'),
    group_bg_url: DS.attr('string'),
    group_hero_cover_url: DS.attr('string'),
    group_name: DS.attr('string'), //
    group_keywords: DS.attr('string'),
    group_keywords_num: DS.attr('number'),
    group_timeframe: DS.attr('string'),
    group_partner_ids: DS.attr('string'),
    group_creator: DS.attr('string'), //user id
    group_administrator: DS.attr('string'), //user id
    group_editor: DS.attr('string'), //user id
    group_description: DS.attr('string'), 
    collections: DS.hasMany('HubStar.Collection'),
    keywords: DS.hasMany('HubStar.Keyword'),   
    getID: function() {
        return this.get('id').replace(/[^\w\s]/gi, '');
    }.property('id')
});




