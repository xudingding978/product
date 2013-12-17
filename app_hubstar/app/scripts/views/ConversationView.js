/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.ConversationView = Ember.View.extend({
    templateName: 'conversation',
    didInsertElement: function() {
        $(document).ready(function() {
            $("#conversation_content").mCustomScrollbar({
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
                set_height: 1000
            });
        });
    }
});

