define([
    "ember",
    "text!templates/dropdownListTemplate.html"
], function(Ember, dropdownListTemplate) {

    Ember.TEMPLATES["dropdownList"] = Ember.Handlebars.compile(dropdownListTemplate);

    var DropdownListView = Ember.View.extend({
        classNames: ["dropdownViewStyle"],
        template: Ember.Handlebars.compile(dropdownListTemplate),
        didInsertElement: function() {

            $('#dropItem1 > .ite').click(function() {

                $('#dropdownCategory').text($(this).text());
                this.get('controller').set('projectCategory', $(this).text());
            });

            $('#dropItem2 > .ite').click(function() {

                $('#dropdownTimeframe').text($(this).text());
            });
            $('#dropItem3 > .ite').click(function() {

                $('#dropdownBudget').text($(this).text());
            });
            $('#dropItem4 > .ite').click(function() {

                $('#dropdownExperience').text($(this).text());
            });
            $('#dropItem5 > .ite').click(function() {

                $('#packgeSelection').text($(this).text());
            });
        }
    });

    return DropdownListView;
});