define([
    "ember",
    "text!templates/isotopeTemplate.html",
    'jquery',
    'helpers',
      'jquery.masonry'
], function(Ember, isotopeTemplate) {
    Ember.TEMPLATES["isotope"] = Ember.Handlebars.compile(isotopeTemplate);
    var IsotopeView = Ember.View.extend({
        template: Ember.Handlebars.compile(isotopeTemplate),
        didInsertElement: function() {
            $(function() {

                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 200,
                  
                    isFitWidth: true
                });

            });


        }
    });
    return IsotopeView;
});
