HubStar.NotificationTopView = Ember.View.extend({
    templateName: 'notificationTop',
    didInsertElement: function() {
        $(document).ready(function() {
            $("#notititopbar").mCustomScrollbar({
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
                set_height: 370
            });
        });
    }
});

