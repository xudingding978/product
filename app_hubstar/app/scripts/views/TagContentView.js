HubStar.TagContentView = Ember.View.extend({
    templateName: 'tagContent',
    didInsertElement: function() {

    },
    hideContent: function() {
        this.get("controller").set("showEachTagContent", false);
    },
mouseLeave: Ember.aliasMethod('hideContent')
});