
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
        photo_categories: DS.attr('string'), //[] 
        photo_keywords: DS.attr('string'), //[ ]
        photo_brands: DS.attr('string'), // [ ]
        photo_image_original_url: DS.attr('string'), // [ ]
        photo_image_hero_url: DS.attr('string'), // [ ]
        photo_image_thumbnail_url: DS.attr('string'), // [ ]
        photo_products: DS.attr('string'), // [ ] 
        photo_articleId: DS.attr('string'),

<<<<<<< HEAD
                
//        photo_title: DS.attr('string'),
//        photo_image_url: DS.attr('string'),
//        photo_image_linkto: DS.attr('string'),
//        photo_caption: DS.attr('string'),
//        photo_type: DS.attr('string'), //
//        photo_file_name: DS.attr('string'),
//        photo_collection_name: DS.attr('string'),
//        photo_categories: DS.attr('string'), //[] 
//        photo_keywords: DS.attr('string'), //[ ]
//        photo_brands: DS.attr('string'), // [ ]
//        photo_products: DS.attr('string'), // [ ] 
        
        id: DS.attr('string'),
        profile_id: DS.attr('string'),
        type: DS.attr('string'),
        
=======
        photo_heliumId: DS.attr('string'),
>>>>>>> db253c0e45ccd7cd9a8d35e62a4ee6181290d62e
        didLoad: function() {
            console.log("1111111111111111111111111111111111111111111111111111");
            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });
    return Photo;
}
);


