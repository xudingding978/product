HubStar.Credit = DS.Model.extend({
    credits_id: DS.attr('string'),
    credits_name: DS.attr('string'),
    credits_text: DS.attr('string'),
    credits_category_name: DS.attr('string'),
    credits_sub_category_name: DS.attr('string'),
    optional:DS.attr('string'),
    didLoad: function() {
    }
});
