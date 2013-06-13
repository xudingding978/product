

define(['models/PhotoModel',
    'ember'],
        function(
                PhotoModel,
                Ember
                ) {
            var PhotoDisplayAreaController = Ember.Controller.extend({
                content: [],
            });

            return PhotoDisplayAreaController;
        });
