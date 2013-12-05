
DS.RESTAdapter.map('HubStar.Profile', {
    collections: {embedded: 'load'},
    followers: {embedded: 'load'},
    reviews:{embedded: 'load'},
    keywords: {embedded: 'load'},
    about_us: {embedded: 'load'}
});
HubStar.Profile = DS.Model.extend({
    profile_category: DS.attr('string'),
    profile_hero_url: DS.attr('string'),
    profile_pic_url: DS.attr('string'),
    profile_bg_url: DS.attr('string'),
    profile_hero_cover_url: DS.attr('string'),
    profile_physical_address: DS.attr('string'),
    profile_suburb: DS.attr('string'),
    profile_contact_number: DS.attr('string'),
    profile_contact_user: DS.attr('string'),
    profile_about_us: DS.attr('string'),
    profile_cover_text: DS.attr('string'),
    profile_boost: DS.attr('string'),
    profile_name: DS.attr('string'), //
    profile_contact_first_name: DS.attr('string'),
    profile_contact_last_name: DS.attr('string'),
    profile_contact_email: DS.attr('string'),
    profile_keywords: DS.attr('string'),
    profile_keywords_num: DS.attr('number'),
    profile_package_name: DS.attr('string'),
    profile_regoin: DS.attr('string'),
    profile_country: DS.attr('string'),
    profile_hours: DS.attr('string'),
    profile_areas_serviced: DS.attr('string'),
    profile_website: DS.attr('string'),
    profile_website_url: DS.attr('string'),
    profile_client_name: DS.attr('string'),
    profile_editors: DS.attr('string'),
    profile_domains: DS.attr('string'),
    profile_creater: DS.attr('string'),
    profile_partner_ids: DS.attr('string'),
    profile_isActive: DS.attr('string'),
    profile_isDeleted: DS.attr('string'),
    profile_facebook_link: DS.attr('string'),
    profile_twitter_link: DS.attr('string'),
    profile_googleplus_link: DS.attr('string'),
    profile_pinterest_link: DS.attr('string'),
    profile_linkedin_link: DS.attr('string'),
    profile_youtube_link: DS.attr('string'),
    profile_analytics_code: DS.attr('string'),
    profile_average_review: DS.attr('string'),
    profile_average_review_length: DS.attr('string'),
    profile_google_map:DS.attr('string'),
    owner: DS.attr('string'),
    owner_contact_email: DS.attr('string'),
    owner_contact_cc_emails: DS.attr('string'),
    owner_contact_bcc_emails: DS.attr('string'),
    followers: DS.hasMany('HubStar.Follower'),
    collections: DS.hasMany('HubStar.Collection'),
    reviews: DS.hasMany('HubStar.Review'),
    keywords: DS.hasMany('HubStar.Keyword'),
    show_keyword_id: DS.attr('string'),
    about_us: DS.hasMany('HubStar.AboutUs'),
//    getTenKeywords: function() {
//        var tenKeywords =  this.get('keywords').slice(0,10);
//        return tenKeywords;
//    }.property('keywords')
});




