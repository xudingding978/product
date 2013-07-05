define(
        'models/ProfileModel',
        [
            'ember',
            'emberData'
        ], function() {

    DS.RESTAdapter.map('App.Profile', {
        collections: {embedded: 'always'}
    });
    var ProfileModel = DS.Model.extend({
        mega: DS.belongsTo('App.Mega', {embedded: 'always'}),
        profile_category: DS.attr('string'),
        profile_hero_url: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        profile_bg_url: DS.attr('string'),
        profile_physical_address: DS.attr('string'),
        phone_number: DS.attr('string'),
        profile_contact_user: DS.attr('string'),
        profile_about_us: DS.attr('string'),
        profile_name: DS.attr('string'), //
        profile_contact_first_name: DS.attr('string'),
        profile_contact_last_name: DS.attr('string'),
        profile_contact_email: DS.attr('string'),
        profile_keywords: DS.attr('string'),
        profile_package_name: DS.attr('string'),
        hours: DS.attr('string'),
        profile_areas_serviced: DS.attr('string'),
        profile_website: DS.attr('string'),
        profile_client_name: DS.attr('string'),
        profile_editors: DS.attr('string'),
        profile_creater: DS.attr('string'),
        owner: DS.attr('string'),
        owner_contact_email: DS.attr('string'),
        owner_contact_cc_emails: DS.attr('string'),
        owner_contact_bcc_emails: DS.attr('string'),
        collections: DS.hasMany('App.Collection')
    });

//    ProfileModel.reopenClass({
//        url: 'https://api.example.com', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//        pk: "id"
//    });

    return ProfileModel;
}
);

