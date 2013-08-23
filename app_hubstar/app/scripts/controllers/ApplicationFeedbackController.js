

HubStar.ApplicationFeedbackController = Ember.Controller.extend({
    needs: ['application'],
    setFeedback: function(status) {
        this.set('status', status);
        this.set('feedback', true);


        var that = this;
        setTimeout(function() {

            $('#appfeedback').fadeOut(1000, function() {

                that.set('feedback', false);
            });

            console.log('ffffffffffffffffffffffffff');
        }, 2000);






    },
    statusObserver: function(record) {
        var that = this;
        var noError = true;
        record.addObserver("isError", function() {
            if (record.get("isError")) {
                console.log('isError');
                that.setFeedback("There is error");
                noError = false;
            }
            else {

                console.log('isNotError');
            }

            record.removeObserver("isError");
        });

        if (noError) {
            record.addObserver("isSaving", function() {
                if (record.get("isSaving")) {
                    console.log('true');
                    that.setFeedback("updateSucess");
                }
                else {
                    console.log('false');
                }

                record.removeObserver("isSaving");
            });

        }


    }

});
            