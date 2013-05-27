define([
    'ember',
    'models/SearchModel'

], function(
        Ember,
        SearchModel
        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            if (($('#search_key').val() == model.region) || ($('#search_business').val() == model.result)) {
                if (model.result !== "" || model.region !== "") {
                    console.log("aaaaaaaaaaaa" + model);
                    this.controllerFor('search').set('model', SearchModel.find({keywords: model.result, region: model.region}));
                }
            }
        },
        model: function(params) {

            var result = params.search_id;
            var separate = result.indexOf('+');
            var getKey = result.slice(separate + 1);
            var getRegion = result.slice(0, separate);
            $('#search_key').val(getRegion);
            $('#search_business').val(getKey);
            return SearchModel.find({keywords: getKey, region: getRegion});
        },
        renderTemplate: function() {

            this.render('searchs', {
                into: "index"
            });
        }
    });
    return SearchRoute;
});