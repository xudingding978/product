HubStar.ProfileVideosController = Ember.Controller.extend({
    is_authentic_user: true,
    is_video_create_mode: false,
    videoCreateModeSwitch: function()
    {
        this.set('is_video_create_mode', !this.get('is_video_create_mode'));
    },
    getVideoFromYoutube: function()
    {
        console.log(this.get('video_id'));
    }
}



);
