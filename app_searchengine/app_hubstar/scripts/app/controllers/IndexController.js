define(['models/SearchModel',
    'ember'],
        function(
                SearchModel,
                Ember
                ) {
            var IndexController = Ember.ArrayController.extend({
            });
            return IndexController;
        });
