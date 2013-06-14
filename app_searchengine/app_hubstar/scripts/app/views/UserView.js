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
            $('#uploadObject').click(function() {
                $('#uploadObject').attr("style", "display:none");
                $('#uploadingObject').attr('style', "display:block");
                $('#addNew').animate({
                    height: 400,
                    width: 800
                }, 400, function() {
                    $('#masonry_user_container').masonry({
                        itemSelector: '.box',
                        columnWidth: 0,
                        isFitWidth: true
                    });
                });

            });
            $('#uploadingObject').click(function() {

                $('#uploadObject').attr('style', "display:block");
                $('#uploadingObject').attr('style', "display:none");

                $('#addNew').animate({
                    height: 400,
                    width: 300
                }, 400, function() {
                    $('#masonry_user_container').masonry({
                        itemSelector: '.box',
                        columnWidth: 0,
                        isFitWidth: true
                    });
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



