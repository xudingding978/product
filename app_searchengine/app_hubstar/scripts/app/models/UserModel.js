<<<<<<< HEAD
define(
        'models/UserModel',
        [
            'ember',
            'emberData'
        ], function() {
    var UserModel = DS.Model.extend({
        mega: DS.belongsTo('App.Mega', {embedded: 'always'}),
        rec_id: DS.attr('string'),
        tenant_rec_id: DS.attr('string'),
//                REC_DATETIME: DS.attr('string'),
//                REC_TIMESTAMP: DS.attr('string'),
//                USER_REC_ID: DS.attr('string'),
//                LOGIN_PROVIDER: DS.attr('string'),
//                LOGIN_PROVIDER_IDENTIFIER: DS.attr('string'),
//                IDENTIFIER: DS.attr('string'),
//                PROFILE_URL: DS.attr('string'),
//                WEBSITE_URL: DS.attr('string'),
//                PHOTO_URL: DS.attr('string'),
//                PHOTO_URL_LARGE: DS.attr('string'),
//                DISPLAY_NAME: DS.attr('string'),
//                DESCRIPTION: DS.attr('string'),
//                FIRST_NAME: DS.attr('string'),
//                LAST_NAME: DS.attr('string'),
//                GENDER: DS.attr('string'),
//                LANGUAGE: DS.attr('string'),
//                AGE: DS.attr('string'),
//                BIRTH_DAY: DS.attr('string'),
//                BIRTH_MONTH: DS.attr('string'),
//                BIRTH_YEAR: DS.attr('string'),
//                EMAIL: DS.attr('string'),
//                EMAIL_VERIFIED: DS.attr('string'),
//                PHONE: DS.attr('string'),
//                COUNTRY: DS.attr('string'),
//                REGION: DS.attr('string'),
//                CITY: DS.attr('string'),
//                ZIP: DS.attr('string'),
//                POST_CODE: DS.attr('string'),
    //    following: DS.hasMany('Users'),
   //     followers: DS.hasMany('Users'),
        didLoad: function() {

        }
    });
=======
define('models/UserModel',
        ['ember', 'emberData'],
        function() {
            var UserModel = DS.Model.extend({
                identifier: DS.attr('string'),
                profileURL: DS.attr('string'),
                webSiteURL: DS.attr('string'),
                photoURL: DS.attr('string'),
                photoURL_large: DS.attr('string'),
                displayName: DS.attr('string'),
                description: DS.attr('string'),
                firstName: DS.attr('string'),
                lastName: DS.attr('string'),
                gender: DS.attr('string'),
                language: DS.attr('string'),
                age: DS.attr('string'),
                birthDay: DS.attr('string'),
                birthMonth: DS.attr('string'),
                birthYear: DS.attr('string'),
                email: DS.attr('string'),
                phone: DS.attr('string'),
                emailVerified: DS.attr('string'),
                country: DS.attr('string'),
                region: DS.attr('string'),
                city: DS.attr('string'),
                zip: DS.attr('string'),
                address: DS.attr('string'),
                didLoad: function() {
                    console.log('model loaded', this.toJSON());
                    console.log('id: ' + this.id + ' ' + this.get('last_name'), this);
                }
            });
>>>>>>> f7dd3d4e930511a3e00bcb817cceb0e1b4cd5f8f
//            UserModel.reopenClass({
//                url: 'search', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//                pk: "id"
//            });
    return UserModel;
}
);

