HubStar.ProfileView = Ember.View.extend({
    templateName: 'profile',
    didInsertElement: function() {
        if (this.get('controller').get("profile_average_review_length") !== "" && this.get('controller').get("profile_average_review_length") !== null && this.get('controller').get("profile_average_review_length") !== undefined) {
            $('#starsize').attr("style", "width:" + this.get('controller').get("profile_average_review_length") + "px");
        }
        else {
            $('#starsize').attr("style", "width:100px");
        }

        $(".navbar").css("box-shadow", "0 0 10px #333");
        $(document).ready(function() {
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 200);
            }, 200);
            $(window).resize(function() {
                $(window).resize(function() {
                     setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 200);
            }, 200);
                    if ($(window).width() > 1200) {
                        $("#search-bar").css('display', "block");
                        $("#topResidentialCommerical").css('display', "block");
                        $(".search-bar-on-small-screen").css('display', "none");
                    } else {
                        $("#search-bar").css('display', "none");
                        $("#topResidentialCommerical").css('display', "none");
                        $(".search-bar-on-small-screen").css('display', "block");
                    }
                });
            });

        });

        var address = document.URL;
        var displayTap = address.split("#")[1].split("/")[3];

        if (displayTap === "partners")
        {

            $('#user-stats > li').removeClass('selected-user-stats');

            $('#partners').addClass('selected-user-stats');

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
        else if (displayTap === "reviews")

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
