

HubStar.NewProfileTopDisplayView = Ember.View.extend({
    templateName: 'newProfileTopDisplay',
    didInsertElement: function() {
   
        var u = HubStar.User.find(localStorage.loginStatus);
        u.then(function() {
            $(document).ready(function() {
                if (HubStar.get("profiles").length >= 2)
                {
                    $("#user_profiles_dropdown_scrollbar").mCustomScrollbar({
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
                        set_height: 130
                    });
                }
            });
        });
    }
});

