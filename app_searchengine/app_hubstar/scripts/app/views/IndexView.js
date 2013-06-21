define([
    "ember",
    "text!templates/indexTemplate.html"
], function(Ember, indexTemplate) {
    Ember.TEMPLATES["index"] = Ember.Handlebars.compile(indexTemplate);
    var IndexView = Ember.View.extend({
        template: Ember.Handlebars.compile(indexTemplate),
        reaaarender: function() {
            //     App.set("afterSearch",true);


            console.log("qwerty");
            this.rerender();



        }.observes('App.afterSearch'),
        didInsertElement: function() {



        },
        reloadPage: function() {
console.log('hhhhhhhhhhhhhh'); 
        }

    });
    return IndexView;
});
