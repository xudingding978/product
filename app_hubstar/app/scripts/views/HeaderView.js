HubStar.HeaderView = Ember.View.extend({
    templateName: 'header',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {
            $("#switchbar").mouseup(function(event) {
                var address = document.URL;
                var type = address.split("#")[1].split("/")[2];
                
                var mousedownX = event.pageX;
                var witdhleft = $('#switchbar').offset().left;
                 var d = 23;
                var middle = witdhleft + d;
               

                if (mousedownX < middle - d / 2) {
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                    that.get("controller").set("classification", "residential");
                    $("#Commercial").css("opacity","0.4");
                    $("#Residential").css("opacity","1");
                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    that.get("controller").set("classification", "All");
                    $("#Residential").css("opacity","1");
                    $("#Commercial").css("opacity","1");
                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                     that.get("controller").set("classification", "commercial");
                     $("#Residential").css("opacity","0.4");
                     $("#Commercial").css("opacity","1");
                }
            });
        });
    },
    searching: function() {
        $(".Navigator-box").css('display', 'none');
        $("#top-about-menu").fadeOut("320");
        $("#search-bar").fadeIn("320");
        HubStar.set("showDiscoveryBar", false);
        var area = this.$("#search_key").val();
        var search_key = this.$("#search_businesses").val();
        var object;
        if (search_key !== "" || area !== "") {
            if (area !== "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area === "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area !== "" && search_key === "") {
                object = {"region": area, "search_string": search_key};
            }
        } else {
            object = {"region": "", "search_string": ""};
        }
        HubStar.set("escVideo", false);
        this.get("controller").transitionToRoute('search', {id: search_key});
//        this.get("controller").send("newSearch", area, search_key);
    }
});

