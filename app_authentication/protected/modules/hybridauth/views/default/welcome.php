

<script type="text/javascript">









    window.onload = function()
    {
        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {

            var data = <?php echo Yii::app()->user->getUserData() ?>;
           
            localStorage.setItem("loginStatus", data);

        }


        var parent = window.opener;

        localStorage.setItem("checkUser", "newUser");

        var address = document.URL;
        var domain = address.split("/")[2];


        parent.location = 'http://' + domain + '/#/welcome';



        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
