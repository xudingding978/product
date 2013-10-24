HubStar.ReviewListView = Ember.View.extend({
    templateName: 'reviewList',
    didInsertElement: function() {
        
        
          $(document).ready(function() {
            $('span.starsview').each(function() {
                // Get the value
                var val = parseFloat($(this).text());
                // Make sure that the value is in 0 - 10 range, multiply to get width
                var size = Math.max(0, (Math.min(10, val))) * 16;
                // Create stars holder
                var $span = $('<span />').width(size);
                // Replace the numerical value with stars
                $(this).html($span);
            });
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });
        
    },

    downContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;

        var contentClose = "#review_content_close_" + event;
        var contentOpen = "#review_content_open_" + event;

        $(id).animate({
            height: '100px'
        }, 400);


        $(up_button).attr("style", "display:inline-block");
        $(down_button).attr("style", "display:none");
        $(contentOpen).attr("style", "width: 350px; height:100px; position: relative; display: inline-block; word-wrap: break-word;" );
        $(contentClose).attr("style", "width: 350px; height:20px; position: relative; display: none; overflow: hidden; word-wrap: break-word; ");
//            setTimeout(function() {
//                $('#masonry_container').masonry("reload");
//            }, 200);
    },
    upContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var contentClose = "#review_content_close_" + event;
        var contentOpen = "#review_content_open_" + event;
        $(id).animate({
            height: '20px'
        }, 400);
        $(up_button).attr("style", "display:none");
        $(down_button).attr("style", "display:inline-block");
        $(contentClose).attr("style", "width: 350px; height:20px; position: relative; display: inline-block; overflow: hidden; word-wrap: break-word;");
        $(contentOpen).attr("style", "width: 350px; height:100px; position: relative; display:none; word-wrap: break-word;");

//            setTimeout(function() {
//                $('#masonry_container').masonry("reload");
//            }, 200);
    }, toggle:function(){
        $('#review_content_open_').slideToggle(1000);
    }
 
             
            
    });

        



