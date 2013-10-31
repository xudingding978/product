HubStar.ProfileVideosController = Ember.Controller.extend({
    is_authentic_user: true,
    is_video_create_mode: false,
    getVideo: true,
    videoesContent: [],
    init: function() {

        var results = HubStar.Mega.find({"RquireType": "video"});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < results.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    that.get("videoesContent").pushObject(tempmega);
                }
                that.relayout();
            }
        });


    },
    videoCreateModeSwitch: function()
    {
        this.set('is_video_create_mode', !this.get('is_video_create_mode'));
    },
    getVideoFromYoutube: function()
    {
        console.log(this.get('video_id'));
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 1000);
    }
});
