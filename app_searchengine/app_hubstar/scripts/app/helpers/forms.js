
// Start the main app logic.
define(['ember', 'handlebars', 'moment'],
        function(Ember) {

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


            Ember.Handlebars.registerHelper('ifCond', function(v1, v2, options) {
                alert(v1);
                alert(ProfileModel.find('flooringxtra').get('type'));
                v1 = ProfileModel.find('flooringxtra').get('type');
                if (v1 == v2) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
            Handlebars.registerHelper('checkInputFilesSize', function(object) {

                return new Handlebars.SafeString(
                        "<p>" + object.length + "</p>"
                        );

            });
            Ember.Handlebars.registerBoundHelper('date', function(date) {
                if (date === "" || date === null) {
                    return "";
                } else {
                    return moment(date).fromNow();
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
                        console.log(megaId);
                        var div_id = "#thumbUpBtn_" + megaId;
                        $(div_id).removeClass("new-btn");

                    }
                }, 20);
            });

//            Ember.Handlebars.registerHelper('comemntIDStringifyFunc', function(data) {
//
//                if (data.indexOf(" ") !== -1) {
//                    
//                  
//                    return  "user_comment_"+data.replace(" ", "_");
//                } else {
//                    return  data;
//
//                }
//            });


        });

