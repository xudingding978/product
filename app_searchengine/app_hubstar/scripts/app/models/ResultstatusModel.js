
define('models/ResultstatusModel',
        ['ember', 'emberData'],
        function() {

            var ResultstatusModel = DS.Model.extend({
                title: DS.attr('string'),
                author: DS.attr('string'),
                intro: DS.attr('string'),
                didLoad: function() {
//                    console.log('model loaded', this.toJSON());
//                    console.log('id: ' + this.id + ' ' + this.get('last_name'), this);
                }


            });

            return ResultstatusModel;
        }
);

