
define('models/StatModel',
        ['ember', 'emberData'],
        function() {

            var stat = DS.Model.extend({
                hits: DS.attr('string'),

                didLoad: function() {

                }


            });

            return stat;
        }
);

