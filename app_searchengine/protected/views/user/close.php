

<script type="text/javascript">









    window.onload = function()
    {
        //  alert('close');

data=<?php echo Yii::app()->user->getUserData() ?>;
        if ( data!== "") {
            data = <?php echo Yii::app()->user->getUserData() ?>;
            localStorage.setItem("loginStatus", data);
        }


        var parent = window.opener;
        var address = document.URL;
        var domain = address.split("/")[2];


        parent.location = 'http://' + domain + '/#/search';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
