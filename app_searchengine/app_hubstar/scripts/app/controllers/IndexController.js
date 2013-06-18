define(['models/MegaModel',
    'ember'],
        function(
                MegaModel,
                Ember
                ) {
            var IndexController = Ember.ArrayController.extend({
                needs: ['searchs'],
                content: [],
                test: function()
                {
                    this.set("content", this.get('controllers.searchs.content'));
                }.observes('controllers.searchs.content')
            });
            return IndexController;
        });
