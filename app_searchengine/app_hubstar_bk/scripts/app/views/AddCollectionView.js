define([
    "ember",
    "text!templates/addCollectionTemplate.html",
    "jquery.ui"

], function(Ember, addCollectionTemplate) {
    Ember.TEMPLATES["addCollection"] = Ember.Handlebars.compile(addCollectionTemplate);
    var AddCollectionView = Ember.View.extend({
        classNames: ["contact-container"],
        template: Ember.Handlebars.compile(addCollectionTemplate),
        didInsertElement: function() {
            if (App.get('chooseCollection') !== null) {

                $('#recordID').text(App.get('chooseCollection'));
            }
        }
    });
    return AddCollectionView;
});
