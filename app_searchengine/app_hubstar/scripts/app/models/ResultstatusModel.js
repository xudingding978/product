
define('models/ResultstatusModel',
        ['ember', 'emberData'],
        function() {

            var ResultstatusModel = DS.Model.extend({
                hits: DS.attr('string'),
    //            search_string: DS.attr('string'),
                didLoad: function() {
//                    console.log('model loaded', this.toJSON());
//                    console.log('id: ' + this.id + ' ' + this.get('last_name'), this);
                }


            });

            return ResultstatusModel;
        }
);

