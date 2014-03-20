HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
        $(document).ready(function() {
        if( localStorage.resOrcom==="residential"){
            $('#discovery_search_bar_wrapper').css({"background": " url(../../images/contactbg.png)"});
            $(".navbar").css("background", " url(../../images/contactbg.png)");
        }
        else if( localStorage.resOrcom==="commercial"){
            $('#discovery_search_bar_wrapper').css({"background": " url(../../images/chrome.png)"});
            $(".navbar").css("background", " url(../../images/chrome.png)");
        }
        else{
            $('#discovery_search_bar_wrapper').css({"background": " url(../../images/discoverybarbg.jpg)"});
            $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
        }
        });
        
        
        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });
        $(document).bind("touchmove", function() {
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

        });
//        var that = this;
//        window.addEventListener('popstate', function(e) {
//            var address = document.URL;
//            var previousUrl = HubStar.get("previousUrl");
//
//            var user_id = address.split("#")[1].split("/")[1];
//            var id = address.split("#")[1].split("/")[2];
//            var collection_type = address.split("#")[1].split("/")[3];
//            var collection_id = address.split("#")[1].split("/")[4];
//            var photo_type = address.split("#")[1].split("/")[5];
//            var photo_id = address.split("#")[1].split("/")[6];
//            console.log(previousUrl);
//            console.log(address);
//
//
//            if (address !== previousUrl) {
//                if ((previousUrl.split("#")[1].split("/")[1] === "profiles" || previousUrl.split("#")[1].split("/")[1] === "users") && previousUrl.split("#")[1].split("/")[4] === "undefined")
//                {
//                    if ((user_id === "search" && collection_id === "undefined"))
//                    {
//                        HubStar.set("escVideo", true);
//                        that.get('controller').transitionTo("search", {id: id});
//                    }
//                }
//                else if ((previousUrl === "undefined") && (user_id === "profiles" || user_id === "users"))
//                {
//                    HubStar.set("escVideo", true);
//                    that.get('controller').transitionTo("search", {id: id});
//                }
//
//                HubStar.set("previousUrl", address);
//            }
////                if (user_id === "users" && collection_id === "undefined")
////                {
////                    HubStar.set("escVideo", true);
////                    that.get('controller').transitionTo("searchIndex");
////                }
////                else if (user_id === "profiles" && collection_id === "undefined")
////                {
////                    HubStar.set("escVideo", true);
////                    that.get('controller').transitionTo("searchIndex");
////                }
////                else
////                {
////                    if (collection_type === "photos")
////                    {
//////                        count++;
//////                        if (count === 1)
//////                        {
//////                            console.log("sssss");
//////                            HubStar.set("escVideo", true);
//////
//////                            // window.location.reload();
//////                            // console.log(that.get('controller'));
//////                            that.get('controller').transitionTo("search", {id: id});
////////                         setTimeout(function() {
////////                            $('#masonry_container').masonry();
////////                        }, 300);
//////
//////                        }
////
////                    }
////
////                }
//
//
//
//
//
//            //  history.replaceState(null, null, 'http://develop.trendsideas.com:9000/#/users/25180585742/collections/ss');
//        });
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
           // console.log($("#show_more_button").offset());
           
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

