define(["ember", 'models/CateModel'], function(Ember, CateModel) {
    var PlatformBarController = Ember.ArrayController.extend({
        categorys: []
    }
    );
    return PlatformBarController;
});
