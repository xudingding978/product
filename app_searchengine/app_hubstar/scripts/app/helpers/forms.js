
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

