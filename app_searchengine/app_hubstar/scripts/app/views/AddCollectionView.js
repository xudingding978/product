define([
    "ember",
    "text!templates/addCollectionTemplate.html",
    "jquery.ui"

], function(Ember, addCollectionTemplate) {
    var AddCollectionView = Ember.View.extend({
        classNames: ["window-container"],
        template: Ember.Handlebars.compile(addCollectionTemplate),
        didInsertElement: function() {

            this.$().draggable({

                cursor: "move",

                scroll: true,
                scrollSensitivity: 100
            });

        }
    });
    return AddCollectionView;
});
