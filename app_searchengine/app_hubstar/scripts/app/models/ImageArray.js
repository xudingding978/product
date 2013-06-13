define('models/ImageArray',
        ['emberData'],
        function() {
            var ImageArray = DS.Model.extend({
                tabItems: DS.hasMany('App.Image')
            });

            return ImageArray;
        }
);
