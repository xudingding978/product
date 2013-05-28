define('models/UserModel',
        ['ember', 'emberData'],
        function() {
            var UserModel = DS.Model.extend({
                REC_ID: DS.attr('string'),
                TENANT_REC_ID: DS.attr('string'),
                REC_DATETIME: DS.attr('string'),
                REC_TIMESTAMP: DS.attr('string'),
                USER_REC_ID: DS.attr('string'),
                LOGIN_PROVIDER: DS.attr('string'),
                LOGIN_PROVIDER_IDENTIFIER: DS.attr('string'),
                IDENTIFIER: DS.attr('string'),
                PROFILE_URL: DS.attr('string'),
                WEBSITE_URL: DS.attr('string'),
                PHOTO_URL: DS.attr('string'),
                PHOTO_URL_LARGE: DS.attr('string'),
                DISPLAY_NAME: DS.attr('string'),
                DESCRIPTION: DS.attr('string'),
                FIRST_NAME: DS.attr('string'),
                LAST_NAME: DS.attr('string'),
                GENDER: DS.attr('string'),
                LANGUAGE: DS.attr('string'),
                AGE: DS.attr('string'),
                BIRTH_DAY: DS.attr('string'),
                BIRTH_MONTH: DS.attr('string'),
                BIRTH_YEAR: DS.attr('string'),
                EMAIL: DS.attr('string'),
                EMAIL_VERIFIED: DS.attr('string'),
                PHONE: DS.attr('string'),
                COUNTRY: DS.attr('string'),
                REGION: DS.attr('string'),
                CITY: DS.attr('string'),
                ZIP: DS.attr('string'),
                POST_CODE: DS.attr('string'),
                following: DS.hasMany('Users'),
                followers: DS.hasMany('Users'),
                didLoad: function() {
                    console.log('model loaded', this.toJSON());
                    console.log('id: ' + this.id + ' ' + this.get('last_name'), this);
                }
            });
//            UserModel.reopenClass({
//                url: 'search', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//                pk: "id"
//            });
            return UserModel;
        }
);

