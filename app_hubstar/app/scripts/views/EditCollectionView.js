HubStar.EditCollectionView = Ember.View.extend({
    templateName: 'editCollection',
    didInsertElement: function() {
        $(function() {

            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
        });
        $('#uploadObject').click(function() {

            $('.new-collection-name_insert').val("");
            $('.new-collection-area').val("");
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $('#uploadObject').attr("style", "display:none");
            $('#uploadingObject').attr('style', "display:inline-block");
            $('#uploadArea').attr('style', "display:block");
            $('#addNew').animate({
                height: 350,
                width: 350
            }, 400, function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isFitWidth: true
                });
            });
        });
        $('#uploadingObject').click(function() {
            $('#uploadObject').attr('style', "display:block");
            $('#uploadingObject').attr('style', "display:none");
            $('#uploadArea').attr('style', "display:none");
            $('#addNew').animate({
                height: 350,
                width: 350
            }, 400, function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isFitWidth: true
                });
            });

        });

        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');

        });
    },
    returnCollection: function(id) {
   //    this.get('controller').getCollectionAttr();
  
        var div_id = "#" + id;
        var div_class = "." + id + "  #uploadArea";
        $(div_id).attr("style", "display:block");
        $(div_class).attr('style', "display:none");
        this.get('controller').set("selectedCollection",null);
        //this.get('controller').get('selectedCollection').deleteRecord();
        $('#masonry_user_container').masonry({
            itemSelector: '.box',
            columnWidth: 185,
            isFitWidth: true
        });

    }
});
