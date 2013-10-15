/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MessageView = Ember.View.extend({

  templateName: 'message',
   seeMore: function(id) {     
        $('#closeComment_' + id).attr('style', 'display:inline-block');
        $('#showMoreComment_' + id).attr('style', 'display:none');
        $('#messageData_' + id).attr('style', 'display: block');
        
        $('#messageData_' + id).stop().animate({
            maxHeight: '750px'
            
            
        }, 420, function(){$('#messageData_' + id).css('overflow','auto');$('#masonry_user_container').masonry("reload");});
    
    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none');
        $('#showMoreComment_' + id).attr('style', 'display:inline-block');
         $('#messageData_' + id).attr('style', 'display: none');
        
        $('#messageData_' + id).stop().animate({
            maxHeight: '30px'
        }, 380, function(){$('#messageData_' + id).css('overflow','hidden');$('#masonry_user_container').masonry("reload");});
        
        


    }

    });

