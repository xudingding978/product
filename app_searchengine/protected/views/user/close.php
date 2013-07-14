

<script type="text/javascript">









    window.onload = function()
    {
        //  alert('close');

        data =<?php echo Yii::app()->user->getUserData() ?>;
        if (data !== "") {
            data = <?php echo Yii::app()->user->getUserData() ?>;
            localStorage.setItem("loginStatus", data);
        }



        var address = document.URL;
        var domain = address.split("/")[2];



        window.parent.location.href = 'http://' + domain + '/#/search';

    }

</script>
