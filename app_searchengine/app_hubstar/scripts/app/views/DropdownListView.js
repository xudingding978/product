define([
    "ember",
    "text!templates/dropdownListTemplate.html"
], function(Ember, dropdownListTemplate) {

    Ember.TEMPLATES["dropdownList"] = Ember.Handlebars.compile(dropdownListTemplate);

    var DropdownListView = Ember.View.extend({
        classNames: ["dropdownViewStyle"],
        template: Ember.Handlebars.compile(dropdownListTemplate)
    });

    return DropdownListView;
});