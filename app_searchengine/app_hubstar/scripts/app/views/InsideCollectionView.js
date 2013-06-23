define([
    "ember",
    "text!templates/insideCollectionTemplate.html",
    "jquery.ui"

], function(Ember, insideCollectionTemplate) {
    Ember.TEMPLATES["insideCollection"] = Ember.Handlebars.compile(insideCollectionTemplate);
    var InsideCollectionView = Ember.View.extend({
        template: Ember.Handlebars.compile(insideCollectionTemplate),
        didInsertElement: function() {

            $(function() {
                $('#masonry_photo_collection_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });
            $('#uploadObject').click(function() {
                $('#uploadObject').attr("style", "display:none");
                $('#uploadingObject').attr('style', "display:block");
                $('#uploadArea').attr('style', "display:block");
                $('#addNew').animate({
                    height: 400,
                    width: 400
                }, 400, function() {
                    $('#masonry_photo_collection_container').masonry({
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
                    height: 400,
                    width: 300
                }, 400, function() {
                    $('#masonry_photo_collection_container').masonry({
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
        }

    });
    return InsideCollectionView;
});
