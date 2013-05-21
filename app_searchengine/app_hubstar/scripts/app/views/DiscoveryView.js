define([
    "ember",
    "text!templates/discoveryBarTemplate.html"
], function(Ember, discoveryBarTemplate) {
    Ember.TEMPLATES["discoveryBar"] = Ember.Handlebars.compile(discoveryBarTemplate);
    var DiscoveryView = Ember.View.extend({
        template: Ember.Handlebars.compile(discoveryBarTemplate),
        searching: function(e) {

            var area = this.$("#search_key").val();
            var search_key = this.$("#search_business").val();

            alert(area + search_key);
            //     this.set("content.name", new_name);

        }
    });
    return DiscoveryView;
});
