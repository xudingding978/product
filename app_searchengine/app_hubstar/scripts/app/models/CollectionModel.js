
define('models/CollectionModel',
        ['ember', 'emberData'],
        function() {
            var CollectionModel = DS.Model.extend({
                title: DS.attr('string'),
                desc: DS.attr('string'),
                collection_ids: DS.attr('string'),
                didLoad: function() {
                }
            });

            return CollectionModel;
        }
);

