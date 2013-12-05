HubStar.DropdownListView = Ember.View.extend({
    templateName: 'dropdownList',
    classNames: ["dropdownViewStyle"],
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

        $('#profilePackgetDropdown > .ite').click(function() {
            that.get('controller').set('projectCategoryDropdownContent', $(this).text());
        });

        $('#geoDropdown > .ite').click(function() {
            HubStar.set('geoLocation', $(this).text());
            that.get('controller').get('controllers.applicationFeedback').statusObserver(null, "You geographic location has been changed into " + HubStar.get('geoLocation'));
        });

           $('#countryDropdown > .ite').click(function() {

                that.get('controller').set('countrySelection', $(this).text());
            });
            
<<<<<<< HEAD
                  $('#regionDropdown > .ite').click(function() {

                that.get('controller').set('regionSelection', $(this).text());
=======
             $('#profilePackgetDropdown > .ite').click(function() {
                that.get('controller').set('projectCategoryDropdownContent', $(this).text());
           });
           
           $('#geoDropdown > .ite').click(function() {
                HubStar.set('geoLocation', $(this).text());
                that.get('controller').get('controllers.applicationFeedback').statusObserver(null, "You are now searching within "+HubStar.get('geoLocation')+" only.");
           });
             
           $('#packgetDropdown > .ite').click(function() {

                that.get('controller').set('packgeSelection', $(this).text());
            });
          
               $('#categoryDropdown > .ite').click(function() {
                that.get('controller').set('categorySelection', $(this).text());
            });
        
              $('#is_actvie > .ite').click(function() {
                that.get('controller').set('projectActiveDropdownContent', $(this).text());
            });
              $('#is_delete > .ite').click(function() {
                that.get('controller').set('projectDeleteDropdownContent', $(this).text());
>>>>>>> 1289a834857879ad8edef13d1ed692666804d77e
            });

        $('#categoryDropdown > .ite').click(function() {
            
            that.get('controller').set('categorySelection', $(this).text());
        });
        $('#subcategoryDropdown > .ite').click(function() {
            that.get('controller').set('subcategorySelection', $(this).text());
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

