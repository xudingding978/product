HubStar.ReviewListView = Ember.View.extend({
  
    
    
    templateName: 'reviewList',
    didInsertElement: function() {
      
  
   $(document).ready(function() {

 $('span.starsview').each(function() {
        
        // Get the value
        var val = parseFloat($(this).text());
           console.log('reviewlist');
         console.log(val);
        // Make sure that the value is in 0 - 5 range, multiply to get width
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
      
  }
          

    
    
    
    
    


});
