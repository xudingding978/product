
HubStar.AddVideoController = Ember.ObjectController.extend({
    needs: ["profileVideos", "applicationFeedback"],
    videoUrl: null,
    videoImg: null,
    videoTitle: null,
    videoDesc: null,
    canel: function() {
        var profileVideoController = this.get('controllers.profileVideos');
        this.reset();
        profileVideoController.videoCreateModeSwitch();
    },
    getVideoFromYoutube: function()
    {
        var video_id = this.getVideoId();
        var that = this;
        if (video_id !== null) {
            $.ajax({
                url: "http://gdata.youtube.com/feeds/api/videos/" + video_id + "?v=2&alt=jsonc",
                type: 'get',
                success: function(feedback) {
                    that.set('videoImg', feedback.data.thumbnail.hqDefault);
                    that.set('videoTitle', feedback.data.title);
                    that.set('videoDesc', feedback.data.description);
                }, error: function() {
                    console.log("some wrong with youtube id");
                }
            });
        }
    },
    reset: function() {
        this.set('videoImg', null);
        this.set('videoUrl', null);
        this.set('videoTitle', null);
        this.set('videoDesc', null);
    },
    videoCreate: function() {
    },
    getVideoId: function() {
        //  this.set('videoIframeCode', this.get("videoUrl"));
        var videoid = null;
        var videoUrl = this.get("videoUrl");
        if (videoUrl.indexOf("http://www.youtube.com/") !== -1)
        {
            var tmpId = videoUrl.split("=");
            videoid = tmpId[1];
        }
        else if (videoUrl.indexOf("http://youtu.be/") !== -1)
        {
            var tmpId = videoUrl.split("be/");
            videoid = tmpId[1];
        }
        return videoid;
    },
    getIframeCode: function(width, height, videoid)
    {
        var tempCode = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoid + '" frameborder="0" allowfullscreen></iframe>';
        return tempCode;
        //     this.set('videoIframeCode', tempCode);
    }
});
