define([
    "ember",
    "text!templates/masonryCollectionTemplate.html",
    'jquery',
    'helpers',
    'jquery.masonry'
], function(Ember, masonryCollectionTemplate) {

    Ember.TEMPLATES["masonryCollection"] = Ember.Handlebars.compile(masonryCollectionTemplate);
    var MasonryView = Ember.View.extend({
        template: Ember.Handlebars.compile(masonryCollectionTemplate),
        didInsertElement: function() {


            $(function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });



        },
        editCollectionButton: function(id, desc) {

            var userController = this.get('controller');
            userController.setSelectedCollection(id);
            var div_id = "#" + id;
            var div_class = "." + id + "  #uploadArea";
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
            $(updateCollection).attr('style', "display:inline-block;color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0;");
            $(updatebtn).attr('style', "display:inline-block");
            $(deletebtn).attr('style', "display:inline-block;left:15px");
            $(createbtn).attr('style', "display:none");
            $(collection_name_insert).val(id);
            $(collection_area).val(desc);
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 0,
                isFitWidth: true
            });
        }
    });
    return MasonryView;
});
