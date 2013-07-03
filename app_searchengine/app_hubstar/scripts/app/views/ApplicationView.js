define([
    "ember",
    "text!templates/applicationTemplate.html"
], function(Ember, applicationTemplate) {

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

            if (this.isScrolledToBottom() && App.get('isMansonryPageLoad')) {
                this.get('controller').scrollDownAction();

         //       alert(7777777);
            }



        },
        isScrolledToBottom: function() {
            var distanceToTop = $(document).height() - $(window).height(),
                    top = $(document).scrollTop();
console.log(top+"         "+distanceToTop);
            return top === distanceToTop;
        },
        willDestroyElement: function() {
      //      $(window).unbind("scroll");
        },
        reaaarender: function() {
            this.rerender();
        }.observes('controller.test')
    });

    return ApplicationView;
});
