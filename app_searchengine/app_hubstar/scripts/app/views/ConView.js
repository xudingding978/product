define([
    "ember",
    "text!templates/discoveryBarTemplate.html",
    "text!templates/masonryTemplate.html",
    "text!templates/photoTemplate.html",
    'controllers/SearchsController'

], function(Ember, discoveryBarTemplate, masonryTemplate, photoTemplate, SearchsController) {

    Ember.TEMPLATES["discovery"] = Ember.Handlebars.compile(discoveryBarTemplate);
    Ember.TEMPLATES["masonry"] = Ember.Handlebars.compile(masonryTemplate);
    Ember.TEMPLATES["photo"] = Ember.Handlebars.compile(photoTemplate);

    var ConView = Ember.ContainerView.create({
//        childViews: ['first_v', 'second_v'],
//        first_v: firstView,
//        second_v: secondView
    });
    return ConView;
});