HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
        $("#select-text").fadeIn(300).css("display", "block");
        $("#welcome-text").fadeOut(300).css("display", "none");
        setTimeout(function() {
            $("#select-text").fadeOut(300).css("display", "none");
            $("#welcome-text").fadeIn(300).css("display", "block");
        }, 10000);




        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });
        $(document).bind("touchmove", function() {
            view.didScroll();
        });

        var scroll_pos_test = 290;

        $(document).ready(function() {

            $(window).resize(function() {
                if (HubStar.get('showDiscoveryBar') === true) { 
                    
                    if (window.pageYOffset > scroll_pos_test) {
                        if ($(window).width() > 1200) {
                            $("#search-bar").css('display', "block");
                            $("#topResidentialCommerical").css('display', "block");
                            $(".search-bar-on-small-screen").css('display', "none");

                        } else {
                            $("#search-bar").css('display', "none");
                            $("#topResidentialCommerical").css('display', "none");
                            $(".search-bar-on-small-screen").css('display', "block");
                        }
                    }
                    else {
                        $("#search-bar").css('display', "none");
                        $("#topResidentialCommerical").css('display', "none");
                        $(".search-bar-on-small-screen").css('display', "none");

                    }
                } else {
                     
                    if ($(window).width() > 1200) {
                        $("#search-bar").css('display', "block");
                        $("#topResidentialCommerical").css('display', "block");
                        $(".search-bar-on-small-screen").css('display', "none");
                        $('#masonry_container').css('top', "100px");
                    } else {
                        $("#search-bar").css('display', "none");
                        $("#topResidentialCommerical").css('display', "none");
                        $(".search-bar-on-small-screen").css('display', "block");
                       $('#masonry_container').css('top', "150px");
                    }
                }

            });

            $(window).scroll(function() {
                var y_scroll_pos = window.pageYOffset;

                var ifsearch = document.URL.split("#")[1].split("/")[1];
                if (ifsearch === "search") {

                    if (HubStar.get('showDiscoveryBar') === true) {

                        if (y_scroll_pos > scroll_pos_test) {
                            $(".navbar").css("box-shadow", "0 0 10px #333");
                            $("#top-menu").css('display', "none");
                            if ($(window).width() > 1200) {
                                $("#search-bar").fadeIn(320);
                                $("#topResidentialCommerical").fadeIn(320);
                                $(".search-bar-on-small-screen").css('display', "none");
                            } else {
                                $("#search-bar").css('display', "none");
                                $("#topResidentialCommerical").css('display', "none");
                                $(".search-bar-on-small-screen").fadeIn(320);
                            }
                        }

                        if (y_scroll_pos < scroll_pos_test) {

                            $(".Navigator-box").fadeOut("320");
                            $(".navbar").css("box-shadow", "");
                            $("#top-menu").css('display', "none");
                            if ($(window).width() > 1200) {

                                $("#search-bar").fadeOut(320);
                                $("#topResidentialCommerical").fadeOut(320);
                                $(".search-bar-on-small-screen").css('display', "none");
                            } else {

                                $("#search-bar").css('display', "none");
                                $("#topResidentialCommerical").css('display', "none");
                                $(".search-bar-on-small-screen").fadeOut(320);
                            }

                        }
                    }
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
        if (!HubStar.get("scrollDownSearch")) {

            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            if ($("#show_more").offset() !== undefined) {
                var elemTop = $("#show_more").offset().top;

                var elemBottom = elemTop + $("#show_more").height();

                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }
            else
            {
                return false;
            }
        }
        else {
            return false;
        }
    },
    willRemoveElement: function() {
        this.unbindScrolling();
    },
    unbindScrolling: function() {
        $(window).unbind('scroll');
        $(document).unbind('touchmove');
    },
    willDestroyElement: function() {
        this.unbindScrolling();
    },
    reaaarender: function() {
        this.rerender();
    }.observes('controller.test')
});

