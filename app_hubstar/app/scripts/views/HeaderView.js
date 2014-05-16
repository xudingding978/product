HubStar.HeaderView = Ember.View.extend({
    templateName: 'header',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {
            $("#back-top").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 150) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
            $('#back-top a').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    },
    searching: function() {
        if (this.$("#search_businesses").val() !== null && this.$("#search_businesses").val() !== "" && this.$("#search_businesses").val() !== undefined
               )
        {
            $(".Navigator-box").css('display', 'none');
         //   $("#search-bar").fadeIn("320");
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
     searchingSmall: function() {
        if (this.$("#search_businesses-small").val() !== null && this.$("#search_businesses-small").val() !== "" && this.$("#search_businesses-small").val() !== undefined
               )
        {
            $(".Navigator-box").css('display', 'none');
         //   $("#search-bar").fadeIn("320");
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

        if ($("#commercial1").hasClass("residentialCommerical-selected")) {
            if ($("#residential1").hasClass("residentialCommerical-selected")) {
                $("#commercial1").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "residential";
            } else {
                $("#residential1").addClass("residentialCommerical-selected");
                localStorage.resOrcom = "All";
            }
        }
        else {
            $("#commercial1").addClass("residentialCommerical-selected");
            $("#residential1").removeClass("residentialCommerical-selected");
            localStorage.resOrcom = "residential";
       
        }
        this.get("controller").residentialCommercialStatus();
        this.get("controller").changeBackground();
     

    },
    commercial: function() {
        if ($("#residential1").hasClass("residentialCommerical-selected")) {
            if ($("#commercial1").hasClass("residentialCommerical-selected")) {
                $("#residential1").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "commercial";


            } else {
                $("#commercial1").addClass("residentialCommerical-selected");
                localStorage.resOrcom = "All";
            }
        }
        else {
            $("#residential1").addClass("residentialCommerical-selected");
            $("#commercial1").removeClass("residentialCommerical-selected");
            localStorage.resOrcom = "commercial";
        }
         this.get("controller").residentialCommercialStatus();
        this.get("controller").changeBackground();
    }
});

