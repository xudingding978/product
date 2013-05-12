
define('models/ImageFile',
        ['ember', 'emberData'],
        function() {

            var ImageFile = DS.Model.extend({
                test_id: DS.attr('string'),
                name: DS.attr('string'),
                path: DS.attr('string')
            });

            return ImageFile;
        }
);

