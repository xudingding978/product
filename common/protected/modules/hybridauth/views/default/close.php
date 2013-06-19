

<script type="text/javascript">









    window.onload = function()
    {
        //  alert('close');


        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {
            data = <?php echo Yii::app()->user->getUserData() ?>;

            localStorage.setItem("loginStatus", data);

        }


        var parent = window.opener;


        parent.location = 'http://www.develop.devbox/#/search';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
