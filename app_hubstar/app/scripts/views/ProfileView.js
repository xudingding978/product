HubStar.ProfileView = Ember.View.extend({
    templateName: 'profile',
    didInsertElement: function() {
        
        
        console.log(this.get('controller').get("profile_average_review_length"));
        
           if(this.get('controller').get("profile_average_review_length")!=="" && this.get('controller').get("profile_average_review_length") !==null && this.get('controller').get("profile_average_review_length")!== undefined ){
            $('#starsize').attr("style", "width:" + this.get('controller').get("profile_average_review_length") + "px");
       }
       else {
           $('#starsize').attr("style", "width:100px");
       }
        $(document).ready(function() {

           
             setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);

        });
      

        var address = document.URL;
        var displayTap = address.split("#")[1].split("/")[3];

        if (displayTap === "network")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#network').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (displayTap === "followers")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#follow').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (user_id === "reviews")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#reviewList').addClass('selected-user-stats');
        }
        else if (displayTap === "videos")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#video').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }


    }
});
