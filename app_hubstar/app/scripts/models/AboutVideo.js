HubStar.AboutVideo = DS.Model.extend({        
    video_id: DS.attr('string'),
    video_title: DS.attr('string'),
    video_desc: DS.attr('string'),
    video_url: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    },
    getVideoURL: function() {
//        for (var i = 0; i < this.get('about_us').objectAt(0).get('about_video').get('length'); i ++) {
            var video_url = this.get('video_url').split('?');
            if (video_url.get('length') >1) {
                if (video_url[1].split('=')[1].length >10) {
                    this.set('video_url', '//www.youtube.com/embed/'+video_url[1].split('=')[1]);
                }
                console.log(video_url[1].split('=')[1].length);
            }
//        }
        return this.get('video_url');
    }.property('video_url')
});

