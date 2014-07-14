HubStar.DiscoveryView = Ember.View.extend({
    templateName: 'discoveryBar',
    actions: {
        residential: function() {

            if ($("#commercial").hasClass("residentialCommerical-selected")) {
                if ($("#residential").hasClass("residentialCommerical-selected")) {
                    $("#commercial").removeClass("residentialCommerical-selected");
                    localStorage.resOrcom = "residential";
                } else {
                    $("#residential").addClass("residentialCommerical-selected");
                    localStorage.resOrcom = "All";
                }
            }
            else {
                $("#commercial").addClass("residentialCommerical-selected");
                $("#residential").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "residential";
            }
            this.get("controller").residentialCommercialStatus();
            this.get("controller").changeBackground();

        },
        commercial: function() {
            if ($("#residential").hasClass("residentialCommerical-selected")) {
                if ($("#commercial").hasClass("residentialCommerical-selected")) {
                    $("#residential").removeClass("residentialCommerical-selected");
                    localStorage.resOrcom = "commercial";
                } else {
                    $("#commercial").addClass("residentialCommerical-selected");
                    localStorage.resOrcom = "All";
                }
            }
            else {
                $("#residential").addClass("residentialCommerical-selected");
                $("#commercial").removeClass("residentialCommerical-selected");
                localStorage.resOrcom = "commercial";
            }
            this.get("controller").residentialCommercialStatus();
            this.get("controller").changeBackground();


        },
        searching: function() {
            if (this.get("controller").get('loadingTime') === false) {
                if (this.$("#search_business").val() !== null && this.$("#search_business").val() !== "" && this.$("#search_business").val() !== undefined)
                {
                    $(".Navigator-box").css('display', 'none');
                    //  $("#search-bar").fadeIn("320");
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
        }
    },
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {

        });
    }


});
