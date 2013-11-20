HubStar.DiscoveryView = Ember.View.extend({
    templateName: 'discoveryBar',
    searching: function() {

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
        this.get("controller").transitionToRoute('search', {id: search_key});
//        this.get("controller").send("newSearch", area, search_key);
    }


});
