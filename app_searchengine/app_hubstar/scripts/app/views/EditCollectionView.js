define([
    "ember",
    "text!templates/editCollectionTemplate.html"
], function(Ember, editCollectionTemplate) {

    Ember.TEMPLATES["editCollection"] = Ember.Handlebars.compile(editCollectionTemplate);

    var EditCollectionView = Ember.View.extend({
        template: Ember.Handlebars.compile(editCollectionTemplate),
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
                $('#uploadingObject').attr('style', "display:inline-block");
                $('#uploadArea').attr('style', "display:block");
                $('#addNew').animate({
                    height: 370,
                    width: 370
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
                $('#uploadArea').attr('style', "display:none");
                $('#addNew').animate({
                    height: 370,
                    width: 370
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


                return false;
            });
        },
        returnCollection: function(id) {



            var div_id = "#" + id;
            var div_class = "." + id + "  #uploadArea";
            $(div_id).attr("style", "display:block");
            $(div_class).attr('style', "display:none");




            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 0,
                isFitWidth: true
            });

        }
    });

    return EditCollectionView;
});