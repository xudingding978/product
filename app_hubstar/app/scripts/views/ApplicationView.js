HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });

//         $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");

        var scroll_pos_test = 290;

        $(document).ready(function() {

            $(window).scroll(function() {
                var y_scroll_pos = window.pageYOffset;

                var ifsearch = document.URL.split("#")[1].split("/")[1];
                if (ifsearch === "search") {

                    if (HubStar.get('showDiscoveryBar') === true) {

                        if (y_scroll_pos > scroll_pos_test && $('#top-about-menu').css('display') === 'block') {
                            $(".Navigator-box").css('display', 'none');
                            $("#top-about-menu").fadeOut("320");
                            $("#search-bar").fadeIn("320");
                            $(".navbar").css("box-shadow", "0 0 10px #333");

                        }

                        if (y_scroll_pos < scroll_pos_test && $('#top-about-menu').css('display') === 'none') {
                            $("#top-about-menu").fadeIn("320");
                            $("#search-bar").fadeOut("320");
                            $(".Navigator-box").fadeOut("320");
                            $(".navbar").css("box-shadow", "");

                        }
                    }
                }

            });
            var that = this;
            window.addEventListener('popstate', function(e) {
            
            
                //  history.replaceState(null, null, 'http://develop.trendsideas.com:9000/#/users/25180585742/collections/ss');
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

