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
            }
            else {
            }
        }
    },
    residential: function() {

        if ($("#commercial").hasClass("residentialCommerical-selected")) {
            if ($("#residential").hasClass("residentialCommerical-selected")) {
                $("#residential").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "commercial";
                this.get('controller').set('residentialKeyword', false);
            } else {
                $("#residential").addClass("residentialCommerical-selected");
                localStorage.resOrcom = "All";
                this.get('controller').set('residentialKeyword', true);
            }
        }
        else {
            $("#commercial").addClass("residentialCommerical-selected");
            $("#residential").removeClass("residentialCommerical-selected");
            localStorage.resOrcom = "commercial";
            this.get('controller').set('residentialKeyword', false);
        }
        this.get("controller").changeBackground();


        this.get('controller').set('subcate', []);
        this.get('controller').set('subcategories', []);
        for (var i = 0; i < this.get("controller").get("categorys").get("length"); i++)
        {
            this.get("controller").get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
        }
    },
    commercial: function() {
        if ($("#residential").hasClass("residentialCommerical-selected")) {
            if ($("#commercial").hasClass("residentialCommerical-selected")) {
                $("#commercial").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "residential";


            } else {
                $("#commercial").addClass("residentialCommerical-selected");
                localStorage.resOrcom = "All";
            }
        }
        else {
            $("#residential").addClass("residentialCommerical-selected");
            $("#commercial").removeClass("residentialCommerical-selected");
            localStorage.resOrcom = "residential";

        }
        this.get("controller").changeBackground();

        $('#switchbarBtn1').attr("style", "margin-left:28px;");
        $("#Commercial1").css("opacity", "1");
        $("#Residential1").css("opacity", "0.4");

        this.get('controller').set('residentialKeyword', true);
        this.get('controller').set('subcate', []);
        this.get('controller').set('subcategories', []);

        for (var i = 0; i < this.get("controller").get("categorys").get("length"); i++)
        {
            this.get("controller").get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
        }
    }
});
