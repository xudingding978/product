

<script type="text/javascript">









    window.onload = function()
    {
        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {

            data = <?php echo Yii::app()->user->getUserData() ?>;
            localStorage.setItem("loginStatus", data);

        }


        var parent = window.opener;

        localStorage.setItem("checkUser", "newUser");
        parent.location = 'http://www.develop.devbox/#/welcome';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
