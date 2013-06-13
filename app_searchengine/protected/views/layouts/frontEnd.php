<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6"> <![endif]--> 
<!--[if IE 7 ]>    <html lang="en" class="ie7"> <![endif]--> 
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]--> 
<!--[if IE 9 ]>    <html lang="en" class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->



    <script>   window.onload = function() {

            var data = "";
            
            if (<?php echo Yii::app()->user->getUserData() ?> !== "") {
            
                data = <?php echo Yii::app()->user->getUserData() ?>;
                localStorage.setItem("loginStatus", data);

            }

        }



    </script>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Trends Global Web Platform</title>
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/reset-new.css">

        <link rel="stylesheet" href="/app_hubstar/css/masonry.css">  
        <link rel="stylesheet" href="/app_hubstar/scripts/libs/bootstrap/2.2.2/css/bootstrap.css">
        <link rel="stylesheet" href="/app_hubstar/css/bootstrap-wysihtml5.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        
        <link rel="stylesheet" href="/app_hubstar/css/style.css">
        <link rel="stylesheet" href="/app_hubstar/css/views.css">        
        <link rel="stylesheet" href="/app_hubstar/css/profile-css.css">   
        <link rel="stylesheet" type="text/css" href="css/customstyle.php" /> 
        <link media="screen, projection" rel="stylesheet" type="text/css" href="css/_topnavbar.css"/>
        <link media="screen, projection" rel="stylesheet" type="text/css" href="css/_footer.css"/>
        <link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
<!--        <script src="app_hubstar/scripts/libs/bootstrap/2.2.2/js/bootstrap.min.js"></script>
        <script src="app_hubstar/scripts/libs/jquery.bxslider.min.js"></script>-->
        <link rel="stylesheet" href="/app_hubstar/css/jquery.bxslider.css">
    </head>
    <body style="background:#fff url('../images/texture.png') repeat;width: 100%;height: auto;">


        <div id="main" class="container-fluid" style="padding:0;"></div>
    
    <script data-main="app_hubstar/scripts/main" src="app_hubstar/scripts/libs/requirejs/2.1.2/require.js"></script>


    </body>
</html>

