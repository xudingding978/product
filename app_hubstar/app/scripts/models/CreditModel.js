HubStar.Credit = DS.Model.extend({
    credit_list_id: DS.attr('string'),
    credit_list_name: DS.attr('string'),
    credit_list_text: DS.attr('string'),
    credit_list_credit_link_category: DS.attr('string'),
    credit_list_credit_link_subcategory: DS.attr('string'),
    optional:DS.attr('string'),
    didLoad: function() {
    }
});
