

<script type="text/javascript">









    window.onload = function()
    {
        alert('welcome');
        var parent = window.opener;
     

        parent.location = 'http://www.develop.devbox/#/welcome';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
