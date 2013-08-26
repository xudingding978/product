

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
        }, 1000);




        Ember.run.next(function() {
            console.log('ssssssssssssssssss');
        });

    },
    statusObserver: function(record, infoChecking) {
        var that = this;
        var noError = true;

        if (infoChecking !== null)
        {
            that.set("info", false);
            that.set("succeed", false);
            that.set("warnning", true);
            that.set("failed", false);
            that.setFeedback(infoChecking);


        } else {
            record.addObserver("isError", function() {
                if (record.get("isError")) {
                    console.log('isError:   Yes');
                    that.set("info", false);
                    that.set("succeed", false);
                    that.set("warnning", false);
                    that.set("failed", true);
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
                        that.set("info", false);
                        that.set("succeed", true);
                        that.set("warnning", false);
                        that.set("failed", false);
                        that.setFeedback("updateSucess");

                    }
                    else {
                        console.log('isSaving:   false');
                    }

                    record.removeObserver("isSaving");
                });

            }

        }
    }

});
            