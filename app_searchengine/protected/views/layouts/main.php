<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />

        <link href='http://fonts.googleapis.com/css?family=Archivo+Narrow' rel='stylesheet' type='text/css'>
      
            <link rel="stylesheet" type="text/css" href="./../../css/main.css" />    


            <link rel="stylesheet" href="../../../css/font-awesome.min.css">

                <title><?php echo 'search engine' ?></title>
                <link rel="stylesheet" type="text/css" href="../../../css/customstyle.php" /> 
                <script type="text/javascript">

                    function DropDown(el) {
                        this.dd = el;
                        this.placeholder = this.dd.children('span');
                        this.opts = this.dd.find('ul.dropdown > li');
                        this.val = '';
                        this.index = -1;
                        this.initEvents();
                    }
                    DropDown.prototype = {
                        initEvents: function() {
                            var obj = this;

                            obj.dd.on('click', function(event) {
                                $(this).toggleClass('active');
                                return false;
                            });

                            obj.opts.on('click', function() {
                                var opt = $(this);
                                obj.val = opt.text();
                                obj.index = opt.index();
                                obj.placeholder.text(obj.val);
                            });
                        },
                        getValue: function() {
                            return this.val;
                        },
                        getIndex: function() {
                            return this.index;
                        }
                    }

                    $(function() {

                        var dd = new DropDown($('#dd'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });

                    });

                </script>
                <script type="text/javascript">
                    $(document).ready(function() {

                        $(window).scroll(function() {

                            if ($(this).scrollTop() > 150) {
                                $('.smallIcon').fadeIn();
                            } else {
                                $('.smallIcon').fadeOut();
                            }
                        });


                    });
                </script>
                </head>

                <body>
                    <div class="container" id="page">

                        <div id="header">
                            <div id="logo"><?php echo Yii::app()->request->baseUrl; ?></div>

                        </div><!-- header -->


                        <div id="mainmenu">
                            <?php
                            if (Yii::app()->user->isGuest) {

                                $this->widget('bootstrap.widgets.TbNavbar', array(
                                    'brand' => '<img class="logonew"  height="29px" src ="../../../images/landing-trends.png"/>',
                                    'items' => array(
                                        '<p class="titleText">  Global  recommendations from </p>',
                                        array(
                                            'class' => 'bootstrap.widgets.TbMenu',
                                            'htmlOptions' => array('class' => 'dropdown_region'),
                                            'items' => array(
                                                array('label' => 'Region', 'url' => '#', 'items' => array(
                                                        array('label' => 'Australia', 'url' => array('/site/index')),
                                                        array('label' => 'New Zealand', 'url' => array('/site/index')),
                                                        array('label' => 'India', 'url' => array('/site/index')),
                                                        array('label' => 'China', 'url' => array('/site/index')),
                                                        array('label' => 'America', 'url' => array('/site/index')),
                                                    )),
                                            )
                                        ),
                                        array(
                                            'class' => 'bootstrap.widgets.TbMenu',
                                            'htmlOptions' => array('class' => 'pull-right'),
                                            'items' => array(
                                                array('label' => 'Login',
                                                    'url' => array('/site/login')),
                                            )
                                        )
                                    )
                                ));
                            } else {
                                $userProfile = UserProfile::model()->findByAttributes(array('DISPLAY_NAME' => Yii::app()->user->name));
                                $this->widget('bootstrap.widgets.TbNavbar', array(
                                    'brand' => '<img class="logonew"  height="29px" src ="../../../images/landing-trends.png"/>',
                                    'items' => array(
                                        '<p class="titleText">  Global  recommendations from </p>',
                                        array(
                                            'class' => 'bootstrap.widgets.TbMenu',
                                            'htmlOptions' => array('class' => 'dropdown_region'),
                                            'items' => array(
                                                array('label' => 'Region', 'url' => '#', 'items' => array(
                                                        array('label' => 'Australia', 'url' => array('/site/index')),
                                                        array('label' => 'New Zealand', 'url' => array('/site/index')),
                                                        array('label' => 'India', 'url' => array('/site/index')),
                                                        array('label' => 'China', 'url' => array('/site/index')),
                                                        array('label' => 'America', 'url' => array('/site/index')),
                                                    )),
                                            )
                                        ),
                                        '<img id="asdas" class="loging_image"  height="29px" src ="' . $userProfile->PHOTO_URL . '"/>',
                                        '<p class="loging_text">Hi!!   ' . $userProfile->DISPLAY_NAME . ' </p>',
                                        array(
                                            'class' => 'bootstrap.widgets.TbMenu',
                                            'htmlOptions' => array('class' => 'loging_table'),
                                            'items' => array(
                                                array('label' => '', 'url' => '#', 'items' => array(
                                                        array('label' => '1', 'url' => array('/site/index')),
                                                        array('label' => '2', 'url' => array('/site/index')),
                                                        array('label' => '3', 'url' => array('/site/index')),
                                                        array('label' => '4', 'url' => array('/site/index')),
                                                        array('label' => 'Logout (' . Yii::app()->user->name . ')', 'url' => array('/site/logout')),
                                                    )),
                                            )
                                        )
                                    )
                                ));
                            }
                            ?>

                            <div class="smallIcon">
                                <a class="icon_a" href='javascript:content_panel.update("/search/index-gallery.php")'><i class="icon-th icon-2x" ></i></a>
                                <a class="icon_b" href='javascript:content_panel.update("/search/index-list.php")'><i class="icon-list-ul  icon-2x" ></i></a>
                                <a href="#" class="icon_c" ><i class="icon-search icon-2x" ></i></a>
                            </div>
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
