

<script type="text/javascript">









    window.onload = function()
    {
        if (<?php echo Yii::app()->user->getUserData() ?> !== "") {

            data = <?php echo Yii::app()->user->getUserData() ?>;
            console.log(data);
            localStorage.setItem("loginStatus", data);

        }



        localStorage.setItem("checkUser", "newUser");

        var address = document.URL;
        var domain = address.split("/")[2];


        window.parent.location.href = 'http://' + domain + '/#/welcome';



    }

</script>
