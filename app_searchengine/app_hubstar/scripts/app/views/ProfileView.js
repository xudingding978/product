define([
    "ember",
    "text!templates/profileTemplate.html",
    "controllers/ProfileController",
], function(Ember, profileTemplate, ProfileController) {

    Ember.TEMPLATES["profile"] = Ember.Handlebars.compile(profileTemplate);
    Ember.Handlebars.registerBoundHelper('getBoolean', function() {
        return true;
    });




    var ProfileView = Ember.View.extend({
        template: Ember.Handlebars.compile(profileTemplate),
        didInsertElement: function() {

            $(function() {
                $('#masonry_profile_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });
            $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');


            });










        }
    });

    return ProfileView;
});
