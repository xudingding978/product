HubStar.Email= DS.Model.extend({
        ownerTitle: DS.attr('string'),
        displayName: DS.attr('string'),
        displayEmail: DS.attr('string'),
        recieveProfile: DS.attr('string'),
        emailBody: DS.attr('string'),
        emailSubject: DS.attr('string'),
        emailDestination: DS.attr('string'),
        emaiCCDestination: DS.attr('string'),
        emaiBCCDestination: DS.attr('string'),
        projectCategory: DS.attr('string'),
        projectTimeframe: DS.attr('string'),
        projectBudget: DS.attr('string'),
        projectExperience: DS.attr('string'),
        projectSubCategoryItem: DS.attr('string'),
        userEnvironment: DS.attr('string'),
        objectUrl: DS.attr('string'),
        didLoad: function() {

        }
    });



