HubStar.ApplicationFeedbackController = Ember.Controller.extend({
    needs: ['application'],
    photo_url: '',
    is_remove: false,
    setFeedback: function(status) {

        this.set('is_remove', false);
        if (this.get('is_remove') === false) {
            this.set('status', status);
            this.set('feedback', true);
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            this.set('photo_url', currentUser.get('photo_url_large'));
            setTimeout(function() {

                $('.fresh-message').show().animate({
                    top: 153
                }, 400);

                $('.fresh-message').show().delay(3000).animate({
                    top: -5
                }, 400);
            }, 200);
        }      

//        Ember.run.next(function() {
//
//        });

    },
    removeButton: function() {

        if (this.get('is_remove') === true) {

            $('.fresh-message').hide('1000').animate({
            }, 400);


            this.set('is_remove', false);

        }

    },
    statusObserver: function(record, infoChecking, status) {
        var that = this;
        var noError = true;
        // added the ability to show different flash message colours #371
        if (status === "info") {
            that.set("info", true);
            that.set("succeed", false);
            that.set("warnning", false);
            that.set("failed", false);
            that.setFeedback(infoChecking);
        }
        else if (status === "failed")
        {
            that.set("info", false);
            that.set("succeed", false);
            that.set("warnning", false);
            that.set("failed", true);
            that.setFeedback(infoChecking);
        }
        else if (status === "warnning")
        {
            that.set("info", false);
            that.set("succeed", false);
            that.set("warnning", true);
            that.set("failed", false);
            that.setFeedback(infoChecking);
        }
        else {
            if (infoChecking !== null)
            {
                that.set("info", false);
                that.set("succeed", true);
                that.set("warnning", false);
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

                        }

                        record.removeObserver("isSaving");
                    });

                }

            }
        }
    }

});

