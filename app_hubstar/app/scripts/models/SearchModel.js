HubStar.Search= DS.Model.extend({
        region: DS.attr('string'),
        took: DS.attr('string'),
        hits: DS.attr('string'),
        uri_url: DS.attr('string'),
        creator: DS.attr('string'),
        type: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        image_url: DS.attr('string'),
        article_text: DS.attr('string'),
        article_title: DS.attr('string'),
        video_title: DS.attr('string'),
        photo_title: DS.attr('string'),
        profile_id: DS.attr('string'),
        profile_name: DS.attr('string'),
        profile_hero_url: DS.attr('string'),
        description: DS.attr('string'),
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
        }.property('type')



    });
