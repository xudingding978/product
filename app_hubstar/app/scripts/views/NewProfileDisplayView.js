/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.NewProfileDisplayView = Ember.View.extend({
    templateName: 'newProfileDisplay',
    didInsertElement: function() {
        $(document).ready(function() {
            $("#profiles_display_scrollbar").mCustomScrollbar({
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
                set_height: 330
            });
        });
    },
    cancel: function() {
        this.get("controller").get("controllers.application").set("newProfile", false);
        $("#user-dd-menu").hide();
         $("#cancel").css("display", "none");
    }
});

