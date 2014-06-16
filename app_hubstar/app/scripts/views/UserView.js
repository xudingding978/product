HubStar.UserView = Ember.View.extend({
    templateName: 'user',
    didInsertElement: function() {

        $(".navbar").css("box-shadow", "0 0 10px #333");
        var container = document.querySelector('#masonry_user_container');
        var msnry = new Masonry(container, {
            itemSelector: '.box',
            columnWidth: 185,
            //isInitLayout: false,
            isFitWidth: true
        });

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[3];

        if (user_id === "following")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#ufollowing').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (user_id === "followers")
        {

            $('#user-stats > li').removeClass('selected-user-stats');
            $('#ufollower').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }

        else if (user_id === "messagecenter") {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#message').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (user_id === "post") {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#post').addClass('selected-user-stats');
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
    },
    showInterestsUp: function() {
        if ($('#interest_btn').hasClass('fa-angle-double-up') && this.get('controller').get('interestsActive') === false) {

            this.get('controller').set('followDisplay', false);
            $('#show_interest').animate({top: 55, height: 445}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            var that = this;
            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');
                $(".follow-btn").addClass('follow-btn-active');

                that.get('controller').set('interestsActive', true);
            }, 200);

            setTimeout(function() {
                $('.interesttags-container').css('height', '335px');
                $('.interest-insert-hint').css('display', 'block');
                $('.interest-textarea').css('height', '250px');
                $('#interest_btn').css('display', 'none');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('fa-angle-double-up');
            $('#interest_btn').addClass('fa-angle-double-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open) no prior set parameters/coditions

        if ($('#interest_btn').hasClass('fa-angle-double-down') && this.get('controller').get('interestsActive') === false) {

            this.get('controller').set('followDisplay', false);
            this.get('controller').set('interestsActive', true);
            setTimeout(function() {
                $('.interesttags-container').css('height', '375px');
                $('.interest-insert-hint').css('display', 'block');
                $('.interest-textarea').css('height', '250px');
                $('#interest_btn').css('display', 'none');

            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#interest_btn').removeClass('fa-angle-double-up');
            $('#interest_btn').addClass('fa-angle-double-down');
            // Changes the active state position of the slide up/down arrow.

        }// Displays the full sized edit box, when interest's box is already at full size

        else {

            this.get('controller').set('interestsActive', false);
            this.get('controller').set('followDisplay', true);
            $('#show_interest').animate({top: 298, height: 200}, 400, function() {
                $('.interesttags-container').css('height', '125px');
            });
            // Main slide animation (interest div)

            $('#interest_btn').addClass('fa-angle-double-up');
            $('#interest_btn').removeClass('fa-angle-double-down');
            // Changes the active state position of the slide up/down arrow.

            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
                $('#interest_btn').css('display', 'block');
                $('.interesttags-container').css('height', '100px');
            }, 120);
            // Removes  required class styles for slide down animation

        }// Slides the edit box back down into normal interest tags
    },
    showInterests: function() {

        this.get('controller').set('followDisplay', !this.get("controller").get("followDisplay"));
        if ($('#interest_btn').hasClass('fa-angle-double-up')) {
            this.get('controller').set('followDisplay', false);
            $('#show_interest').animate({top: 55, height: 445}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            $('.interesttags-container').css('height', '375px');
            $('.interest-insert-hint').css('display', 'block');
            $('.interest-textarea').css('height', '250px');

            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');

                $(".follow-btn").addClass('follow-btn-active');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('fa-angle-double-up');
            $('#interest_btn').addClass('fa-angle-double-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open)
        else {
            this.get('controller').set('followDisplay', true);
            $('#show_interest').animate({top: 298, height: 200}, 400, function() {
                $('.interesttags-container').css('height', '125px');
            });
            // Main slide animation (interest div)

            $('#interest_btn').addClass('fa-angle-double-up');
            $('#interest_btn').removeClass('fa-angle-double-down');
            // Changes the active state position of the slide up/down arrow.

            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
            }, 120);
            // Removes  required class styles for slide down animation

        }// Slide down (close)
    }
});
