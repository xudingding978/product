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
                object = { "region": "", "search_string": ""};
            }
            this.get("controller").send("newSearch", area,search_key);
        },
        test: function() {
this.searching();
//            var area = $("#search_key").val();
//            var search_key = $("#search_business").val();
//            var object;
//            if (search_key !== "" || area !== "") {
//                if (area !== "" && search_key !== "") {
//                    object = {"region": area, "search_string": search_key};
//                } else if (area === "" && search_key !== "") {
//                    object = {"region": area, "search_string": search_key};
//                } else if (area !== "" && search_key === "") {
//                    object = {"region": area, "search_string": search_key};
//                }
//            } else {
//                object = {"id": "", "region": "", "search_string": ""};
//            }
//   //         console.log(this);
//       this.get("controller").send("newSearch", object);
                 //this.controllerFor('searchs').newSearch(object);
          //  this.send("newSearch", object);
        }

    });
    return DiscoveryView;
});
