HubStar.ReviewListView = Ember.View.extend({
    templateName: 'reviewList',
    didInsertElement: function() {

   $('span.stars').each(function() {
        $(this).html($('<span />').width(Math.max(0, (Math.min(10, parseFloat($(this).html())))) * 16));
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
        $(contentOpen).attr("style", "width: 350px; height:100px; position: relative; display: inline-block; word-wrap: break-word;");
        $(contentClose).attr("style", "width: 350px; height:20px; position: relative; display: none; overflow: hidden; word-wrap: break-word;");
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
    },
            
            
     ratingStarValue:function(){
         $('span.star').stars();
     }
             
             
            
    });

        



