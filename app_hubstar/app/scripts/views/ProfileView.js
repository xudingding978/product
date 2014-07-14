HubStar.ProfileView = Ember.View.extend({
    templateName: 'profile',
    didInsertElement: function() {
        $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true,
                transitionDuration: 0
            });
        });
        if (this.get('controller').get("profile_average_review_length") !== "" && this.get('controller').get("profile_average_review_length") !== null && this.get('controller').get("profile_average_review_length") !== undefined) {
            $('#starsize').attr("style", "width:" + this.get('controller').get("profile_average_review_length") + "px");
        }
        else {
            $('#starsize').attr("style", "width:100px");
        }
        if (this.get('controller').get('about_us').objectAt(0) !== undefined && this.get('controller').get('about_us').objectAt(0).get('about_image').get('length'))
        {
            var count = 0;
            for (var i = 0; i < this.get('controller').get('about_us').objectAt(0).get('about_image').get('length'); i++) {
                if (this.get('controller').get('about_us').objectAt(0).get('about_image').objectAt(i).get("image_url") !== "") {
                    count = count + 1;
                }
            }
            $(document).ready(function() {
                setTimeout(function() {
                    if (count === 2) {
                        $(".left-bottom-area").css("width", "530px");
                    } else if (count === 1) {
                        $(".left-bottom-area").css("width", "260px");
                    }
                }, 1000);
            });
        }
        if (this.get('controller').get('about_us').objectAt(0) !== undefined) {
            for (var i = 0; i < this.get('controller').get('about_us').objectAt(0).get('about_embeded_object').get('length'); i++) {
                var about_embeded_object = this.get('controller').get('about_us').objectAt(0).get('about_embeded_object').objectAt(i);
                if (about_embeded_object.get('embeded_object_code') !== null && about_embeded_object.get('embeded_object_code') !== '' && about_embeded_object.get('embeded_object_code') !== undefined) {
                    if (about_embeded_object.get('embeded_object_url') !== null && about_embeded_object.get('embeded_object_url') !== '' && about_embeded_object.get('embeded_object_url') !== undefined) {
                        $(document).ready(function() {
                            setTimeout(function() {
                                $(".getapp-btn").css("width", "380px");
                            }, 1500);
                        });
                    } else {
                        $(document).ready(function() {
                            setTimeout(function() {
                                $(".getapp-btn").css("width", "180px");
                            }, 1500);
                        });
                    }
                }
            }
        }
        $(".navbar").css("box-shadow", "0 0 10px #333");
        $(document).ready(function() {
//            setTimeout(function() {
//                $('#masonry_user_container').masonry("reloadItems");
//                setTimeout(function() {
//                    $('#masonry_user_container').masonry();
//                }, 200);
//            }, 200);

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
                    $("#cta-popup").removeClass("cta-popup-small-top");
                } else {
                    $("#search-bar").css('display', "none");
                    $("#topResidentialCommerical").css('display', "none");
                    $(".search-bar-on-small-screen").css('display', "block");
                    $("#cta-popup").addClass("cta-popup-small-top");
                }
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
