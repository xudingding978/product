

<script type="text/javascript">









    window.onload = function()
    {
        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {

            data = <?php echo Yii::app()->user->getUserData() ?>;
            console.log(data);
            localStorage.setItem("loginStatus", data);

        }



        localStorage.setItem("checkUser", "newUser");
        
        console.log("tetsss sss");

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


        window.parent.location.href = 'http://' + domain + '/#/welcome';



    }

</script>
