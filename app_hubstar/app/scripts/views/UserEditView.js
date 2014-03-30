/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserEditView = Ember.View.extend({
    templateName: 'userEdit',
    didInsertElement: function() {
        $(document).ready(function() {   
            $("#user_profiles").mCustomScrollbar({
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
                set_height: 300
            });

        });
    }
});