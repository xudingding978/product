define(
        'models/EmailModel',
        [
            'ember',
            'emberData'
        ], function() {

    var EmailModel = DS.Model.extend({
        displayName: DS.attr('string'),
        displayEmail: DS.attr('string'),
        emailBody: DS.attr('string'),
        emailSubject: DS.attr('string'),
        emailDestination: DS.attr('string'),
        emaiCCDestination: DS.attr('string'),
        emaiBCCDestination: DS.attr('string'),
        projectCategory: DS.attr('string'),
        projectTimeframe: DS.attr('string'),
        projectBudget: DS.attr('string'),
        projectExperience: DS.attr('string'),
        didLoad: function() {

        }
    });

    return EmailModel;
}
);

