define([
    "ember",
    "text!templates/applicationTemplate.html"
], function(Ember, applicationTemplate) {

    Ember.TEMPLATES["application"] = Ember.Handlebars.compile(applicationTemplate);

    var ApplicationView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(applicationTemplate),

        reaaarender: function() {
            //     App.set("afterSearch",true);


            console.log("qwerty");
            this.rerender();



        }.observes('controller.test'),
    });
    return ApplicationView;
});