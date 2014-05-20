HubStar.MessageView = Ember.View.extend({
    templateName: 'message',
    didInsertElement: function() {
        var that =this;
        $(document).ready(function() {      
            $("#messageScrollBar_" + that.get("controller").get('model').get('message_id')).mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 200
            });
        });
    }
});

