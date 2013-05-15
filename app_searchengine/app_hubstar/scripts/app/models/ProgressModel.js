
define('models/ProgressModel',
        ['emberData'],
        function() {

            var ProgressModel = DS.Model.extend({
                val: DS.attr('string'),
                say: function()
                {
                    alert("Progress");
                }
            });

            return ProgressModel;
        }
);

