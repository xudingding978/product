HubStar.DropdownListView = Ember.View.extend({
        classNames: ["dropdownViewStyle"],

        didInsertElement: function() {
            var that = this;
            $('#dropItem1 > .ite').click(function() {

                //        $('#dropdownCategory').text($(this).text());

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

                //        $('#dropdownExperience').text($(this).text());
                that.get('controller').set('projectExperienceSelection', $(this).text());
            });

        }
    });

