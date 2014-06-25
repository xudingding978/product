
DS.RESTAdapter.map('HubStar.Group', {
    collections: {embedded: 'load'},
    keywords: {embedded: 'load'}
});
HubStar.Group = DS.Model.extend({
    id: DS.attr('string'),
    group_step: DS.attr('string'),
    group_classification: DS.attr('string'),
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
    group_creator_name: DS.attr('string'),
    group_administrator: DS.attr('string'), //user id
    group_editor: DS.attr('string'), //user id
    group_description: DS.attr('string'),
    collections: DS.hasMany('HubStar.Collection'),
    keywords: DS.hasMany('HubStar.Keyword'),
    width: 150,
    height: 150,
    group_pic_size: function() {
        var url = this.get("group_pic_url").split("_");
        var length = url.length;
        var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
        var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);
        var heightNew = 150;
        var widthNew = 150;
        if (width > height)
        {
            heightNew = height;
            widthNew = width;
        }
        else
        {
            heightNew = 150;
            widthNew = Math.ceil(width / height * heightNew);
        }
        this.set("width", widthNew + "px");
        this.set("height", heightNew + "px");
    }.property('group_pic_url')
});




