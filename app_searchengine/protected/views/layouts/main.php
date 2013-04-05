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

<!--            <script type="text/javascript" language="JavaScript" src="../../../js/ember-1.0.0-rc.2.js"></script>  -->

            <link rel="stylesheet" type="text/css" href="../../../css/main.css" />    




            <title><?php echo 'search engine' ?></title>
            <script type="text/javascript" language="JavaScript" src="../../../js/jquery-1.7.1.min.js"></script>
            <script type="text/javascript" language="JavaScript" src="../../../js/jquery.isotope.min.js"></script>  


            <link media="screen, projection" rel="stylesheet" type="text/css" href="../../../css/gallery.css"/>

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
                        var dd1 = new DropDown($('#dd1'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd2 = new DropDown($('#dd2'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd3 = new DropDown($('#dd3'));

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });
                        var dd4 = new DropDown($('#dd4'));

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
<?PHP
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





                    <div id="mainmenu">

                        <?php $this->beginWidget('bootstrap.widgets.TbModal', array('id' => 'myModal')); ?>

                        <div class="modal-header">
                            <a class="close" onclick="reset_login();" data-dismiss="modal" x>X</a>
                            <h4>TRENDS</h4>
                        </div>

                        <div class="modal-body" style='word-wrap:break-word' >

                            <!-- Modal -->
                            <div id="social_login" class="social_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                                <div class="modal-body">
                                    <p>description_description_description_description_description_description_description_description_description_description</p>

                                    <div id="dd" class="wrapper-dropdown-3" tabindex="1">
                                        <span>Select to login</span>
                                        <ul class="dropdown" style="width:220px">
                                            <li  onclick="Facebook();" ><a style="color:rgb(138,168,1)" href="#"><i class="icon-envelope icon-large"></i>Sign in with FaceBook</a></li>
                                            <li  onclick="Yahoo();" ><a style="color:rgb(138,32,50)" href="#"><i class="icon-truck icon-large"></i>Sign in with Yahoo</a></li>
                                            <li  onclick="QQ();" ><a style="color:rgb(32,168,34)" href="#"><i class="icon-plane icon-large"></i>Sign in with QQ</a></li>
                                            <li  onclick="Sina();" ><a style="color:rgb(138,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Sina</a></li>
                                            <li  onclick="Google();" ><a style="color:rgb(138,23,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Google+</a></li>
                                            <li  onclick="Twitter();" ><a style="color:rgb(55,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Twitter</a></li>
                                            <li  onclick="dismiss_modal();" ><a style="color:rgb(90,168,32)" href="#"><i class="icon-plane icon-large"></i>Sign in with Email</a></li>
                                        </ul>
                                    </div>

                                    <div style="top:200px;margin-top:250px;">
                                        <a  href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Google" >Google+</a>
                                        <a  href="http://account.business-software.co.nz/hybridauth/default/login/?provider=FaceBook">FaceBook</a>
                                        <a  href="http://account.business-software.co.nz/hybridauth/default/login/?provider=QQ">QQ</a>
                                        <a  href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Sina">Sina</a>
                                        <a  href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Twitter">Twitter</a>
                                        <a  href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Yahoo">Yahoo</a>
                                        <a  href="#email_login" onclick="dismiss_modal();">Email</a>
                                        <a href="#email_login" role="button" class="btn" onclick="dismiss_modal();">Email</a>



                                    </div>
                                </div>

                            </div>
                            <!-- Modal -->
                            <div id="email_login" class="email_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                                <div class="modal-body">
                                    <div id="dd1" class="wrapper-dropdown-3" tabindex="1">
                                        <span>Select to login</span>
                                        <ul class="dropdown" style="width:220px">
                                            <li  onclick="Facebook();" ><a style="color:rgb(138,168,1)" href="#"><i class="icon-envelope icon-large"></i>Sign in with FaceBook</a></li>
                                            <li  onclick="Yahoo();" ><a style="color:rgb(138,32,50)" href="#"><i class="icon-truck icon-large"></i>Sign in with Yahoo</a></li>
                                            <li  onclick="QQ();" ><a style="color:rgb(32,168,34)" href="#"><i class="icon-plane icon-large"></i>Sign in with QQ</a></li>
                                            <li  onclick="Sina();" ><a style="color:rgb(138,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Sina</a></li>
                                            <li  onclick="Google();" ><a style="color:rgb(138,23,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Google+</a></li>
                                            <li  onclick="Twitter();" ><a style="color:rgb(55,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Twitter</a></li>

                                        </ul>
                                    </div>
                                    <p style="margin-left:350px;">Don't have an account yet?</p>
                                    <a style="margin-left:350px;" href="#email_register" onclick="dismiss_Join();">Join Now</a>


                                    <?PHP
                                    $model = new LoginForm;
                                    ?>

                                    <div class="form">

                                        <?php
                                        $form = $this->beginWidget('CActiveForm', array(
                                            'id' => 'login-form',
                                            'enableAjaxValidation' => true,
                                            'enableClientValidation' => true,
                                            'clientOptions' => array(
                                                'validateOnSubmit' => true
                                            ),
                                            'htmlOptions' => array(
                                                'onsubmit' => "return false;", /* Disable normal form submit */
                                                'onkeypress' => " if(event.keyCode == 13){ send(); } " /* Do ajax call when user presses enter key */
                                            ),
                                        ));
                                        ?>




                                        <div class="row">
                                            <?php echo $form->labelEx($model, 'username'); ?>
                                            <?php echo $form->textField($model, 'username'); ?>
                                            <?php echo $form->error($model, 'username'); ?>    
                                            <p id='user_blank' style="display:none">* Username cannot be blank.</p>
                                        </div>
                                        <div class="row">
                                            <?php echo $form->labelEx($model, 'password'); ?>
                                            <?php echo $form->passwordField($model, 'password'); ?>
                                            <?php echo $form->error($model, 'password'); ?>
                                            <p  id='password_blank'  style='display:none;' >* Password cannot be blank.</p>
                                            <p  id='password_incorrect'  style='display:none' >* Incorrect username or password.</p>
                                        </div>
                                        <div class="row rememberMe">
                                            <?php echo $form->checkBox($model, 'rememberMe'); ?>
                                            <?php echo $form->label($model, 'keep me signed in'); ?>
                                            <?php echo $form->error($model, 'rememberMe'); ?>
                                        </div>


                                        <div class="row buttons">

                                            <a href="#" role="button" class="btn" onclick="send();">Login</a>
                                        </div>

                                        <?php $this->endWidget(); ?>

                                    </div><!-- form -->
                                    <a href='#'>Forgot your username or password?</a>
                                    <script type="text/javascript">

                    function send()
                    {

                        var data = $("#login-form").serialize();


                        $.ajax({
                            type: 'POST',
                            url: '<?php echo CController::createUrl('Site/Ajax'); ?>',
                            data: data,
                            success: function(data) {
                                if (data !== "") {
                                    //       alert(data);
                                    if (data.indexOf('Username cannot be blank') !== -1) {
                                        $('#user_blank').attr("style", "display:block; color:red");

                                    } else {
                                        $('#user_blank').attr("style", "display:none");
                                    }
                                    if (data.indexOf('Password cannot be blank') !== -1) {

                                        $('#password_blank').attr("style", "display:block; color:red");
                                    } else {
                                        $('#password_blank').attr("style", "display:none");
                                    }
                                    if (data.indexOf('Incorrect username or password') !== -1) {

                                        $('#password_incorrect').attr("style", "display:block ;color:red");
                                    } else {
                                        $('#password_incorrect').attr("style", "display:none");
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

                            <!-- Modal -->
                            <div id="email_register" class="register_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                                <div class="modal-body">

                                    <h2>Sign Up for your Free Account!</h2>

                                    <div id="dd2" class="wrapper-dropdown-3" tabindex="1">
                                        <span>Select to login</span>
                                        <ul class="dropdown" style="width:220px">
                                            <li  onclick="Facebook();" ><a style="color:rgb(138,168,1)" href="#"><i class="icon-envelope icon-large"></i>Sign in with FaceBook</a></li>
                                            <li  onclick="Yahoo();" ><a style="color:rgb(138,32,50)" href="#"><i class="icon-truck icon-large"></i>Sign in with Yahoo</a></li>
                                            <li  onclick="QQ();" ><a style="color:rgb(32,168,34)" href="#"><i class="icon-plane icon-large"></i>Sign in with QQ</a></li>
                                            <li  onclick="Sina();" ><a style="color:rgb(138,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Sina</a></li>
                                            <li  onclick="Google();" ><a style="color:rgb(138,23,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Google+</a></li>
                                            <li  onclick="Twitter();" ><a style="color:rgb(55,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Twitter</a></li>

                                        </ul>
                                    </div>
                                    <p>Don't worry , we'll never post without your permission.</p>
                                    <?php
                                    $this->widget('bootstrap.widgets.TbButton', array(
                                        'label' => 'Bottom popover',
                                        'type' => 'success',
                                        'htmlOptions' => array('data-title' => 'A Title', 'data-placement' => 'bottom', 'data-content' => 'And here\'s some amazing content. It\'s very engaging. right?', 'rel' => 'popover'),
                                    ));
                                    ?>

                                    <span>Sign Up with your Email Address:</span>

                                    <?PHP
                                    $model = new User;
                                    ?>

                                    <div class="form">

                                        <?php
                                        $form = $this->beginWidget('CActiveForm', array(
                                            'id' => 'login-form-register',
                                            'enableAjaxValidation' => true,
                                            'enableClientValidation' => true,
                                            'clientOptions' => array(
                                                'validateOnSubmit' => true
                                            ),
                                            'htmlOptions' => array(
                                                'onsubmit' => "return false;", /* Disable normal form submit */
                                                'onkeypress' => " if(event.keyCode == 13){ send_register(); } " /* Do ajax call when user presses enter key */
                                            ),
                                        ));
                                        ?>


                                        <div class="row">

                                            <?php echo $form->textField($model, 'EMAIL_ADDRESS', array('size' => 60, 'placeholder' => "Email Address", 'maxlength' => 255)); ?>
                                            <?php echo $form->error($model, 'EMAIL_ADDRESS'); ?>
                                            <p id='email_taken' style="display:none">* E-mail has already been taken.</p>
                                        </div>

                                        <div class="row">

                                            <?php echo $form->textField($model, 'USER_NAME', array('size' => 60, 'placeholder' => "Username", 'maxlength' => 255)); ?>
                                            <?php echo $form->error($model, 'USER_NAME'); ?>
                                            <p id='username_taken' style="display:none">* Username has already been taken.</p>
                                        </div>
                                        <div class="row">

                                            <?php echo $form->passwordField($model, 'PWD_HASH', array('size' => 60, 'placeholder' => "Password", 'maxlength' => 512)); ?>
                                            <?php echo $form->error($model, 'PWD_HASH'); ?>

                                        </div>

                                        <div class="row">

                                            <?php echo $form->passwordField($model, 'repeatPassword', array('size' => 60, 'placeholder' => "Confirm Password", 'maxlength' => 512)); ?>
                                            <?php echo $form->error($model, 'repeatPassword'); ?>
                                            <p id='password_repeat' style="display:none">* Password must be repeated exactly.</p>
                                        </div>
                                        <div class="row buttons">

                                            <a href="#" role="button" class="btn" onclick="send_register();">Sign Up</a>
                                        </div>

                                        <?php $this->endWidget(); ?>

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


                                    <p>By clicking Sign Up you indicate that you have read and agreed to the <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy </a>.</p>


                                </div>

                            </div>

                        </div>


                        <?php $this->endWidget(); ?>


                        <?php
                        if (Yii::app()->user->isGuest) {
                            $this->widget('bootstrap.widgets.TbNavbar', array(
                                'brand' => '<img class="logonew"  height="29px" src ="../../../images/landing-trends.png"/>',
                                //    'collapse' => 'true',
                                'items' => array(
                                    '<p class="titleText"> Global  recommendations from </p>',
                                    '<div id="dd4" class="wrapper-dropdown-3" tabindex="1" style="top: -30px; background:none;border-radius: none;border: none;color:white;box-shadow: none;">
                                                <span class="SpanFontSetting">Region</span>
                                                <ul class="dropdown" style="background: none repeat scroll 0% 0% rgb(45, 45, 45);border: 1px solid rgba(0, 0, 0, 0.17);">
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>Australia</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>New Zealand</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>India</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>China</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>America</a></li>
                                                </ul>
                                            </div>',
                                    '<div class="smallIcon">
                                        <a class="icon_a" href="#"><i class="icon-th icon-2x" ></i></a>
                                            <a class="icon_b" href="#"><i class="icon-list-ul  icon-2x" ></i></a>
                                                <a href="#" class="icon_c" ><i class="icon-search icon-2x" ></i></a>
                                                </div>',
                                    array(
                                        'class' => 'bootstrap.widgets.TbMenu',
                                        'htmlOptions' => array(
                                            'class' => 'login_guest',
                                            'data-toggle' => 'modal',
                                            'data-target' => '#myModal',
                                        ),
                                        'items' => array(
                                            array('label' => 'Login',
                                                'url' => array('#')),
                                        )
                                    )
                                )
                            ));
                        } else {
                            $userProfile = UserProfile::model()->findByAttributes(array('USER_REC_ID' => Yii::app()->user->id));
                            if ($userProfile === null) {
                                $name = Yii::app()->user->name;
                                $user_img = "";
                            } else {
                                $name = $userProfile->DISPLAY_NAME;
                                $user_img = $userProfile->PHOTO_URL;
                            }
                            $this->widget('bootstrap.widgets.TbNavbar', array(
                                'brand' => '<img class="logonew"  height="29px" src ="../../../images/landing-trends.png"/>',
                                'items' => array(
                                    '<p class="titleText">  Global  recommendations from </p>',
                                    '<div id="dd4" class="wrapper-dropdown-3" tabindex="1" style="top: -30px; background:none;border-radius: none;border: none;color:white;box-shadow: none;">
                                                <span class="SpanFontSetting">Region</span>
                                                <ul class="dropdown" style="background: none repeat scroll 0% 0% rgb(45, 45, 45);border: 1px solid rgba(0, 0, 0, 0.17);">
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>Australia</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>New Zealand</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>India</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>China</a></li>
                                                    <li><a href="#" style="border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>America</a></li>
                                                </ul>
                                            </div>',
                                    '<img id="asdas" class="loging_image"  height="29px" src ="' . $user_img . '"/>',
                                    '<p class="loging_text">Hi!!   ' . $name . ' </p>',
                                    '<div class="smallIcon">
                                        <a class="icon_a" href="#"><i class="icon-th icon-2x" ></i></a>
                                            <a class="icon_b" href="#")><i class="icon-list-ul  icon-2x" ></i></a>
                                                <a class="icon_c" onclick="show_search_bar();"><i class="icon-search icon-2x" ></i></a>
                                                </div>',
                                    array(
                                        'class' => 'bootstrap.widgets.TbMenu',
                                        'htmlOptions' => array('class' => 'loging_table moveTop'),
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
                    <p id="back-top">
                        <a href="#top"><span></span>Back to Top</a>
                    </p>
                    <div id="footer">
                        Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
                        All Rights Reserved.<br/>
                        <?php echo Yii::powered(); ?>




                    </div><!-- footer -->



                </body>
                </html>