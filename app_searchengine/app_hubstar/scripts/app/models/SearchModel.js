define(
        'models/SearchModel',
        [
            'ember',
            'emberData'
        ], function() {

    var SearchModel = DS.Model.extend({
        region:  DS.attr('string'),
        took:  DS.attr('string'),
        hits:  DS.attr('string'),
        uri_url: DS.attr('string'),
        creator: DS.attr('string'),
        type: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        image_url: DS.attr('string'),
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

    return SearchModel;
}
);

