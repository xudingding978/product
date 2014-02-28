
DS.RESTAdapter.map('HubStar.Meganew', {
    profile: {embedded: 'load'},
     keyword: {embedded: 'always'}
});

HubStar.Meganew = DS.Model.extend({
    accessed: DS.attr('string'),
    boost: DS.attr('number'),
    categories: DS.attr('string'),
    creator_profile_pic: DS.attr('string'),
    created: DS.attr('string'),
    creator: DS.attr('string'),
    country: DS.attr('string'),
    collection_id: DS.attr('string'),
    collection_count: DS.attr('string'),
    deleted: DS.attr('string'),
    domains: DS.attr('string'),
    editors: DS.attr('string'),
    classification: DS.attr('string'),
    geography: DS.attr('string'),
    likes_count: DS.attr('string'),
    is_active: DS.attr('boolean'),
    is_indexed: DS.attr('boolean'),
    is_deleted:DS.attr('boolean'),
    keywords: DS.attr('string'),
    keyword_num: DS.attr('number'),
    object_image_linkto: DS.attr('string'),
    object_image_url: DS.attr('string'),
    object_title: DS.attr('string'),
    object_description: DS.attr('string'),
    owner_type: DS.attr('string'), // profiles or user can upload files, this could help to link back to their profile.
    owner_profile_pic: DS.attr('string'),
    owner_title: DS.attr('string'), //profile name
    owner_id: DS.attr('string'), //profile id
    owner_contact_email: DS.attr('string'),
    owner_contact_bcc_emails: DS.attr('string'),
    owner_contact_cc_emails: DS.attr('string'),
    people_like: DS.attr('string'),
    region: DS.attr('string'),
    suburb: DS.attr('string'),
    status_id: DS.attr('string'),
    subcategories: DS.attr('string'),
    timezone: DS.attr('string'),
    topic: DS.attr('string'),
    type: DS.attr('string'),
    updated: DS.attr('string'),
    uri_url: DS.attr('string'),
    view_count: DS.attr('number'),
    share_count: DS.attr('number'),
    comment_count: DS.attr('number'),
    optional: DS.attr('string'),
    isFollow: DS.attr('boolean'),
    //--------------------------
    profile: DS.hasMany('HubStar.Profile'),
     keyword: DS.hasMany('HubStar.Keyword')





});
