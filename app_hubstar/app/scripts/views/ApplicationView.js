HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
         $("#select-text").fadeIn(300).css("display","block");
          $("#welcome-text").fadeOut(300).css("display","none");
          setTimeout(function() { 
              $("#select-text").fadeOut(300).css("display","none");
        $("#welcome-text").fadeIn(300).css("display","block");
    },10000);
    

        var that = this;
        $(document).ready(function() {
            if (localStorage.resOrcom === "commercial") {
                setTimeout(function() {
                    $('#discovery_search_bar_wrapper').css({"background": " url(../../images/commercialbg.jpg)"});
                    $(".navbar").css("background", "url(../../images/commercialbg.jpg)");
                    that.get('controller').set('residentialKeyword', false);
                }, 10);
                $("#commercial").addClass("residentialCommerical-selected");
                $("#residential").removeClass("residentialCommerical-selected");

            }
            else {
                $('#discovery_search_bar_wrapper').css({"background": " url(../../images/discoverybarbg.jpg)"});
                $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
                that.get('controller').set('residentialKeyword', true);
                $("#commercial").removeClass("residentialCommerical-selected");
                $("#residential").addClass("residentialCommerical-selected");
            }

            setTimeout(function() {
                if (localStorage.resOrcom === "commercial")
                {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "0.4");
                }
                else if (localStorage.resOrcom === "residential")
                {
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                    $("#Commercial").css("opacity", "0.4");
                    $("#Residential").css("opacity", "1");
                }
                else if (localStorage.resOrcom === "All")
                {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "1");
                }
            }, 50);

        });


        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });
        $(document).bind("touchmove", function() {
            view.didScroll();
        });

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
                            $("#top-menu").css('display', "none");
                        }

                        if (y_scroll_pos < scroll_pos_test && $('#top-about-menu').css('display') === 'none') {
                            $("#top-about-menu").fadeIn("320");
                            $("#search-bar").fadeOut("320");
                            $(".Navigator-box").fadeOut("320");
                            $(".navbar").css("box-shadow", "");
                            $("#top-menu").css('display', "none");
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

