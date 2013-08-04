

            Handlebars.registerHelper('submitButton', function(text) {
                return new Handlebars.SafeString('<button  id="login" type="submit" class="btn btn-primary">' + text + '</button>');
            });

            Handlebars.registerHelper('plainButton', function(text) {
                return new Handlebars.SafeString('<button   type="submit" class="btn btn-primary">' + text + '</button>');
            });

            Handlebars.registerHelper('mailto', function(field) {
                var address = this.get(field);
                if (address) {
                    return new Handlebars.SafeString('<a href="mailto: ' + address + '" />' + address + '</a>');
                }
            });


            Handlebars.registerHelper('checkInputFilesSize', function(object) {

                return new Handlebars.SafeString(
                        "<p>" + object.length + "</p>"
                        );

            });
            Ember.Handlebars.registerBoundHelper('date', function(date) {
                if (date === "" || date === null||date === undefined) {
                    return "";
                } else {
                    var matches = date.match('^[0-9]+$');
                    if (matches !== null) {
                        return moment.unix(date).fromNow();
                    } else {
                        return moment(date).fromNow();
                    }
                }
            });
            Ember.Handlebars.registerBoundHelper('isThumbUped', function(userids, megaId) {
                if (userids === null || userids === undefined)
                {
                    userids = "";
                }

                setTimeout(function() {
                    if (userids.indexOf(localStorage.loginStatus) !== -1)
                    {

                        var div_id = "#thumbUpBtn_" + megaId;
                        $(div_id).removeClass("new-btn");

                    }
                }, 20);
            });
            Ember.Handlebars.registerBoundHelper('test', function(test) {

            });

