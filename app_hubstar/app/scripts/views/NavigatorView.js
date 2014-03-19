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
                    $("#Commercial1").css("opacity","0.4");
                    $("#Residential1").css("opacity","1");
                    $("#Commercial").css("opacity","0.4");
                    $("#Residential").css("opacity","1");
                      localStorage.resOrcom="residential";
                     $('#discovery_search_bar_wrapper').css("background"," url(../../images/contactbg.png)");
                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    $('#switchbarBtn1').attr("style", "margin-left:13px;");
                    that.get("controller").set("classification", "All");
                    $("#Commercial1").css("opacity","1");
                    $("#Residential1").css("opacity","1");
                    $("#Commercial").css("opacity","1");
                    $("#Residential").css("opacity","1");
                     localStorage.resOrcom="all";
                     $('#discovery_search_bar_wrapper').css({"background": " url(../../images/discoverybarbg.jpg)"});
                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                    $('#switchbarBtn1').attr("style", "margin-left:28px;");
                    $("#Commercial1").css("opacity","1");
                    $("#Residential1").css("opacity","0.4");
                    $("#Commercial").css("opacity","1");
                    $("#Residential").css("opacity","0.4");
                    that.get("controller").set("classification", "commercial");
                    localStorage.resOrcom="commercial";
                     $('#discovery_search_bar_wrapper').css({"background": " url(../../images/chrome.png)"});
                }
            });

        });

    }

});
