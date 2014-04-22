HubStar.EditCollectionView = Ember.View.extend({
    templateName: 'editCollection',
    didInsertElement: function() {
        // var container = document.querySelector('#masonry_user_container');
 

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
            }, 400);
        });
        $('#uploadingObject').click(function() {
            $('#uploadObject').attr('style', "display:block");
            $('#uploadingObject').attr('style', "display:none");
            $('#uploadArea').attr('style', "display:none");
            $('#addNew').animate({
                height: 350,
                width: 350
            }, 400);

        });

        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');

        });
    },
    returnCollection: function(id) {
        var div_id = "#" + id;
        var div_class = ".C" + id + "  #uploadArea";
        $(div_id).attr("style", "display:block");
        $(div_class).attr('style', "display:none");
          this.get('controller').set('newTitle', '');
        this.get('controller').set('newDesc', '');      
    }
});
