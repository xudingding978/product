define([
    "ember",
    "text!templates/discoveryBarTemplate.html",
    'controllers/SearchsController'
], function(Ember, discoveryBarTemplate, SearchsController) {
    Ember.TEMPLATES["discoveryBar"] = Ember.Handlebars.compile(discoveryBarTemplate);
    var DiscoveryView = Ember.View.extend({
        template: Ember.Handlebars.compile(discoveryBarTemplate),
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
                object = {"id": "", "region": "", "search_string": ""};
            }
            this.get("controller").send("newSearch", object);
            console.log(this.get("controller"));
        },
        test: function() {

             alert(0);
            var area = $("#search_key").val();
            var search_key = $("#search_business").val();
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
                object = {"id": "", "region": "", "search_string": ""};
            }
            console.log(this);
            //     this.controllerFor('searchs').newSearch(object);
            this.send("newSearch", object);
        }

    });
    return DiscoveryView;
});
