HubStar.AboutVideo = DS.Model.extend({        
    video_id: DS.attr('string'),
    video_title: DS.attr('string'),
    video_desc: DS.attr('string'),
    video_url: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    },
    getVideoURL: function() {
//        console.log('11111111');
    }
//    getVideoURL: function() {
////        for (var i = 0; i < this.get('about_us').objectAt(0).get('about_video').get('length'); i ++) {
//            var video_url = this.get('video_url').split('?');
//            if (video_url.get('length') >1) {
//                if (video_url[1].split('=')[1].length >10) {
//                    var VideoURL = '//www.youtube.com/embed/'+video_url[1].split('=')[1];
//                    return VideoURL;
//                }
//                return '';
//            } else {
//                return '';
//            }
////        }
//    }.property('video_url')
});

