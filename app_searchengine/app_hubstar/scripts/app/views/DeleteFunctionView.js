define([
    "ember",
    "text!templates/deletefunctionTemplate.html"
], function(Ember, deletefunctionTemplate) {

    Ember.TEMPLATES["deletefunction"] = Ember.Handlebars.compile(deletefunctionTemplate);

    var DeleteFunctionView = Ember.View.extend({
        classNames: ['blur'],
        template: Ember.Handlebars.compile(deletefunctionTemplate),
        didInsertElement: function() {
            this.$().hide().show('slow');
        },
        deleteSelection: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("addCollection") !== -1)
            {
                //     controller.addNewCollection();
            }
            else if (controller._debugContainerKey.indexOf("application") !== -1)
            {

                //       controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {


                //    controller.addComment();

            } else if (controller._debugContainerKey.indexOf("user") !== -1) {


                controller.deleteSelectedCollection();

            }
            else {
                console.log(controller);
            }
        }


    });

    return DeleteFunctionView;
});