
HubStar.DisplayViewMixin = Ember.Mixin.create({
    tt: null,
    displayMixinTest: function(tt) {
        this.set('tt', tt);
    }
});
