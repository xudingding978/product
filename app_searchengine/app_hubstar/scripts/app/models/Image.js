
define('models/Image',
        ['emberData'],
        function() {

            var Image = DS.Model.extend({
                name: DS.attr('string'),
                path: DS.attr('string'),
                progress: DS.attr('string'),
                say: function()
                {
                    alert("say");
                }
            });

            return Image;
        }
);

