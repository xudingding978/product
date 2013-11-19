HubStar.CommentView = Ember.View.extend({
    templateName: 'comment',
    didInsertElement: function() {
        $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
    },
    openComment: function(id) {

        if (localStorage.loginStatus) {
            this.get('controller').getCommentsById(id);
            this.get('controller').set("commentContent","");
            $('#comment_' + id).attr('style', 'display:none');
            $('#commentBox_' + id).attr('style', 'display:block');

            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
                $('#masonry_container').masonry("reload");
                $('.comment-insert-field').focus();
                
            }, 200);
        }
    },
//    closeComment: function(id) {    
//        this.get('controller').set("commentContent","");
//        $('#comment_' + id).attr('style', 'display:block');
//        $('#commentBox_' + id).attr('style', 'display:none');
//        $('#masonry_container').masonry("reload");
//        setTimeout(function() {
//            $('#masonry_container').masonry("reload");
//        }, 200);
//    }                 
});
