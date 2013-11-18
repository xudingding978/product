HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',
    
          sidebarScroll: function() {
            function scrollTest(that) {
                var screenYPix = $('.firstList').parent().offset().top;
                if (Math.abs(screenYPix - $(that).offset().top) > 180) {
                    if (screenYPix - $(that).offset().top < 0) {
                        $(that).parent().stop().animate({
                            top: '-=' + (Math.abs(screenYPix - $(that).offset().top) - 180)
                        }, 135, function() {
                        });
                    } else {
                        $(that).parent().stop().animate({
                            top: '+=' + (Math.abs(screenYPix - $(that).offset().top) - 180)
                        }, 135, function() {
                        });
                    }
                }
            }
            $(function() {
                $('.firstList > li ').mousemove(function(e) {
                    var that = this;
                    scrollTest(that);

                });
                $('.firstList > li >ul>li').mousemove(function(e) {
                    var that = this;
                    scrollTest(that);

                });
                $('.firstList > li > ul >li >ul>li').mousemove(function(e) {
                    var that = this;
                    scrollTest(that);

                });

                $('#nav-ul').mouseleave(function() {

                    $('.firstList').stop();
                });

            });


            $("#navContainer > ul > li >span").hover(function() {
                $("#navContainer > ul > li").not(this).removeClass('sidebar-hover');
            });



            $("#navContainer > ul > li> ul >li >span").hover(function() {

                $(this).parent().parent().parent().addClass("sidebar-hover");

            });


            $("#navContainer > ul > li> ul >li >span").hover(function() {
                $("#navContainer > ul > li> ul >li").not(this).removeClass('sidebar-hover');
            });



            $("#navContainer > ul > li> ul >li>ul> li>span").hover(function() {

                $(this).parent().parent().parent().addClass("sidebar-hover");

            });

            $("#navContainer > ul > li> ul >li> ul >li >span").hover(function() {
                $("#navContainer > ul > li> ul >li> ul >li").not(this).removeClass('sidebar-hover');
            });



            $("#navContainer > ul > li> ul >li>ul> li > ul ").hover(function() {
                $navContaineraddClass("sidebar-hover");

            });
        }
    
    
    

});
