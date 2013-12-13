
HubStar.AddVideoController = Ember.ObjectController.extend({
    needs: ["profileVideos", "applicationFeedback", 'profile', 'megaCreate'],
    videoUrl: null,
    videoImg: null,
    videoTitle: null,
    videoDesc: null,
    videoid: null,
    profileMega: null,
    init: function() {
        this.setMega();
    },
    canel: function() {
        this.reset();
        var profileVideoController = this.get('controllers.profileVideos');
        profileVideoController.videoCreateModeSwitch();
    },
    getVideoFromYoutube: function()
    {

        this.set('videoid', this.getVideoId());
        var that = this;

        if (this.get('videoid') !== null) {
            $.ajax({
                url: "http://gdata.youtube.com/feeds/api/videos/" + this.get('videoid') + "?v=2&alt=jsonc",
                type: 'get',
                success: function(feedback) {
                    that.set('videoImg', feedback.data.thumbnail.hqDefault);
                    that.set('videoTitle', feedback.data.title);
                    that.set('videoDesc', feedback.data.description);
                }, error: function() {
                    that.set('videoid', null);
//                    console.log("some wrong with youtube id");
                }
            });
        }
    },
    reset: function() {
        this.set('videoImg', null);
        this.set('videoUrl', null);
        this.set('videoTitle', null);
        this.set('videoDesc', null);
        this.set('videoid', null);

    },
    videoCreate: function() {
        var testID = createGuid();
        var MegaCreateController = this.get('controllers.megaCreate');
        var tempMega = this.get("profileMega");
        tempMega.set("object_title", this.get('videoTitle'));
        tempMega.set("object_description", this.get('videoDesc'));
        tempMega.set("object_image_url", this.get('videoImg'));
        var video = HubStar.Video.createRecord({
            videoImg: this.get('videoImg'),
            videoTitle: this.get('videoTitle'),
            videoDesc: this.get('videoDesc'),
            videoIframeCode: this.getIframeCode(480, 360, this.getVideoId())
        });
        var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, null, 'video');
        mega.get('videoes').pushObject(video);

        var profileVideosController = this.get('controllers.profileVideos');
        profileVideosController.get("videoesContent").insertAt(0, mega);
        this.get("controllers.profile").set("profileVideoStatistics", profileVideosController.get("videoesContent").get("length"));
        mega.store.save();


        profileVideosController.relayout();
        this.canel();
    },
    getVideoId: function() {
        var videoid = null;
        var videoUrl = this.get("videoUrl");
        var videoUrlObjects = videoUrl.split("&");
        videoUrl = videoUrlObjects[0];
        if (videoUrl.indexOf("http://www.youtube.com/") !== -1)
        {
            var tmpId = videoUrl.split("v=");
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
        var iframeCode = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoid + '" frameborder="0" allowfullscreen></iframe>';
        return iframeCode;
    },
    setMega: function() {
        var profileController = this.get('controllers.profile');
        var tempmega = profileController.get("model");
        var that = this;
        that.set("profileMega", tempmega);
        if (that.get("profileMega") === null) {
            tempmega.addObserver('isLoaded', function() {
                if (tempmega.get('isLoaded')) {
                    that.set("profileMega", tempmega);
                }
            });
        }
    }
});
