HubStar.CommentView = Ember.View.extend({
    templateName: 'comment',
    didInsertElement: function() {
        $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
    },
    openComment: function(id) {

        if (localStorage.loginStatus) {
            this.get('controller').getCommentsById(id);
            $('#comment_' + id).attr('style', 'display:none');
            $('#commentBox_' + id).attr('style', 'display:block');

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.comment-insert-field').focus();
            }, 200);


        }


    },
    closeComment: function(id) {

        $('#comment_' + id).attr('style', 'display:block');
        $('#commentBox_' + id).attr('style', 'display:none');
        $('#masonry_container').masonry("reload");
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 200);
    },
                
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:block');
        $('#showMoreComment_' + id).attr('style', 'display:none');
        $('#commentData_' + id).attr('style', 'max-height: 88px;');
        
        $('#commentData_' + id).stop().animate({
            maxHeight: '350px'
            
            
        }, 420, function(){$('#commentData_' + id).css('overflow','auto');$('#masonry_container').masonry("reload");});
        

        /* this will need to be cleaned up, using a timed for loop etc (to not repeat code) */
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 52.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 105);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 158);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 210.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 263);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 315);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 368);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 420);
        


    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none');
        $('#showMoreComment_' + id).attr('style', 'display:block');
        
        $('#commentData_' + id).stop().animate({
            maxHeight: '88px'
        }, 380, function(){$('#commentData_' + id).css('overflow','hidden');$('#masonry_container').masonry("reload");});
        
        
        /* this will need to be cleaned up, using a timed for loop etc (to not repeat code) */
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 47.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 95);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 142.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 190);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 237.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 285);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 332.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 368);

    }
});
