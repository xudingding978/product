

<script type="text/javascript">









    window.onload = function()
    {
        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {

            var data = <?php echo Yii::app()->user->getUserData() ?>;
           
            localStorage.setItem("loginStatus", data);

        }


        var parent = window.opener;

        localStorage.setItem("checkUser", "newUser");
        
         $(document).ready(function() {
                    window.location.href = '#';
                    $(".brand").addClass("tour-background");
                    $(".Geo-Filter").addClass("tour-background");
                    $("#login_detail").addClass("tour-background");
                    introJs().setOption('doneLabel', 'Finish').start().oncomplete(function() {
                        window.location.href = '/#/search';
                        $(window).scrollTop(0);
                        localStorage.checkUser = "";
                    });

                });

        var address = document.URL;
        var domain = address.split("/")[2];


        parent.location = 'http://' + domain + '/#/welcome';



        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
