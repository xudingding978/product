HubStar.UserView = Ember.View.extend({
    templateName: 'user',
    didInsertElement: function() {
        $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 0,
                isFitWidth: true
            });
        });
    },
    showInterests: function() {
        if ($('#interest_btn').hasClass('icon-double-angle-up')) {

            $('#show_interest').animate({top: 55, height: 393}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            $('.interesttags-container').css('height', '335px');
            $('.interest-insert-hint').css('display', 'block');
            $('.interest-textarea').css('height', '210px');
//           Coin's test'

            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');

                $(".follow-btn").addClass('follow-btn-active');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open)

        else {
            $('#show_interest').animate({top: 298, height: 150}, 400);
            // Main slide animation (interest div)

            $('#interest_btn').addClass('icon-double-angle-up');
            $('#interest_btn').removeClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
            }, 120);
            // Removes  required class styles for slide down animation

        }// Slide down (close)

    },
    showInterestsUp: function() {
        if ($('#interest_btn').hasClass('icon-double-angle-up')) {


            $('#show_interest').animate({top: 55, height: 393}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');

                $(".follow-btn").addClass('follow-btn-active');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open)

    }
});
