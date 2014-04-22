HubStar.CommentView = Ember.View.extend({
    templateName: 'comment',
    didInsertElement: function() {
        $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
          var that =this;
        $(document).ready(function() { 
            
            $("#commentScrollBar_" + that.get("controller").get('model').get('getID')).mCustomScrollbar({
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
                theme: "dark-2"
                //set_height: 350
            });
        });
    }
            
});
