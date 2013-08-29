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
        }, 1000);

        Ember.run.next(function() {

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
                    that.set("info", false);
                    that.set("succeed", false);
                    that.set("warnning", false);
                    that.set("failed", true);
                    that.setFeedback("There is error");

                    noError = false;
                }
                else {
                }

                record.removeObserver("isError");
            });
            if (noError) {
                record.addObserver("isSaving", function() {
                    if (record.get("isSaving")) {
                        that.set("info", false);
                        that.set("succeed", true);
                        that.set("warnning", false);
                        that.set("failed", false);
                        that.setFeedback("updateSucess");

                    }
                    else {
                    //    console.log('isSaving:   false');
                    }

                    record.removeObserver("isSaving");
                });

            }

        }
    }

});
            
