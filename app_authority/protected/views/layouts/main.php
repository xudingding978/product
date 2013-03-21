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

        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />

        <title><?php echo CHtml::encode($this->pageTitle); ?></title>
    </head>

    <body>

        <div class="container-old" id="page" style="margin-top: 50px; width:100%" >

            <div id="header">
                <div id="logo"><?php echo CHtml::encode(Yii::app()->name); ?></div>
            </div><!-- header -->
            <?php
            // build out login/logout string

            if (Yii::app()->user->isGuest) {
                $_user_label = 'Login';
                $_user_url = '/site/login';
            } else {
                $_user_label = 'Logout (' . Yii::app()->user->name . ')';
                $_user_url = '/site/logout';
            }

            $this->widget('bootstrap.widgets.TbNavbar', array(
                'brand' => 'Authority',
                'brandOptions' => array('style' => 'width:auto;margin-left: 0px;'),
                'brandUrl' => '#',
                'collapse' => true,
                'fixed' => 'top',
                'htmlOptions' => array('style' => 'position:absolute'),
                'items' => array(
                    array(
                        'class' => 'bootstrap.widgets.TbMenu',
                        'items' => array(
                            array('label' => 'Home', 'url' => '/', 'active' => true),
                            array('label' => 'Users', 'url' => '/user/admin', 'items' => array(
                                    array('label' => 'Actions'),
                                    '---',
                                    array('label' => 'View Users', 'url' => '/user/'),
                                    array('label' => 'Create Users', 'url' => '/user/create'),
                                    array('label' => 'Manage Users', 'url' => '/user/admin'),
                                    array('label' => 'Manage User Profiles', 'url' => '/userProfile/admin'),
                                )),
                            array('label' => 'Tenants', 'url' => '/tenant', 'items' => array(
                                    array('label' => 'Actions'),
                                    '---',
                                    array('label' => 'View Tenants', 'url' => '/tenant/'),
                                    array('label' => 'Create Tenants', 'url' => '/tenant/create'),
                                    array('label' => 'Manage Tenants', 'url' => '/tenant/admin'),
                                )),
                            array('label' => 'Authority', 'url' => '/auth', 'items' => array(
                                    array('label' => 'Actions'),
                                    '---',
                                    array('label' => 'Assignments', 'url' => '/auth/assignment'),
                                    array('label' => 'Roles', 'url' => '/auth/role'),
                                    array('label' => 'Tasks', 'url' => '/auth/task'),
                                    array('label' => 'Operations', 'url' => '/auth/operation'),
                                )),
                            array('label' => $_user_label, 'url' => $_user_url)
                        )
                    )
                )
            ));
            ?>
            <div id="mainmenu">
                <?php
                $this->widget('zii.widgets.CMenu', array(
                    'items' => array(
                        array('label' => 'Home', 'url' => array('/site/index')),
                        array('label' => 'About', 'url' => array('/site/page', 'view' => 'about')),
                        array('label' => 'Contact', 'url' => array('/site/contact')),
                        array('label' => 'Login', 'url' => array('/site/login'), 'visible' => Yii::app()->user->isGuest),
                        array('label' => 'Logout (' . Yii::app()->user->name . ')', 'url' => array('/site/logout'), 'visible' => !Yii::app()->user->isGuest)
                    ),
                ));
                ?>
            </div><!-- mainmenu  -->
            <?php if (isset($this->breadcrumbs)): ?>
                <?php
                $this->widget('bootstrap.widgets.TbBreadcrumbs', array(
                    'links' => $this->breadcrumbs,
                ));
                ?><!-- breadcrumbs -->
            <?php endif ?>
            <div class="row-fluid">
                <?php echo $content; ?>
            </div>

            <div class="clear"></div>

            <div id="footer">
                Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
                All Rights Reserved.<br/>
                <?php echo Yii::powered(); ?>
            </div><!-- footer -->

        </div><!-- page -->

    </body>
</html>
