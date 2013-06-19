
define('models/CollectionModel',
        ['ember', 'emberData'],
        function() {
            var CollectionModel = DS.Model.extend({
                title: DS.attr('string'),
                desc: DS.attr('string'),
                comment: DS.attr('string'),
                didLoad: function() {
                }
            });

            return CollectionModel;
        }
);

