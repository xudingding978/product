HubStar.ReviewListView = Ember.View.extend({
    templateName: 'reviewList',
    didInsertElement: function() {


        $(document).ready(function() {
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });

    },

    downContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var review_reply = "#reviewReplyData_" + event;

        var content = "#review_content_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block;");
        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px;");
        $(content).animate({width: '420px', height: '120px', position: 'relative', display: 'inline-block', overflow: 'auto'}, 2000);
        $(review_reply).show(2000);
    },
    upContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var content = "#review_content_" + event;
          var review_reply = "#reviewReplyData_" + event;
        //  var like = "#review_like_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:none");
        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block");
        $(content).animate({width: '390px', height: '20px', position: 'relative', dispaly: 'none', overflow: 'hidden'}, 2000);
         $(review_reply).hide(2000);
    }
});


