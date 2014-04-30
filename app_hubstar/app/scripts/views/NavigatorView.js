HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {

            $("#switchbar1").mouseup(function(event) {
                var address = document.URL;
                var type = address.split("#")[1].split("/")[2];
                var mousedownX = event.pageX;
                var witdhleft = $('#switchbar1').offset().left;
                var d = 23;
                var middle = witdhleft + d;
                if (mousedownX < middle - d / 2) {
                    $('#switchbarBtn1').attr("style", "margin-left:0px;");
                    $("#Commercial1").css("opacity", "0.4");
                    $("#Residential1").css("opacity", "1");
                    $("#commercial").removeClass("residentialCommerical-selected");
                    $("#residential").addClass("residentialCommerical-selected");
                    localStorage.resOrcom = "residential";
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/discoverybarbg.jpg) "}).fadeIn(500);
                    });

                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/landingpagebg.jpg)"}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%)").fadeIn(500);
                    });
                    that.get('controller').set('residentialKeyword', true);
                    that.get('controller').set('subcate', []);
                    that.get('controller').set('subcategories', []);
                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn1').attr("style", "margin-left:13px;");
                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "1");
                    $("#commercial").addClass("residentialCommerical-selected");
                    $("#residential").raddClass("residentialCommerical-selected");
                    localStorage.resOrcom = "All";
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/discoverybarbg.jpg) "}).fadeIn(500);
                    });
                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/landingpagebg.jpg) "}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%) ").fadeIn(500);
                    });
                    that.get('controller').set('residentialKeyword', true);

                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn1').attr("style", "margin-left:28px;");
                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "0.4");
                    $("#commercial").addClass("residentialCommerical-selected");
                    $("#residential").removeClass("residentialCommerical-selected");
                    localStorage.resOrcom = "commercial";
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/commercialbg.jpg) "}).fadeIn(500);
                    });

                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": "url(../../images/commercialbg.jpg) "}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #191200 22%,#f5f5f5 99%)").fadeIn(500);
                    });
                    that.get('controller').set('residentialKeyword', false);
                    that.get('controller').set('subcate', []);
                    that.get('controller').set('subcategories', []);

                }
                for (var i = 0; i < that.get("controller").get("categorys").get("length"); i++)
                {
                    that.get("controller").get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
                }
            });

        });

    },
    residential: function() {
        $('#switchbarBtn1').attr("style", "margin-left:0px;");
        $("#Commercial1").css("opacity", "0.4");
        $("#Residential1").css("opacity", "1");
        $("#residential").addClass("residentialCommerical-selected");
        $("#commercial").removeClass("residentialCommerical-selected");
        localStorage.resOrcom = "residential";
        $('#discovery_search_bar_wrapper').fadeOut(500, function() {
            $(this).css({"background": " url(../../images/discoverybarbg.jpg)"}).fadeIn(500);
        });

        $('.navbar').fadeOut(500, function() {
            $(this).css({"background": " url(../../images/landingpagebg.jpg)"}).fadeIn(500);
        });
        $(".gradient1").fadeOut(500, function() {
            $(this).css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%)").fadeIn(500);
        });
        this.get('controller').set('residentialKeyword', true);
        this.get('controller').set('subcate', []);
        this.get('controller').set('subcategories', []);

        for (var i = 0; i < this.get("controller").get("categorys").get("length"); i++)
        {
            this.get("controller").get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
        }

    },
    commercial: function() {
        $('#switchbarBtn1').attr("style", "margin-left:28px;");
        $("#Commercial1").css("opacity", "1");
        $("#Residential1").css("opacity", "0.4");
        $("#commercial").addClass("residentialCommerical-selected");
        $("#residential").removeClass("residentialCommerical-selected");

        localStorage.resOrcom = "commercial";
        $('#discovery_search_bar_wrapper').fadeOut(500, function() {
            $(this).css({"background": " url(../../images/commercialbg.jpg)"}).fadeIn(500);
        });

        $('.navbar').fadeOut(500, function() {
            $(this).css({"background": "url(../../images/commercialbg.jpg)"}).fadeIn(500);
        });
        $(".gradient1").fadeOut(500, function() {
            $(this).css("background", " linear-gradient(to bottom, #191200 22%,#f5f5f5 99%)").fadeIn(500);
        });
        this.get('controller').set('residentialKeyword', false);
        this.get('controller').set('subcate', []);
        this.get('controller').set('subcategories', []);

        for (var i = 0; i < this.get("controller").get("categorys").get("length"); i++)
        {
            this.get("controller").get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
        }
    }

});
