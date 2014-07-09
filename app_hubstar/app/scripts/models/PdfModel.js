HubStar.Pdf = DS.Model.extend({
    pdf_cover_image: DS.attr('string'),
    pdf_title: DS.attr('string'),
    pdf_desc: DS.attr('string'),
    pdf_url: DS.attr('string'),
    pdf_profile_id: DS.attr('string'),
    didLoad: function() {
    }
});


