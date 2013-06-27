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
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return EmailModel;
}
);

