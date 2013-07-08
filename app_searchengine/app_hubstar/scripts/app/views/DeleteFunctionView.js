define([
    "ember",
    "text!templates/deletefunctionTemplate.html"
], function(Ember, deletefunctionTemplate) {

    Ember.TEMPLATES["deletefunction"] = Ember.Handlebars.compile(deletefunctionTemplate);

    var DeleteFunctionView = Ember.View.extend({

        template: Ember.Handlebars.compile(deletefunctionTemplate),
        didInsertElement: function() {
         //   this.$().hide().show('fast');
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
             else if (controller._debugContainerKey.indexOf("comment") !== -1) {


                controller.deleteComment();

            }
            else {
                console.log(controller);
            }
        },
        cancelDelete: function() {
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


                controller.cancelDelete();

            }
            else if (controller._debugContainerKey.indexOf("comment") !== -1) {


                controller.cancelDelete();

            }
            else {
                console.log(controller);
            }


        }


    });

    return DeleteFunctionView;
});