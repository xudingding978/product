

HubStar.ApplicationFeedbackController = Ember.Controller.extend({
    needs: ['application'],
    setFeedback: function(status) {
        this.set('status', status);
        this.set('feedback', true);


        var that = this;
        Ember.run.later(function() {

            $('#appfeedback').fadeOut(1000, function() {

                that.set('feedback', false);
            });
            console.log('aaaaaaaaaaaaaaaaaaa');
        }, 2000);




        Ember.run.next(function() {
            console.log('ssssssssssssssssss');
        });

    },
    statusObserver: function(record) {
        var that = this;
        var noError = true;
        record.addObserver("isError", function() {
            if (record.get("isError")) {
                console.log('isError:   Yes');
                that.setFeedback("There is error");
                noError = false;
            }
            else {

                console.log('isError:  Not');
            }

            record.removeObserver("isError");
        });

        if (noError) {
            record.addObserver("isSaving", function() {
                if (record.get("isSaving")) {
                    console.log('isSaving:  true');
                    that.setFeedback("updateSucess");
                }
                else {
                    console.log('isSaving:   false');
                }

                record.removeObserver("isSaving");
            });

        }


    }

});
            