HubStar.SelectFunctionView = Ember.View.extend({
    templateName: 'selectFunction',
    didInsertElement: function() {
        //   this.$().hide().show('fast');
    },
    selectionOne: function() {
        var controller = this.get('controller');

        if (controller._debugContainerKey.indexOf("profile") !== -1)
        {
                 controller.selectOldAbout();
        }
        else {
            console.log("this is a select");
        }
    },
    selectionTwo: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("profile") !== -1)
        {
                 controller.selectNewAbout();
        }
        else {

        }


    }


});
