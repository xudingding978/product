define(
        'models/PhotoModel',
        [
            'ember',
            'emberData'
        ], function() {

    var PhotoModel = DS.Model.extend({
        photo_title: DS.attr('string'),
        photo_description: DS.attr('string'),
        last_name: DS.attr('string'),
        first_name: DS.attr('string'),
        email: DS.attr('string'),
        about: DS.attr('string'),
        description: DS.attr('string'),
        type: DS.attr('string'),
        profile_cover_url: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        profile_bg_url: DS.attr('string'),
        contact_user: DS.attr('string'),
        profile_category: DS.attr('string'),
        profile_physical_address: DS.attr('string'),
        phone_number: DS.attr('string'),
        website_url: DS.attr('string'),
        image_url: DS.attr('string'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return PhotoModel;
}
);

