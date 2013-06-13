define([
    "ember",
    "text!templates/userTemplate.html"
], function(Ember, userTemplate) {
    Ember.TEMPLATES["user"] = Ember.Handlebars.compile(userTemplate);
    var UserView = Ember.View.extend({
        template: Ember.Handlebars.compile(userTemplate),
        didInsertElement: function() {

            $(function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });

            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
             //    $(this).removeClass('hover');
//                $(this).attr('id', 'selected');

                return false;
            });
        }
    });
    return UserView;
});



