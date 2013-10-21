HubStar.ReviewView = Ember.View.extend({
    templateName: 'review',
    didInsertElement: function() {

        $(".star-rating").mouseover(function() {
            $(this).addClass('star-rating-hover star-rating-applied');

        });
        $(".star-rating").mouseout(function() {
            $(this).removeClass('star-rating-hover');
            //$(this).addClass('star-rating-on');

        });
        $(".star-rating").click(function() {
            $(this).removeClass('star-rating-hover');
            $(this).addClass('star-rating-on');
            
        });
        $(".rating-cancel").click(function() {
            $(".star-rating").removeClass('star-rating-on');

        });

    
//        $('.star-rating').rating({
//            focus: function(value, link) {
//                // 'this' is the hidden form element holding the current value
//                // 'value' is the value selected
//                // 'element' points to the link element that received the click.
//                var tip = $('#hover-test');
//                tip[0].data = tip[0].data || tip.html();
//              
//                tip.html(link.title || 'value: ' + value);
//                 
//                
//                var value=link.title;
//             
//            },
//            blur: function(value, link) {
//                var tip = $('#hover-test');
//              
//                $('#hover-test').html(tip[0].data || '');
//                    
//           //   console.log(link.title);
//                
//            }
//        });
   

    }



});
