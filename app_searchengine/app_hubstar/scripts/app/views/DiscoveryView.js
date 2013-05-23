define([
    "ember",
    "text!templates/discoveryBarTemplate.html",
    'controllers/SearchsController'
], function(Ember, discoveryBarTemplate, SearchsController) {
    Ember.TEMPLATES["discoveryBar"] = Ember.Handlebars.compile(discoveryBarTemplate);
    var DiscoveryView = Ember.View.extend({
        template: Ember.Handlebars.compile(discoveryBarTemplate),
        searching: function(e) {

            var area = this.$("#search_key").val();
            var search_key = this.$("#search_business").val();
            var object;
            if (search_key !== "" || area !== "") {
                if (area !== "" && search_key !== "") {
                    object = {"id": area + "+" + search_key, "region": area, "result": search_key};
                } else if (area === "" && search_key !== "") {
                    object = {"id": search_key, "region": area, "result": search_key};
                } else if (area !== "" && search_key === "") {
                    object = {"id": area, "region": area, "result": search_key};
                }


            } else {

                object = {"id": "", "region": "", "result": ""};

            }
            

            this.get("controller").send("newSearch", object);
        }
    });
    return DiscoveryView;
});
