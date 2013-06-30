define(
        'models/ProfileModel',
        [
            'ember',
            'emberData'
        ], function() {

    var ProfileModel = DS.Model.extend({

        profile_name: DS.attr('string'),
        last_name: DS.attr('string'),
        first_name: DS.attr('string'),
        email: DS.attr('string'),
        about: DS.attr('string'),
        type: DS.attr('string'),
        profile_cover_url: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        profile_bg_url: DS.attr('string'),
        contact_user: DS.attr('string'),
        profile_category: DS.attr('string'),
        profile_physical_address: DS.attr('string'),
        phone_number: DS.attr('string'),
        collections:DS.attr('string'),        
        website_url: DS.attr('string')
    });

//    ProfileModel.reopenClass({
//        url: 'https://api.example.com', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//        pk: "id"
//    });

    return ProfileModel;
}
);

