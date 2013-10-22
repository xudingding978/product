HubStar.ReviewView = Ember.View.extend({
    templateName: 'review',
    didInsertElement: function() {
        
        
     
   $(document).ready(function() {
  $('#example-1').ratings(10).bind('ratingchanged', function(event, data) {
  $('#example-rating-1').text(data.rating); 
  }); 
  

   $('span.stars').stars();


  
  
});
        

//        $(".star-rating").mouseover(function() {
//            $(this).addClass('star-rating-hover star-rating-applied');
//
//        });
//        $(".star-rating").mouseout(function() {
//            $(this).removeClass('star-rating-hover');
//            //$(this).addClass('star-rating-on');
//
//        });
//        $(".star-rating").click(function() {
//            $(this).removeClass('star-rating-hover');
//            $(this).addClass('star-rating-on');
//            
//        });
//        $(".rating-cancel").click(function() {
//            $(".star-rating").removeClass('star-rating-on');
//
//        });

    

   

    }



});
