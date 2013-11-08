HubStar.ReviewListSingleView = Ember.View.extend({
    templateName: 'reviewListSingle',
    isDown: false,
    didInsertElement: function() {

        var that = this;
        $(document).ready(function() {
            var id = "#reply_" + that.get("controller").get('model').get('review_id');
         
            $(id).mCustomScrollbar({
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

    },
    downContent: function(event) {
        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var review_reply = "#reviewReplyData_" + event;

        this.get("controller").transitionToRoute('review', {id: event});
        var reviewContent = "#review_content_" + event;
        var content = "#review_content_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block;");
        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px;");
        $(content).animate({width: '420px', maxHeight: '120px', position: 'relative', display: 'inline-block', overflow: 'auto'}, 500);
        $(content).parent().parent().addClass('active');

        $(review_reply).show(10);

        // $(review_reply).animate({height: '63px', overflow: 'hidden'}, 500);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);

    },
    upContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var content = "#review_content_" + event;
        var review_reply = "#reviewReplyData_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:none");
        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block");
        $(content).animate({width: '390px', maxHeight: '100px', position: 'relative', dispaly: 'none', overflow: 'hidden'}, 500);
        //$(review_reply).animate({height: '0', overflow: 'hidden'}, 500);
        //$(review_reply).hide(10);


        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);
    },
    showOneReview: function(event) {

        if (this.get("controller").get('model').get('review_id') === event) {
            this.downContent(event);
            for (var i = 0; i < this.get("controller").get("controllers.profile").get('reviews').get('length'); i++) {
                if (this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get('review_id') !== event) {
                    this.upContent(this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                }
            }
        }

    },
    viewComments: function(event) {
        $('#reply_' + event).attr('style', 'display: block;max-height:0;');
         $('#up-comments_' + event).attr('style', 'display: block;max-height:0; text-align: center;');
          $('#up-comments_' + event).animate({display: 'block'},500);
            $('#viewComments_' + event).attr('style', 'display: none;max-height:0; text-align: center;');
        $('#viewComments_' + event).animate({display: 'none'},500);
        $('#reply_' + event).animate({maxHeight: '200px'}, 500);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);
    },
     
upComments: function(event) {
        $('#reply_' + event).attr('style', 'display: none; max-height:0;');
        $('#up-comments_' + event).attr('style', 'display: none;max-height:0; text-align: center;');
        $('#up-comments_' + event).animate({display: 'none'},500);
         $('#viewComments_' + event).attr('style', 'display: block;max-height:0; text-align: center;');
        $('#viewComments_' + event).animate({display: 'block'},500);
        $('#reply_' + event).animate({maxHeight: '0px'}, 500);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);
    }

});


