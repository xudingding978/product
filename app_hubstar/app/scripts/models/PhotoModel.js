DS.RESTAdapter.map('HubStar.Photo', {
    tags: {embedded: 'load'},
});
HubStar.Photo = DS.Model.extend({
        // mega: DS.belongsTo('HubStar.Mega', {embedded: 'always'}),
        photo_source_id: DS.attr('string'),
        photo_title: DS.attr('string'),
        photo_image_linkto: DS.attr('string'),
        photo_technicalSpecification: DS.attr('string'),
        photo_sequence: DS.attr('string'),
        photo_isExtra: DS.attr('string'),
        photo_caption: DS.attr('string'),
        photo_link_text: DS.attr('string'),
        photo_link_url: DS.attr('string'),
        photo_original_filename: DS.attr('string'),
        photo_original_width: DS.attr('string'),
        photo_original_height: DS.attr('string'),
        photo_type: DS.attr('string'),
        photo_file_name: DS.attr('string'),
        photo_collection_name: DS.attr('string'),
        photo_categories: DS.attr('string'), //[] 
        photo_keywords: DS.attr('string'), //[ ]
        photo_brands: DS.attr('string'), // [ ]
        photo_image_original_url: DS.attr('string'), // [ ]
        photo_image_hero_url: DS.attr('string'), // [ ]
        photo_image_thumbnail_url: DS.attr('string'), // [ ]
        photo_image_preview_url: DS.attr('string'), // [ ]
        photo_products: DS.attr('string'), // [ ] 
        photo_articleId: DS.attr('string'),
        photo_heliumId: DS.attr('string'),
        enableTag:false,
        tags: DS.hasMany('HubStar.Tag'),
        didLoad: function() {

        }
    });



