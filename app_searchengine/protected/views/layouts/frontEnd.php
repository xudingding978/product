<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6"> <![endif]--> <!--[if IE 7 ]>    <html lang="en" class="ie7"> <![endif]--> <!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]--> <!--[if IE 9 ]>    <html lang="en" class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Trends Global Web Platform</title>
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">


        <link rel="stylesheet" href="scripts/libs/bootstrap/2.2.2/css/bootstrap.css">
        <link rel="stylesheet" href="css/style.css?v=2">
        <link media="screen, projection" rel="stylesheet" type="text/css" href="css/gallery.css"/>
        <link rel="stylesheet" type="text/css" href="css/customstyle.php" /> 
       <link media="screen, projection" rel="stylesheet" type="text/css" href="css/_topnavbar.css"/>
       <link media="screen, projection" rel="stylesheet" type="text/css" href="css/_footer.css"/>
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <script type="text/javascript" language="JavaScript" src="../../../js/jquery-1.9.1.js"></script>

    </head>
    <body>
        <?php 
            $this->renderPartial('/layouts/_topnavbar');
            $this->renderPartial('/layouts/_loginmodals'); 
        ?>
        <div id="main" class="container-fluid"></div>
        <script data-main="../../../app_hubstar/scripts/main" src="../../../app_hubstar/scripts/libs/requirejs/2.1.2/require.js"></script>
        <?php 
            $this->renderPartial('/layouts/_footer'); 
            ?>
    </body>
</html>
