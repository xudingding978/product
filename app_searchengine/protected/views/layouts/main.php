<?php
/*
 * @var $this Controller
 * @var $this SiteController 
 * @var $model LoginForm 
 * @var $form CActiveForm  
 */
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />
        <link href='http://fonts.googleapis.com/css?family=Archivo+Narrow' rel='stylesheet' type='text/css'>
        <link media="screen, projection" rel="stylesheet" href="../../../css/reset-new.css"/>
        <link rel="stylesheet" type="text/css" href="../../../css/main.css" />    
            <title><?php echo CHtml::encode($this->pageTitle); ?></title>
            <script type="text/javascript" language="JavaScript" src="../../../js/jquery-1.9.1.js"></script>
            <script type="text/javascript" language="JavaScript" src="../../../js/jquery.isotope.min.js"></script>  
            <script type="text/javascript" language="JavaScript" src="../../../js/jquery.bxslider.min.js"></script>
            <link media="screen, projection" rel="stylesheet" type="text/css" href="../../../css/gallery.css"/>
            <link media="screen, projection" rel="stylesheet" type="text/css" href="../../../css/jquery.bxslider.css"/>
            <link rel="stylesheet" type="text/css" href="../../../css/customstyle.php" /> 
            <link rel="stylesheet" href="../../../css/font-awesome.min.css">
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
                                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');
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
                    };

                    $(function() {

                        var dd = new DropDown($('.dropdown_test'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd1 = new DropDown($('.dropdown_test_1'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd2 = new DropDown($('.dropdown_test_2'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd3 = new DropDown($('.dropdown_test_3'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd4 = new DropDown($('.dropdown_test_4'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });

                    });

                </script>
                <script type="text/javascript">

                    $(document).ready(function() {

                        $('#main-nav span').removeClass('caret');
                        $('#myModal').attr('aria-hidden', 'false');
                        $('#myModal').attr("style", "display:none");

                        $('#social_login').attr('aria-hidden', 'false');
                        $('#social_login').attr("style", "display:block");

                        $('#email_login').attr('aria-hidden', 'true');
                        $('#email_login').attr("style", "display:none");


                        $('#email_register').attr('aria-hidden', 'true');
                        $('#email_register').attr("style", "display:none");

                        // left hiding menu bar

                        $('.main-nav ').attr("style", "opacity:0.4;width:10px;overflow:hidden");
                        // hide #back-top first
                        $("#back-top").hide();
                        $(window).scroll(function() {
                            if ($(this).scrollTop() == 0) {
                                $('#discovery_search_bar_wrapper').attr('style', 'position:relative;margin-top: 40px;');
                                document.getElementById("search-loading").className = "search-loading-invisible";
                            }
                            if ($(this).scrollTop() > 150) {
                                $('#back-top').fadeIn();
                            } else {
                                $('#back-top').fadeOut();
                            }

                            if ($(this).scrollTop() > 150) {
                                $('.smallIcon').fadeIn();
                            } else {
                                $('.smallIcon').fadeOut();
                            }
                        });
                        $('#back-top a').click(function() {
                            $('body,html').animate({
                                scrollTop: 0
                            }, 800);
                            return false;
                        });
                    });
                    function dismiss_modal() {
                        $('#social_login').attr('aria-hidden', 'true');
                        $('#social_login').attr("style", "display:none");
                        $('#email_login').attr('aria-hidden', 'false');
                        $('#email_login').attr("style", "display:block");

                    }
                    function dismiss_modal_test() {
                        $('#social_login').attr('aria-hidden', 'true');
                        $('#social_login').attr("style", "display:none");
                        $('#email_login').attr('aria-hidden', 'false');
                        $('#email_login').attr("style", "display:block");

                    }
                    function dismiss_Join() {
                        $('#email_login').attr('aria-hidden', 'true');
                        $('#email_login').attr("style", "display:none");
                        $('#email_register').attr('aria-hidden', 'false');
                        $('#email_register').attr("style", "display:block");

                    }


                    function reset_login() {
                        $('#email_login').attr('aria-hidden', 'true');
                        $('#email_login').attr("style", "display:none");
                        $('#social_login').attr('aria-hidden', 'false');
                        $('#social_login').attr("style", "display:block");

                        $('#email_register').attr('aria-hidden', 'true');
                        $('#email_register').attr("style", "display:none");

                    }
                    function show_search_bar() {


                        $('#discovery_search_bar_wrapper').attr('style', 'position:fixed;margin-top: -30px;z-index: 50000;');
                        document.getElementById("search-loading").className = "search-loading-visible";

                    }
                    function dismiss_search() {
                        $('#discovery_search_bar_wrapper').attr('style', 'position:relative;margin-top: 40px;z-index: 500;');
                        document.getElementById("search-loading").className = "search-loading-invisible";
                    }

                    function detDomain() {
<?php
$dot_positon = strpos($_SERVER['HTTP_HOST'], ".");
$domain = substr($_SERVER['HTTP_HOST'], $dot_positon);
?>
                    }
                    function Facebook() {
                        detDomain();
                        window.location.href = "http://account" + "<?php echo $domain ?>" + "/hybridauth/default/login/?provider=Facebook";
                    }
                    function Yahoo() {
                        detDomain();
                        window.location.href = "http://account" + "<?php echo $domain ?>" + "/hybridauth/default/login/?provider=Yahoo";
                    }
                    function QQ() {
                        detDomain();
                        window.location.href = "http://account" + "<?php echo $domain ?>" + "/hybridauth/default/login/?provider=QQ";
                    }
                    function Sina() {
                        detDomain();
                        window.location.href = "http://account" + "<?php echo $domain ?>" + "/hybridauth/default/login/?provider=Sina";
                    }
                    function Twitter() {
                        detDomain();
                        window.location.href = "http://account" + "<?php echo $domain ?>" + "/hybridauth/default/login/?provider=Twitter";
                    }
                    function Google() {
                        detDomain();
                        //      alert("<?php echo $domain ?>");
                        window.location.href = "http://account" + "<?php echo $domain ?>" + "/hybridauth/default/login/?provider=Google";
                    }
                </script>
                </head>
                <body style="min-width:900px;">
                    <div id="mainmenu" class="maintopmenu">
                        <?php 
                            $this->beginWidget('bootstrap.widgets.TbModal', array('id' => 'myModal')); 
                            $this->renderPartial('/layouts/_loginmodals'); 
                        ?>
                    </div><!-- form -->

                    <script type="text/javascript">

                        function send_register()
                        {

                            var data = $("#login-form-register").serialize();


                            $.ajax({
                                type: 'POST',
                                url: '<?php echo CController::createUrl('User/create'); ?>',
                                data: data,
                                success: function(data) {
                                    //     alert(data);

                                    if (data !== "") {

                                        if (data.indexOf('must be repeated exactly') !== -1) {

                                            $('#password_repeat').attr("style", "display:block ;color:red");
                                        } else {
                                            $('#password_repeat').attr("style", "display:none");
                                        }
                                        if (data.indexOf('has already been taken') !== -1) {

                                            $('#username_taken').attr("style", "display:block ;color:red");
                                        } else {
                                            $('#username_taken').attr("style", "display:none");
                                        }
                                        if (data.indexOf('emailll;lllll') !== -1) {

                                            $('#email_taken').attr("style", "display:block ;color:red");
                                        } else {
                                            $('#email_taken').attr("style", "display:none");
                                        }

                                    } else {
                                        window.location = "<?php echo CController::createUrl('Site/index'); ?>";
                                    }

                                },
                                error: function(data) { // if error occured
                                    alert("Error occured.please try again");
                                    alert(data);
                                },
                                dataType: 'html'
                            });

                        }

                    </script>
                    </div>
                    </div>
                    </div>
                    </div>

                    <?php
                    $this->endWidget();
                    $this->renderPartial('/layouts/_topnavbar');
                    if (isset($this->breadcrumbs)) {
                        $this->widget('zii.widgets.CBreadcrumbs', array(
                            'links' => $this->breadcrumbs,
                        ));
                    }
                    echo $content;
                    ?>
                    <div class="clear"></div>
                    <p id="back-top">
                        <a href="#top"><span></span>Back to Top</a>
                    </p>
                    <?php $this->renderPartial('/layouts/_footer'); ?>
                </body>
                </html>
