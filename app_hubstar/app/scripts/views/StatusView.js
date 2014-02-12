HubStar.StatusView = Ember.View.extend({
    templateName: 'status',
    didInsertElement: function() {
        if (HubStar.get('isLogin')) {

            $('#login_button').attr("style", "display:none");
            $('#afterLogin').attr("style", "display:block");
            $('#welcome_message').attr("style", "display:none");


        } else {

            $('#login_button').attr("style", "display:inline-block");
            $('#afterLogin').attr("style", "display:none");
            $('#welcome_message').attr("style", "display:block");
        }

        var that = this;
        $(document).ready(function() {
            $("#switchbar").mouseup(function(event) {
                var address = document.URL;
                var type = address.split("#")[1].split("/")[2];
                
                var mousedownX = event.pageX;
                var witdhleft = $('#switchbar').offset().left;
                 var d = 23;
                var middle = witdhleft + d;
               

                if (mousedownX < middle - d / 2) {
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                    that.get("controller").get("controllers.application").set("classification", "residential");
                    $("#Commercial").css("opacity","0.4");
                    $("#Residential").css("opacity","1");
                } else if (mousedownX >= (middle - d / 2) && mousedownX < (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                    that.get("controller").get("controllers.application").set("classification", "All");
                    $("#Residential").css("opacity","1");
                    $("#Commercial").css("opacity","1");
                }
                else if (mousedownX >= (middle + d / 2)) {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                     that.get("controller").get("controllers.application").set("classification", "commercial");
                     $("#Residential").css("opacity","0.4");
                     $("#Commercial").css("opacity","1");
                }



            });



        });
























    }





});

