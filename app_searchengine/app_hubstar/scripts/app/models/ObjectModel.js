define(
        'models/ObjectModel',
        [
            'ember',
            'emberData'
        ], function() {
    var ObjectModel = DS.Model.extend({
        photo: DS.belongsTo('App.Photo'),
        article: DS.belongsTo('App.Article'),
         title: DS.attr('string'),
        domains: DS.attr('string'), //[]
        uri_url: DS.attr('string'),
        creator: DS.attr('string'),
        owners: DS.attr('string'), // [ ]
        editors: DS.attr('string'), // [ ]
        type: DS.attr('string'), //object type
        category: DS.attr('string'),
        geography: DS.attr('string'),
        owner_profile_pic: DS.attr('string'),
        owner_title: DS.attr('string'),
        owner_url: DS.attr('string'),
        created: DS.attr('string'), //{user: datetime:}
        accessed: DS.attr('string'), // {user: datetime:}
        updated: DS.attr('string'), // {user: datetime:}
        deleted: DS.attr('string'), // { yn: user: datetime: }
        status_id: DS.attr('string'),
        active_yn: DS.attr('string'),
        indexed_yn: DS.attr('string'),
        object_image_url: DS.attr('string'),
        object_image_linkto: DS.attr('string'),
        following: DS.attr('string'), //[]
        followers: DS.attr('string'), //[]
        follower_count: DS.attr('string'),
        following_count: DS.attr('string'),
        view_count: DS.attr('string'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return ObjectModel;
}
);

