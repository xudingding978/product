HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {

            $("#switchbar").mouseup(function(event) {
                var mousedownX = event.pageX;
                var witdhleft = $('#switchbar').offset().left;
                var d = 23;
                var middle = witdhleft + d;
                if (mousedownX < middle - d / 2) {
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                    $('#switchbarBtn1').attr("style", "margin-left:0px;");
                    that.get("controller").set("classification", "residential");
                    $("#Commercial1").css("opacity", "0.4");
                    $("#Residential1").css("opacity", "1");
                    $("#Commercial").css("opacity", "0.4");
                    $("#Residential").css("opacity", "1");
                    localStorage.resOrcom = "residential";
//                     $('#discovery_search_bar_wrapper').css("background"," url(../../images/contactbg.png)");
//                 $(".navbar").css("background", " url(../../images/contactbg.png)");
//                   $(".gradient1").css("background", " linear-gradient(to bottom, #01b6e3 22%,#f5f5f5 99%)");
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/discoverybarbg.jpg)"}).fadeIn(500);
                    });

                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/landingpagebg.jpg)"}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%)").fadeIn(500);
                    });

                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    $('#switchbarBtn1').attr("style", "margin-left:13px;");
                    that.get("controller").set("classification", "All");
                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "1");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "1");
                    localStorage.resOrcom = "all";
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/discoverybarbg.jpg)"}).fadeIn(500);
                    });
                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/landingpagebg.jpg)"}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%)").fadeIn(500);
                    });
                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                    $('#switchbarBtn1').attr("style", "margin-left:28px;");
                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "0.4");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "0.4");
                    that.get("controller").set("classification", "commercial");
                    localStorage.resOrcom = "commercial";
//                    $('#discovery_search_bar_wrapper').css({"background": " url(../../images/commercialbg.jpg)"});
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/commercialbg.jpg)"}).fadeIn(500);
                    });

                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": "url(../../images/commercialbg.jpg)"}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #191200 22%,#f5f5f5 99%)").fadeIn(500);
                    });

                }
            });

        });

    }

});
