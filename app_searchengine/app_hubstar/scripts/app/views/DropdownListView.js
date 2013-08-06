define([
    "ember",
    "text!templates/dropdownListTemplate.html"
], function(Ember, dropdownListTemplate) {

    Ember.TEMPLATES["dropdownList"] = Ember.Handlebars.compile(dropdownListTemplate);

    var DropdownListView = Ember.View.extend({
        classNames: ["dropdownViewStyle"],
        template: Ember.Handlebars.compile(dropdownListTemplate),
        didInsertElement: function() {
            var that = this;
            $('#dropItem1 > .ite').click(function() {


                that.get('controller').set('projectCategorySelection', $(this).text());
            });

            $('#dropItem2 > .ite').click(function() {

                //    $('#dropdownTimeframe').text($(this).text());
                that.get('controller').set('timeframeSelection', $(this).text());
            });
            $('#dropItem3 > .ite').click(function() {

                //        $('#dropdownBudget').text($(this).text());
                that.get('controller').set('projectBudgetSelection', $(this).text());
            });
            $('#dropItem4 > .ite').click(function() {

                that.get('controller').set('projectExperienceSelection', $(this).text());
            });
           $('#packgetDropdown > .ite').click(function() {

                that.get('controller').set('dropdownCategory', $(this).text());
            });
           $('#profilePackgetDropdown > .ite').click(function() {
               console.log($(this).text());
                that.get('controller').set('projectCategoryDropdownContent', $(this).text());
            });
              $('#is_actvie > .ite').click(function() {
                that.get('controller').set('projectActiveDropdownContent', $(this).text());
            });
              $('#is_delete > .ite').click(function() {
                that.get('controller').set('projectDeleteDropdownContent', $(this).text());
            });
        }
    });

    return DropdownListView;
});