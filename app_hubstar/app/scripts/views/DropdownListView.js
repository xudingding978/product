HubStar.DropdownListView = Ember.View.extend({
    templateName: 'dropdownList',
    classNames: ["dropdownViewStyle"],
    didInsertElement: function() {
        print_country();
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

        $('#profilePackgetDropdown > .ite').click(function() {
            that.get('controller').set('projectCategoryDropdownContent', $(this).text());
        });

        $('#geoDropdown > .ite').click(function() {
            localStorage.geoLocation=$(this).text();
            that.get('controller').set("geoLocation",localStorage.geoLocation);
            that.get('controller').get('controllers.applicationFeedback').statusObserver(null, "Your geographic location has been changed to " + localStorage.geoLocation);
        });

        $('#geoDropdown > .ite').click(function() {
            localStorage.geoLocation=$(this).text();
            that.get('controller').set("geoLocation",localStorage.geoLocation);
        });

        $('#countryDropdown > .ite').click(function() {

            that.get('controller').set('countrySelection', $(this).text());
        });
        $('#regionDropdown > .ite').click(function() {
            that.get('controller').set('regionSelection', $(this).text());
             setTimeout(function() {
                     $("#regionChecking").css("display","inline-block");
            }, 1);
        });

        $('#categoryDropdown > .ite').click(function() {

            that.get('controller').set('categorySelection', $(this).text());
        });
        $('#subcategoryDropdown > .ite').click(function() {
            that.get('controller').set('subcategorySelection', $(this).text());
        });

        $('#profileCategoryDropdown > .ite').click(function() {

            that.get('controller').set('profileCategorySelection', $(this).text());
        });
        $('#profileSubcategoryDropdown > .ite').click(function() {
            that.get('controller').set('profileSubcategorySelection', $(this).text());
        });

        $('#numberDropdown > .ite').click(function() {

            that.get('controller').set('numberSelection', $(this).text());
        });
        $('#is_actvie > .ite').click(function() {
            that.get('controller').set('projectActiveDropdownContent', $(this).text());
        });
        $('#is_delete > .ite').click(function() {
            that.get('controller').set('projectDeleteDropdownContent', $(this).text());
        });
    }
});

