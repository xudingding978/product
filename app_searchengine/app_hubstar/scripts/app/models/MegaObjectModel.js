define(
        'models/MegaObjectModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.MegaObject', {
        'photos': {embedded: 'always'}
    });
//    DS.RESTAdapter.map('App.Object', {
//        'articles': {embedded: 'always'}
//    });
//    DS.RESTAdapter.map('App.Photo', {
//        'video': {embedded: 'always'}
//    });
//    DS.RESTAdapter.map('App.Photo', {
//        'product': {embedded: 'always'}
//    });

    var MegaObjectModel = DS.Model.extend({
        type: DS.attr('string'),
        accessed: DS.attr('string'),
        active_yn: DS.attr('string'),
        article_id: DS.attr('string'),
        category: DS.attr('string'),
        created: DS.attr('string'),
        creator: DS.attr('string'),
        deleted: DS.attr('string'),
        domains: DS.attr('string'),
        editors: DS.attr('string'),
        follower_count: DS.attr('string'),
        followers: DS.attr('string'),
        following: DS.attr('string'),
        following_count: DS.attr('string'),
        geography: DS.attr('string'),
        indexed_yn: DS.attr('string'),
        object_image_linkto: DS.attr('string'),
        object_image_url: DS.attr('string'),
        object_title: DS.attr('string'),
        owner_profile_pic: DS.attr('string'),
        owner_title: DS.attr('string'),
        owner_url: DS.attr('string'),
        owners: DS.attr('string'),
        status_id: DS.attr('string'),
        updated: DS.attr('string'),
        uri_url: DS.attr('string'),
        view_count: DS.attr('string'),
        photos: DS.hasMany('App.Photo'),
    //    articles: DS.hasMany('App.Article'),
//        video: DS.hasMany('App.Video'),
//        product: DS.hasMany('App.Product'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });
    return MegaObjectModel;
}
);

