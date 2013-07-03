define([
    "App",
    "ember",
    "text!templates/applicationTemplate.html"
], function(App, Ember, applicationTemplate) {

    Ember.TEMPLATES["application"] = Ember.Handlebars.compile(applicationTemplate);

    var ApplicationView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(applicationTemplate),
        didInsertElement: function() {


            var view = this;
            $(window).bind("scroll", function() {
                view.didScroll();
            });

        },
        didScroll: function() {

            if (this.isScrolledToBottom()) {
                this.get('controller').scrollDownAction();


            }



        },
        isScrolledToBottom: function() {
            var distanceToTop = $(document).height() - $(window).height(),
                    top = $(document).scrollTop();

            return top === distanceToTop;
        },
        willDestroyElement: function() {
            $(window).unbind("scroll");
        },
        reaaarender: function() {
            this.rerender();
        }.observes('controller.test')
    });

    return ApplicationView;
});
