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
//            UserModel.reopenClass({
//                url: 'search', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//                pk: "id"
//            });
            return UserModel;
        }
);

