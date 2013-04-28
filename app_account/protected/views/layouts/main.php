<?php /* @var $this Controller */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />

        <!-- blueprint CSS framework -->
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
        <!--[if lt IE 8]>
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
        <![endif]-->
        <link rel="stylesheet" href="../../../css/font-awesome.min.css">

            <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css" />
            <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />


            <title><?php echo CHtml::encode($this->pageTitle . ' sess '. Yii::app()->session->getSessionID()); ?></title>


    </head>

    <body>

        <div class="container" id="page">
            <?php if (!Yii::app()->user->isGuest) {
                
            };
            ?>
            <div id="header">
                <div id="logo"><?php echo CHtml::encode(Yii::app()->name); ?></div>
            </div><!-- header -->
            <?php
            $this->widget('bootstrap.widgets.TbNavbar', array(
                'brand' => 'My Account',
                'brandOptions' => array('style' => 'width:auto;margin-left: 0px;'),
                'fixed' => 'top',
                'htmlOptions' => array('style' => 'position:absolute'),
                'items' => array(
                    array(
                        'class' => 'bootstrap.widgets.TbMenu',
                        'items' => array(
                            array('label' => 'Home', 'url' => '#', 'active' => true),
                            array('label' => 'Link', 'url' => '#'),
                            array('label' => 'Link', 'url' => '#'),
                        )
                    )
                )
            ));
            ?>
            <div id="mainmenu">

                <?php
                $items = array();
                if (!Yii::app()->user->isGuest) {
//                    $clients = Client::model()->findAllByAttributes(array('USER_ID' => Yii::app()->user->getID()));
//                    foreach ($clients as $c) {
//                        array_push($items, array('label' => $c->CLIENT_NAME, 'url' => '/client/view/' . $c->REC_ID));
//                    }
                }
//                $this->widget('bootstrap.widgets.TbButtonGroup', array(
//                    'size' => 'large',
//                    'type' => 'inverse', // '', 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
//                    'buttons' => array(
//                        array('label' => 'Manage Client',
//                            'visible' => !Yii::app()->user->isGuest,
//                            'items' => array(
//                                array('label' => 'Create a New Client Profile', 'url' => '/client/create'),
//                                array('label' => 'Login your Client',
//                                    'items' => $items)
//                            )),
//                    ),
//                ));
                $this->widget('zii.widgets.CMenu', array(
                    'items' => array(
                        array('label' => 'Login', 'url' => array('/site/login'), 'visible' => Yii::app()->user->isGuest),
                        array('label' => 'register', 'url' => array('/user/create'), 'visible' => Yii::app()->user->isGuest),
                        // array('label' => 'to be a client', 'url' => array('/client/create'), 'visible' => !Yii::app()->user->isGuest),
                        array('label' => 'Edit Your Profile', 'url' => array('/user/update/' . Yii::app()->user->id), 'visible' => !Yii::app()->user->isGuest),
                        array('label' => 'Logout (' . Yii::app()->user->name . ')', 'url' => array('/site/logout'), 'visible' => !Yii::app()->user->isGuest)
                    ),
                ));
                ?>




            </div><!-- mainmenu -->

            <?php if (isset($this->breadcrumbs)): ?>
                <?php
                $this->widget('zii.widgets.CBreadcrumbs', array(
                    'links' => $this->breadcrumbs,
                ));
                ?><!-- breadcrumbs -->
            <?php endif ?>

            <?php echo $content; ?>

            <div class="clear"></div>

            <div id="footer">
                Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
                All Rights Reserved.<br/>
                <?php echo Yii::powered(); ?>



            </div><!-- footer -->


        </div><!-- page -->

    </body>
</html>
