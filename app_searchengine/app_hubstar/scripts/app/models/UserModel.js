define('models/UserModel',
        ['ember', 'emberData'],
        function() {

            var UserModel = DS.Model.extend({
                first_name: DS.attr('string'),
                last_name: DS.attr('string'),
                email: DS.attr('string'),
                didLoad: function() {
                    console.log('model loaded', this.toJSON());
                    console.log('id: ' + this.id + ' ' + this.get('last_name'), this);
                }
            });
//            Postmodel.reopenClass({
//                url: 'posts', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//                pk: "id"
//            });
            return UserModel;
        }
);

