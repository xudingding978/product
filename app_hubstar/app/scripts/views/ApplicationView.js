HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });

        $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
       
        var scroll_pos_test = 440;
        
    
        

        $(document).ready(function() {
            $(window).scroll(function() {
                 var y_scroll_pos = window.pageYOffset;
                
                if (y_scroll_pos > scroll_pos_test && $('#top-about-menu').css('display') === 'block') {
                    $(".Navigator-box").css('display', 'none');
                    $("#top-about-menu").fadeOut("320");
                    $("#search-bar").fadeIn("320");
                }

                if (y_scroll_pos < scroll_pos_test && $('#top-about-menu').css('display') === 'none') {
                    $("#top-about-menu").fadeIn("320");
                    $("#search-bar").fadeOut("320");
                    $(".Navigator-box").fadeOut("320");
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

