define([
    "ember",
    "text!templates/filesTemplate.html"
], function(Ember, filesTemplate) {
    Ember.TEMPLATES["files"] = Ember.Handlebars.compile(filesTemplate);
    var FilesView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(filesTemplate),
        didInsertElement: function() {



        }
    });
    return FilesView;
});
