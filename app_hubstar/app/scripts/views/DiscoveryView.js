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
    }
});
