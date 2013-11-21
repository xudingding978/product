

<script type="text/javascript">









    window.onload = function()
    {
        //  alert('close');


        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {
            data = <?php echo Yii::app()->user->getUserData() ?>;

            localStorage.setItem("loginStatus", data);

        }


        var parent = window.opener;
        var address = document.URL;
        var domain = address.split("/")[2];

        parent.location.reload();

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
