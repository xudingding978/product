define(
        'models/ProfileModel',
        [
            'ember',
            'emberData'
        ], function() {

    var ProfileModel = DS.Model.extend({
//        id: DS.attr('string'),
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
        website_url: DS.attr('string'),
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
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    ProfileModel.reopenClass({
        url: 'https://api.example.com', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
        pk: "id"
    });

    return ProfileModel;
}
);

