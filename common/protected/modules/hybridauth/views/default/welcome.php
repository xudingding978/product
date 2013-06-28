

<script type="text/javascript">









    window.onload = function()
    {
        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {

            data = <?php echo Yii::app()->user->getUserData() ?>;
            console.log(data);
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
