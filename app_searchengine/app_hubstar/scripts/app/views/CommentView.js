define([
    "ember",
    "text!templates/commentTemplate.html"
], function(Ember, commentTemplate) {

    Ember.TEMPLATES["comment"] = Ember.Handlebars.compile(commentTemplate);

    var CommentView = Ember.View.extend({
        template: Ember.Handlebars.compile(commentTemplate),
        didInsertElement: function() {
            //    console.log(this.get('id'));
//   console.log(this) ;

        },
        openComment: function(id) {

            this.get('controller').getCommentsById(id);
            $('#comment_' + id).attr('style', 'display:none');
            $('#commentBox_' + id).attr('style', 'display:block');

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.comment-insert-field').focus();
            }, 200);
        },
        closeComment: function(id) {

            $('#comment_' + id).attr('style', 'display:block');
            $('#commentBox_' + id).attr('style', 'display:none');

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        seeMore: function(id) {
            $('#closeComment_' + id).attr('style', 'display:block');
            $('#showMoreComment_' + id).attr('style', 'display:none');
            $('#commentData_' + id).attr('style', 'max-height:100%');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);

        },
        closeMore: function(id) {
            $('#closeComment_' + id).attr('style', 'display:none');
            $('#showMoreComment_' + id).attr('style', 'display:block');
            $('#commentData_' + id).attr('style', 'max-height:120px');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        }
    });

    return CommentView;
});