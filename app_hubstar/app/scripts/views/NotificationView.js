HubStar.NotificationView = Ember.View.extend({
    templateName: 'notification',
    didInsertElement: function() {
        $(document).ready(function() {
            $("#content_notification").mCustomScrollbar({
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
                set_height: 1100
            });
        });
    }
});

