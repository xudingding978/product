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
        var content = "#review_content_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:inline-block;;");
        $(down_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:none;");
        $(content).animate({width: '420px', maxHeight: '600px', position: 'relative', display: 'inline-block', overflow: 'auto'}, 500);
        $(content).parent().parent().addClass('active');
        $(review_reply).show(10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 100);

    },
    upContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var content = "#review_content_" + event;
        var review_reply = "#reviewReplyData_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:none;");
        $(down_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:inline-block;");
        $(content).animate({width: '390px', maxHeight: '100px', position: 'relative', dispaly: 'none', overflow: 'hidden'}, 500);


        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    },
    showOneReview: function(event, checking) {

        if (this.get("controller").get('model').get('review_id') === event) {
            if (checking === "content") {
                this.downContent(event);
            }
            else if (checking === "viewReply") {
                this.viewComments(event);
            }
            for (var i = 0; i < this.get("controller").get("controllers.profile").get('reviews').get('length'); i++) {
                if (this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get('review_id') !== event) {
                    this.upContent(this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                    this.upComments(this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                }
            }
        }


    },
    viewComments: function(event) {
        $('#reply_' + event).attr('style', 'display: block;max-height:0;');
        $('#view-comments_' + event).attr('style', ' display: none; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#view-comments_' + event).animate({display: 'none'}, 500);
        $('#up-comments_' + event).attr('style', 'display: block;background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#up-comments_' + event).animate({display: 'block'}, 10);
        this.get("controller").transitionToRoute('review', {id: event});
        $('#reply_' + event).animate({maxHeight: '200px'}, 10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    },
    upComments: function(event) {
        $('#reply_' + event).attr('style', 'display: none; max-height:0;');
        $('#up-comments_' + event).attr('style', 'display: none;background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#up-comments_' + event).animate({display: 'none'}, 500);
        $('#view-comments_' + event).attr('style', ' display:block; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#view-comments_' + event).animate({display: 'block'}, 10);
        $('#reply_' + event).animate({maxHeight: '0px'}, 10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    }

});


