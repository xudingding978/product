HubStar.TagContentView = Ember.View.extend({
    templateName: 'tagContent',
    didInsertElement: function() {

    },
    hideContent: function() {
console.log("ssssssss");
 this.get("controller").set("showEachTagContent", false);
    }

});