

<script type="text/javascript">









    window.onload = function()
    {
        //  alert('close');





        var parent = window.opener;
        var address = document.URL;
        var domain = address.split("/")[2];


        parent.location = 'http://' + domain + '/#/search';

        var windowObject = window.self;
        windowObject.opener = window.self;

        windowObject.close();

    }

</script>
