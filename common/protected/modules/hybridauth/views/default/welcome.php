

<script type="text/javascript">









    window.onload = function()
    {
    
        var parent = window.opener;

        localStorage.setItem("checkUser", "newUser");
        parent.location = 'http://www.develop.devbox/#/welcome';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
