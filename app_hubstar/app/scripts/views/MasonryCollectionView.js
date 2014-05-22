HubStar.MasonryCollectionView = Ember.View.extend({
    templateName: 'masonryCollection',
    didInsertElement: function() {
        $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true,
                transitionDuration: 0
            });
        });



    },
    editCollectionButton: function(id, desc) {

        var userController = this.get('controller');
        userController.setSelectedCollection(id);
        var div_id = "#" + id;
        var div_class = "." + id + "  #uploadArea";
        $(".Targeting_Object_front").attr("style", "display:inline-block");
        $(" #uploadArea").attr('style', "display:none");
        $(" #uploadObject").attr('style', "display:block");
        $(div_id).attr("style", "display:none");
        $(div_class).attr('style', "display:inline-block");
        var createCollection = "." + id + "  #createCollection";
        var updateCollection = "." + id + "  #updateCollection";
        var updatebtn = "." + id + "  #updatebtn";
        var createbtn = "." + id + "  #createbtn";
        var deletebtn = "." + id + "  #deletebtn";
        var collection_name_insert = "." + id + "  .new-collection-name_insert";
        var collection_area = "." + id + "  .new-collection-area";
        $(createCollection).attr('style', "display:none");
        $(updateCollection).attr('style', "display:block;color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0;");
        $(updatebtn).attr('style', "display:inline-block");
        $(deletebtn).attr('style', "display:inline-block;left:15px;top:7px");
        $(createbtn).attr('style', "display:none");
        $(collection_name_insert).val(id);
        $(collection_area).val(desc);
        $('#masonry_user_container').masonry({
            itemSelector: '.box',
            columnWidth: 185,
            isFitWidth: true
        });

    }
});
