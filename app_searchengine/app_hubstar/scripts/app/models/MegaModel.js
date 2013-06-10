define(
        'models/MegaModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Mega', {
        photos: {embedded: 'always'},
        users: {embedded: 'always'}
    });

    var MegaModel = DS.Model.extend({
        type: DS.attr('string'),
        accessed: DS.attr('string'),
        active_yn: DS.attr('string'),
        article_id: DS.attr('string'),
        region: DS.attr('string'),
        topic: DS.attr('string'),
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
        users: DS.hasMany('App.User'),
        more_button: function() {
            return "more_button_" + this.get('id');
        }.property('id'),
        collape_button: function() {
            return "collape_button_" + this.get('id');
        }.property('id'),
        getProfile_id: function() {
            return "#/profiles/" + this.get('profile_id');
        }.property('profile_id'),
        getProfile: function() {
            return this.get('type') === 'profile';
        }.property('type'),
        getPhoto: function() {
            return this.get('type') === 'photo';
        }.property('type'),
        getVideo: function() {
            return this.get('type') === 'video';
        }.property('type'),
        getFile: function() {
            return this.get('type') === 'file';
        }.property('type'),
        getArticle: function() {
            return this.get('type') === 'article';
        }.property('type'),
        getIdeabook: function() {
            return this.get('type') === 'ideabook';
        }.property('type'),
        getDiscussion: function() {
            return this.get('type') === 'discussion';
        }.property('type'),
        //    articles: DS.hasMany('App.Article'),
//        video: DS.hasMany('App.Video'),
//        product: DS.hasMany('App.Product'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });
    return MegaModel;
}
);

