HubStar.HeaderView = Ember.View.extend({
    templateName: 'header',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {
            $("#switchbar").mouseup(function(event) {
                var address = document.URL;
                var type = address.split("#")[1].split("/")[2];
                var mousedownX = event.pageX;

                var mousedownX = event.pageX;
                var witdhleft = $('#switchbar').offset().left;
                var d = 23;
                var middle = witdhleft + d;

                if (mousedownX < middle - d / 2) {
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                    $('#switchbarBtn1').attr("style", "margin-left:0px;");

                    $("#Commercial").css("opacity", "0.4");
                    $("#Residential").css("opacity", "1");
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
                    that.get('controller').set('residentialKeyword', true);
                    that.get('controller').set('subcate', []);
                    that.get('controller').set('subcategories', []);

                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    $('#switchbarBtn1').attr("style", "margin-left:13px;");

                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "1");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "1");
                    localStorage.resOrcom = "All";
                    $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/discoverybarbg.jpg)"}).fadeIn(500);
                    });
                    $('.navbar').fadeOut(500, function() {
                        $(this).css({"background": " url(../../images/landingpagebg.jpg)"}).fadeIn(500);
                    });
                    $(".gradient1").fadeOut(500, function() {
                        $(this).css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%)").fadeIn(500);
                    });
                    that.get('controller').set('residentialKeyword', true);

                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                    $('#switchbarBtn1').attr("style", "margin-left:28px;");
                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "0.4");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "0.4");

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
    searching: function() {
        if (this.$("#search_businesses").val() !== null && this.$("#search_businesses").val() !== "" && this.$("#search_businesses").val() !== undefined)
        {
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
        }
        else {    
        }

    },
    residential: function() {
        $('#switchbarBtn').attr("style", "margin-left:0px;");
                    $('#switchbarBtn1').attr("style", "margin-left:0px;");

                    $("#Commercial").css("opacity", "0.4");
                    $("#Residential").css("opacity", "1");
                    $("#Commercial1").css("opacity", "0.4");
                    $("#Residential1").css("opacity", "1");
                    $("#Commercial").css("opacity", "0.4");
                    $("#Residential").css("opacity", "1");
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
        $('#switchbarBtn').attr("style", "margin-left:28px;");
                    $('#switchbarBtn1').attr("style", "margin-left:28px;");
                    $("#Commercial1").css("opacity", "1");
                    $("#Residential1").css("opacity", "0.4");
                    $("#Commercial").css("opacity", "1");
                    $("#Residential").css("opacity", "0.4");

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
                    this.get('controller').set('residentialKeyword', false);
                    this.get('controller').set('subcate', []);
                    this.get('controller').set('subcategories', []);
                    
                      for (var i = 0; i < this.get("controller").get("categorys").get("length"); i++)
                {
                    this.get("controller").get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
                }
    }
});

