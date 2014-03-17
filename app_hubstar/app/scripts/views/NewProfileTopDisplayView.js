/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.NewProfileTopDisplayView = Ember.View.extend({
    templateName: 'newProfileTopDisplay',
    didInsertElement: function() {
        $(document).ready(function() {
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
                set_height: 160
            });
        });
    }
});

