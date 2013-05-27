
define('models/PhotoModel',
        ['emberData'],
        function() {
            var Image = DS.Model.extend({
                name: DS.attr('string'),
                data_type: DS.attr('string'),
                src: DS.attr('string'),
                progress: DS.attr('string'),
                owner: DS.attr('string'),
                folder: DS.attr('string'),
                tags: DS.attr('string'),
                say: function()
                {
                    alert("say");
                }
            });

            return Image;
        }
);

