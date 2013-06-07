

<script type="text/javascript">









    window.onload = function()
    {

        var parent = window.opener;

    //    parent.location = 'http://www.develop.devbox/#/search';

        parent.GetValueFromChild(<?php echo Yii::app()->session['data'] ?>);



        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
