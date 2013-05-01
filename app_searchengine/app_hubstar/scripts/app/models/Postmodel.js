
define('models/Postmodel',
        ['ember', 'emberData'],
        function() {

            var Postmodel = DS.Model.extend({
                title: DS.attr('string'),
                author: DS.attr('string'),
                cents: DS.attr('string'),
                didLoad: function() {
                    console.log('model loaded', this.toJSON());
                    console.log('id: ' + this.id + ' ' + this.get('last_name'), this);
                }
//                test:function()
//                {
//
//                    alert(" test success");
//                }



            });
//            Postmodel.reopenClass({
//                url: 'posts', //this must match JSON_RESPONSE_ROOT_SINGLE constant in modules/api/controllers/ContactController.php
//                pk: "id"
//            });
            return Postmodel;
        }
);

