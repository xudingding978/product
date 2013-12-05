DS.RESTAdapter.map('HubStar.AboutUs', {
    about_video: {embedded: 'always'},
    about_image: {embedded: 'always'},
    about_book: {embedded: 'always'}
});



HubStar.AboutUs = DS.Model.extend({
    about_id: DS.attr('string'),
    about_desc: DS.attr('string'),
    about_template_id: DS.attr('string'),
    about_video: DS.hasMany('HubStar.AboutVideo'), 
    about_image: DS.hasMany('HubStar.AboutImage'), 
    about_book: DS.hasMany('HubStar.AboutBook'), 
    optional: DS.attr('string'),
    didLoad: function() {

    }
});