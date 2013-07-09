define(
        'models/MegaModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Mega', {
        photo: {embedded: 'always'},
        user: {embedded: 'always'},
        comments: {embedded: 'always'},
        profile: {embedded: 'always'},
        article: {embedded: 'always'}
    });

    var MegaModel = DS.Model.extend(Ember.Copyable, {
        accessed: DS.attr('string'),
        boost: DS.attr('string'),
        category: DS.attr('string'),
        creator_profile_pic: DS.attr('string'),
        created: DS.attr('date'),
        creator: DS.attr('string'),
        country: DS.attr('string'),
        collection_id: DS.attr('string'),
        collection_count: DS.attr('string'),
        deleted: DS.attr('string'),
        domains: DS.attr('string'),
        editors: DS.attr('string'),
        geography: DS.attr('string'),
        likes_count: DS.attr('string'),
        is_active: DS.attr('boolean'),
        is_indexed: DS.attr('boolean'),
        keywords: DS.attr('string'),
        object_image_linkto: DS.attr('string'),
        object_image_url: DS.attr('string'),
        object_title: DS.attr('string'),
        object_description: DS.attr('string'),
        owner_type: DS.attr('string'), // profiles or user can upload files, this could help to link back to their profile.
        owner_profile_pic: DS.attr('string'),
        owner_title: DS.attr('string'), //profile name
        owner_id: DS.attr('string'), //profile id
        owner_contact_email: DS.attr('string'),
        owner_contact_cc_emails: DS.attr('string'),
        owner_contact_bcc_emails: DS.attr('string'),
        people_like: DS.attr('string'),
        region: DS.attr('string'),
        status_id: DS.attr('string'),
        subcategories:DS.attr('string'),
        timezone: DS.attr('string'),
        topic: DS.attr('string'),
        type: DS.attr('string'),
        updated: DS.attr('string'),
        uri_url: DS.attr('string'),
        view_count: DS.attr('string'),
        //--------------------------
        photo: DS.hasMany('App.Photo'),
        user: DS.hasMany('App.User'),
        profile: DS.hasMany('App.Profile'),
        comments: DS.hasMany('App.Comment'),
        article: DS.hasMany('App.Article'),
        photo_album_id: function() {
            return "#album_" + this.get('id');
        }.property('id'),
        more_button: function() {
            return "more_button_" + this.get('id');
        }.property('id'),
        collape_button: function() {
            return "collape_button_" + this.get('id');
        }.property('id'),
        getProfile_id: function() {
            return "#/profiles/" + this.get('owner_id');
        }.property('owner_id'),
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
            //     console.log('id: ' + this.id + ' ' + this.profile_name);
        }
    });
    return MegaModel;
}
);

