
define('models/ImageFile',
        ['emberData'],
        function() {

            var ImageFile = DS.Model.extend({
                name: DS.attr('string'),
                path: DS.attr('string'),
                progress: DS.attr('string'),
                say: function()
                {
                    alert("say");
                }
            });

            return ImageFile;
        }
);

