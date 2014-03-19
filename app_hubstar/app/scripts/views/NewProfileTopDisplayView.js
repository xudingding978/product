/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.NewProfileTopDisplayView = Ember.View.extend({
    templateName: 'newProfileTopDisplay',
    didInsertElement: function() {
        console.log(HubStar.get("profiles").length);
        var u = HubStar.User.find(localStorage.loginStatus);
        var that = this;
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

