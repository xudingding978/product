

<script type="text/javascript">









    window.onload = function()
    {
      //  alert('close');
        var parent = window.opener;


        parent.location = 'http://www.develop.devbox/';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
