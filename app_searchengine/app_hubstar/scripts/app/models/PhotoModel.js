define(
        'models/PhotoModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Photo', {
        'mega': {embedded: 'always'}
    });
    var Photo = DS.Model.extend({
        mega: DS.hasMany('App.Object'),
        photo_title: DS.attr('string'),
        photo_image_url: DS.attr('string'),
        photo_image_linkto: DS.attr('string'),
        photo_caption: DS.attr('string'),
        photo_type: DS.attr('string'), //
        photo_file_name: DS.attr('string'),
        photo_collection_name: DS.attr('string'),
        photo_categories: DS.attr('string'), //[] 
        photo_keywords: DS.attr('string'), //[ ]
        photo_brands: DS.attr('string'), // [ ]
        photo_products: DS.attr('string'), // [ ] 
        photo_articleId: DS.attr('string'),
        photo_heliumId: DS.attr('string'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });
    return Photo;
}
);

