HubStar.Pdf = DS.Model.extend({
    id: DS.attr('string'),
    pdf_cover_image: DS.attr('string'),
    pdf_title: DS.attr('string'),
    pdf_desc: DS.attr('string'),
    pdf_url: DS.attr('string'),
    pdf_profile_id: DS.attr('string'),
//    pdf_collection_id: DS.attr('string'),
    didLoad: function() {

    }
});


