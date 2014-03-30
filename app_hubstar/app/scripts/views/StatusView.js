HubStar.StatusView = Ember.View.extend({
    templateName: 'status',
    didInsertElement: function() {
        $(document).ready(function() {
//        if( localStorage.resOrcom==="residential"){
//           setTimeout(function() {
//                        $(".gradient1").css("background", " linear-gradient(to bottom, #01b6e3 22%,#f5f5f5 99%)");
//                        },10);
//        }
//        else
            if (localStorage.resOrcom === "commercial") {
                setTimeout(function() {
                    $(".gradient1").css("background", " linear-gradient(to bottom, #191200 22%,#f5f5f5 99%)");
                }, 10);
            }
            else {
                setTimeout(function() {
                    $(".gradient1").css("background", " linear-gradient(to bottom, #68789c 22%,#f5f5f5 99%)");
                }, 10);
            }
        });
        if (HubStar.get('isLogin')) {

            $('#login_button').attr("style", "display:none");
            $('#afterLogin').attr("style", "display:block");
            $('#welcome_message').attr("style", "display:none");


        } else {

            $('#login_button').attr("style", "display:inline-block");
            $('#afterLogin').attr("style", "display:none");
            $('#welcome_message').attr("style", "display:block");
        }



    }





});

