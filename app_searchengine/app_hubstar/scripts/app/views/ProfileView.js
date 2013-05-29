define([
    "ember",
    "text!templates/profileTemplate.html",
    "controllers/ProfileController",
], function(Ember, profileTemplate, ProfileController) {
//            console.log(profileTemplate);
//            Ember.Handlebars.registerBoundHelper('popup', function() {
//                    var obj = $(profileTemplate).find('ul#tab-title').height();
                    
//                    for(var i=0;i<obj.length;i++) {
//                        console.log(obj[i].innerHTML);
//                    }
//                    return new Ember.Handlebars.SafeString("<p> *" + obj + "</p>");
//            });



    Ember.TEMPLATES["profile"] = Ember.Handlebars.compile(profileTemplate);
    

    var ProfileView = Ember.View.extend({

        
        
        template: Ember.Handlebars.compile(profileTemplate) 
        
        
    });
    return ProfileView;
});
