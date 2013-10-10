/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageController = Ember.Controller.extend({
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings'],
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            console.log(this.get("currentUser").get("isLoaded"));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }

    },
    addComments: function() {
        var commentContent = this.get('messageContent');
        if (commentContent) {
           

            var commenter_id = this.get("currentUser").get('id');
            var date = new Date();
            var owner_id = this.get("currentOwner").get("id");
            var newStyleImage = this.get("newStyleImageSource");
            var imageStyleName = this.get('newStyleImageName');
             var imageName = "";
               var imageType= "";
            if (imageStyleName!==undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var messageID = createMessageid();
            var tempComment = [commenter_id, date.toString(), commentContent, owner_id, newStyleImage, imageType, imageStyleName, messageID];
           
            tempComment = JSON.stringify(tempComment);
            var that = this;

            requiredBackEnd('message', 'CreateComment', tempComment, 'POST', function(params) {
                
            });
     
            this.set('commentContent', "");
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
            }, 200);
        }
    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
    }
}
);
