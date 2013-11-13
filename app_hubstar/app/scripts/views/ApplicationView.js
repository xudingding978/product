HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });
        
        
         $(document).ready(function() {
           $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 270;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
    
         $('#top-about-menu').attr({"style": "display:none;"});
                $('#search-bar').attr({"style": "display:block;"});
	
    }
    else{
        
          $('#top-about-menu').attr({"style": "display:block;"});
                $('#search-bar').attr({"style": "display:none;"});
      
         $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
    }
	
});
         });
        
        
    },
    didScroll: function() {
        if (this.isScrolledToBottom() && HubStar.get('isMansonryPageLoad')) {
            this.get('controller').scrollDownAction();
        }
    },
    isScrolledToBottom: function() {
        var distanceToTop = $(document).height() - $(window).height(),
                top = $(document).scrollTop();
        return top === distanceToTop;
    },
    willDestroyElement: function() {
    },
    reaaarender: function() {
        this.rerender();
    }.observes('controller.test')
});

