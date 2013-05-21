define(
        'models/SearchResultsModel',
        [
            'ember',
            'emberData'
        ], function() {

    var ProfileModel = DS.Model.extend({
  
        uri_url: DS.attr('string'),
        creator: DS.attr('string'),
        type: DS.attr('string'),
        
        
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
        url: function() {
            var type = this.get('type');

            return  "http://www.develop.devbox/#/" + type + "s/";
        }.property('type'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return ProfileModel;
}
);

