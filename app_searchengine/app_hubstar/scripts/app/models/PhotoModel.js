define(
        'models/PhotoModel',
        [
            'ember',
            'emberData'
        ], function() {
    var Photo = DS.Model.extend({
        mega: DS.belongsTo('App.Mega', {embedded: 'always'}),
        photo_title: DS.attr('string'),
        photo_image_url: DS.attr('string'),
        photo_image_linkto: DS.attr('string'),
        photo_caption: DS.attr('string'),
        photo_type: DS.attr('string'), 
        photo_file_name: DS.attr('string'),
        photo_collection_name: DS.attr('string'),
<<<<<<< HEAD
        photo_categories: DS.attr('string'), 
        photo_keywords: DS.attr('string'), 
        photo_brands: DS.attr('string'), 
        photo_products: DS.attr('string'), 
=======
        photo_categories: DS.attr('string'), //[] 
        photo_keywords: DS.attr('string'), //[ ]
        photo_brands: DS.attr('string'), // [ ]
        photo_products: DS.attr('string'), // [ ] 
        photo_articleId: DS.attr('string'),
        photo_heliumId: DS.attr('string'),
>>>>>>> 812afaa1836baac6a53f5cc81192f5bd75379bbc
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });
    return Photo;
}
);

