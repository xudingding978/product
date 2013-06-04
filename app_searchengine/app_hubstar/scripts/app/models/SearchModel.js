define(
        'models/SearchModel',
        [
            'ember',
            'emberData'
        ], function() {

    var SearchModel = DS.Model.extend({
        photo_brands: DS.attr('string'),
        photo_caption: DS.attr('string'),
        photo_categories: DS.attr('string'),
        photo_collection_name: DS.attr('string'),
        photo_file_name: DS.attr('string'),
        photo_image_linkto: DS.attr('string'),
        photo_image_url: DS.attr('string'),
        photo_keywords: DS.attr('string'),
        photo_products: DS.attr('string'),
        photo_title: DS.attr('string'),
        photo_type: DS.attr('string')
    });
    return SearchModel;
}
);

