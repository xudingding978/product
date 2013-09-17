HubStar.UserView = Ember.View.extend({
    templateName: 'user',
       interestsActive:false,
    didInsertElement: function() {
        $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 1,
                isFitWidth: true
            });
        });
        
         $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
         });
    },
        showInterestsUp: function() {
        if ($('#interest_btn').hasClass('icon-double-angle-up') && this.get('interestsActive') === false) {
            
            $('#show_interest').animate({top: 55, height: 393}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            var that = this;
            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');
                $(".follow-btn").addClass('follow-btn-active');
                
                that.set('interestsActive',true);
            }, 200);

            setTimeout(function() {
                $('.interesttags-container').css('height', '335px');
                $('.interest-insert-hint').css('display', 'block');
                $('.interest-textarea').css('height', '210px');
                $('#interest_btn').css('display', 'none');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open) no prior set parameters/coditions
        
        
        
         if ($('#interest_btn').hasClass('icon-double-angle-down') && this.get('interestsActive') === false) {
             this.set('interestsActive',true);
            setTimeout(function() {
                $('.interesttags-container').css('height', '335px');
                $('.interest-insert-hint').css('display', 'block');
                $('.interest-textarea').css('height', '210px');
                $('#interest_btn').css('display', 'none');
                  
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Displays the full sized edit box, when interest's box is already at full size
        
        
        
        else{
            this.set('interestsActive',false);
            
            $('#show_interest').animate({top: 298, height: 150}, 400);
            // Main slide animation (interest div)

            $('#interest_btn').addClass('icon-double-angle-up');
            $('#interest_btn').removeClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
                $('#interest_btn').css('display', 'block');
            }, 120);
            // Removes  required class styles for slide down animation
            
        }// Slides the edit box back down into normal interest tags
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
            //Coin's

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

    }


});
