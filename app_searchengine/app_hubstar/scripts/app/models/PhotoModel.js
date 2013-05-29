define(
        'models/PhotoModel',
        [
            'ember',
            'emberData'
        ], function() {

    var PhotoModel = DS.Model.extend({
        photo_title: DS.attr('string'),
        photo_url: DS.attr('string'),
        photo_caption: DS.attr('string'),
        photo_type: DS.attr('string'),//
        photo_file_name: DS.attr('string'),
        photo_collection_name: DS.attr('string'),
        photo_categories: DS.attr('string'), //[] 
        photo_keywords: DS.attr('string'), //[ ]
        photo_brands: DS.attr('string'), // [ ]
        photo_products: DS.attr('string'), // [ ] 
        object: DS.belongsTo('App.Object'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return PhotoModel;
}
);

