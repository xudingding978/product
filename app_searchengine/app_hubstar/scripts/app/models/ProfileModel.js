define(
        'models/ProfileModel',
        [
            'ember',
            'emberData'
        ], function() {

    var ProfileModel = DS.Model.extend({
        profile_name: DS.attr('string'),
        last_name: DS.attr('string'),
        first_name: DS.attr('string'),
        email: DS.attr('string'),
        about: DS.attr('string'),
        type: DS.attr('string', "profile"),
        
//        settype: function() {
//            this.set('type', "profile");
//        }.property('type'),
//        init: function() {
//            var type = this.set('profile');
//        },
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return ProfileModel;
}
);

