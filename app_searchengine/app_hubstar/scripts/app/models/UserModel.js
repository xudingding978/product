define('models/UserModel',
        ['ember', 'emberData'],
        function() {
            var UserModel = DS.Model.extend({
                rec_datetime: DS.attr('string'),
                rec_timestamp: DS.attr('string'),
                user_rec_id: DS.attr('string'),
                login_provider: DS.attr('string'),
                login_provider_identifier: DS.attr('string'),
                identifier: DS.attr('string'),
                profile_url: DS.attr('string'),
                website_url: DS.attr('string'),
                photo_url: DS.attr('string'),
                photo_url_large: DS.attr('string'),
                display_name: DS.attr('string'),
                description: DS.attr('string'),
                first_name: DS.attr('string'),
                last_name: DS.attr('string'),
                gender: DS.attr('string'),
                language: DS.attr('string'),
                age: DS.attr('string'),
                birth_day: DS.attr('string'),
                birth_month: DS.attr('string'),
                birth_year: DS.attr('string'),
                email: DS.attr('string'),
                email_verified: DS.attr('string'),
                phone: DS.attr('string'),
                country: DS.attr('string'),
                region: DS.attr('string'),
                city: DS.attr('string'),
                zip: DS.attr('string'),
                post_code: DS.attr('string'),
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

