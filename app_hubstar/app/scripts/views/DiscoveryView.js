HubStar.DiscoveryView = Ember.View.extend({
    templateName: 'discoveryBar',
    searching: function() {
        if (this.get("controller").get('loadingTime') === false) {
            if (this.$("#search_business").val() !== null && this.$("#search_business").val() !== "" && this.$("#search_business").val() !== undefined)
            {
                $(".Navigator-box").css('display', 'none');
                $("#top-about-menu").fadeOut("320");
                $("#search-bar").fadeIn("320");
                HubStar.set("showDiscoveryBar", false);
                var area = this.$("#search_key").val();
                var search_key = this.$("#search_business").val();
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
            else {
//                this.get("controller").get('controllers.applicationFeedback').statusObserver(null, "Please insert  keywords to search.", "warnning");
            }
        }
    },
    residential: function() {
        $("#Residential").addClass("residentialCommerical-selected");
        $('#switchbarBtn1').attr("style", "margin-left:0px;");
        $("#Commercial1").css("opacity", "0.4");
        $("#Residential1").css("opacity", "1");
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
        $("#Commercial").addClass("residentialCommerical-selected");
        $("#Commercial1").css("opacity", "1");
        $("#Residential1").css("opacity", "0.4");

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
