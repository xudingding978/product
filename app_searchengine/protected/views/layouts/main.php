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



            <title><?php echo 'search engine' ?></title>
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
                    }

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





                    <div id="mainmenu" class="sadcasf">

                        <?php $this->beginWidget('bootstrap.widgets.TbModal', array('id' => 'myModal')); ?>

                        <div class="modal-header" style="background-color: rgb(242,240,240); padding:12px 0px; border-radius: 6px 6px 0 0;">
                            <a class="close" style="margin:-11px 8px;" onclick="reset_login();" data-dismiss="modal" x>x</a>

                        </div>


                        <div class="modal-body" style="margin:-15px;" style='word-wrap:break-word' >

                            <!-- Modal -->
                            <div id="social_login" class="social_modal hide fade"  style="border-radius: 0 0 6px 6px;" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                                <div class="modal-body" style="border-radius: 0 0 6px 6px;">

                                    <div class="modal-topbox" style="background-color: rgb(242,240,240); padding:15px 0px 45px 0px; margin: -21px -15px -15px -15px; ">
                                        <img class="logonew"  src="../../../images/trendslogo(black).png"></img>
                                        <div style="margin:60px 65px;">
                                            <p style="text-align:center; "><b>COLLECT YOUR ONLINE RESOURCE FOR KITCHENS, PRODUCTS, SERVICES & IDEAS</b></p>
                                            <p style="font-size: 12px; text-align: center;"><b>Hundreds of videos, thousands of articles and tens of thousands of high quality images from around the world showcasing: Architecture, Kitchen Design, Bathroom Design, Interiors, Landscape Design and Commercial Design. </b></p>
                                        </div>
                                        <div id="dd" class="wrapper-dropdown-3" tabindex="1" style=" width:270px; height:45px; margin-top: -45px; margin-bottom: -5px;">

                                            <div>
                                                <div id="dropdown-cover" class="dropdown_test"  style="float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -11px; padding-left: 35px; border-radius: 3px 0 0 3px;">
                                                    <div class="login-icon">
                                                        <i class="icon-facebook icon-large">
                                                        </i>
                                                    </div>   
                                                </div>
                                                <div  id="dropdown-cover" onclick="Facebook();" style="float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -9.5px; border-radius: 0 3px 3px 0;">
                                                    <div class="sign-in-with" >Sign In with Facebook</div>
                                                </div>
                                            </div>
                                            <ul class="dropdown"  style="width:270px">
                                                <li  onclick="Twitter();" ><a style="color:rgb(0,172,237)" href="#"><i class="icon-twitter icon-large"></i>Sign in with Twitter</a></li>
                                                <li  onclick="Google();" ><a style="color:rgb(211,72,54)" href="#"><i class="icon-google-plus icon-large"></i>Sign in with Google+</a></li>
                                                <li  onclick="Yahoo();" ><a style="color:rgb(123,0,153)" href="#"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>
                                                <li  onclick="Sina();" ><a style="color:rgb(245,213,0)" href="#"><img src='../../../images/sina.png' style='width: auto; height: 35px; float:left;margin: -3% -3% 0 6%;'>Sign in with Sina</a></li>
                                                <li  onclick="QQ();" ><a style="color:rgb(62,59,62)" href="#"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>
                                                <li  onclick="dismiss_modal_test();" ><a style="color:rgb(0,153,68)" href="#myModal"><i class="icon-envelope-alt icon-large"></i>Sign in with Email</a></li>
                                            </ul>
                                        </div>
                                        <div class="panelcircle" style="position: absolute; right: 45%; top: 55%;"><b>OR</b></div>
                                    </div>




                                    <div style="top:200px; margin: 43px 40px 88px;">
                                        <div><p style="font-size: 12px; text-align: center;"><b>Other platform you might prefer:</b></p></div>
                                        <div>
                                            <a  class="square-button" href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Twitter">
                                                <div id="dropdown-cover" style="float: left; width: 45px; height: 45px; border-radius: 3px;"></div>
                                                <div class="square-button-twitter"><i class="icon-twitter icon-large" style="position: relative; top: -33px;"></i></div></a>

                                            <a  class="square-button" href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Google" >
                                                <div id="dropdown-cover" style="float: left; width: 45px; height: 45px; border-radius: 3px;"></div>
                                                <div class="square-button-google"><i class="icon-google-plus icon-large" style="position: relative; top: -33px; "></i></div></a>

                                            <a  class="square-button" href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Yahoo">
                                                <div id="dropdown-cover" style="float: left; width: 45px; height: 45px; border-radius: 3px;"></div>
                                                <div class="square-button-yahoo"><img src="../../../images/yahoo(white).png" style="position:  relative; top: -34px; width: auto; height:22px; "></img></div></a>

                                            <a  class="square-button" href="http://account.business-software.co.nz/hybridauth/default/login/?provider=Sina">  
                                                <div id="dropdown-cover" style="float: left; width: 45px; height: 45px; border-radius: 3px;"></div>
                                                <div class="square-button-sina"><img src="../../../images/sina(white).png" style="position:  relative; top: -34px; width: auto; height:22px; "></img></div></a>

                                            <a  class="square-button" href="http://account.business-software.co.nz/hybridauth/default/login/?provider=QQ">
                                                <div id="dropdown-cover" style="float: left; width: 45px; height: 45px; border-radius: 3px;"></div>
                                                <div class="square-button-qq"><img src="../../../images/QQ(white).png" style="position:  relative; top: -34px; width: auto; height:22px; "></img></div></a>

                                            <a  class="square-button" href="#email_login" onclick="dismiss_modal();" >
                                                <div id="dropdown-cover" style="float: left; width: 45px; height: 45px; border-radius: 3px;"></div>
                                                <div class="square-button-email"><i class="icon-envelope-alt icon-large" style="position: relative; top: -33px; "></i></div></a>

                                        </div>
                                        <!--                                    <a  href="#email_login" onclick="dismiss_modal();">Email</a>
                                                                            <a href="#email_login" role="button" class="btn" onclick="dismiss_modal();">Email</a>-->
                                        <div style="position: relative; top: 15px; margin-bottom: -35px; margin-top: 70px;"> <p style="text-align:center; "><b>Already have an account? Click <a>here </a> to log in!</b></p></div>


                                    </div>
                                </div>                   
                            </div>






                            <!--EMAIL_LOGIN-->
                            <!-- Modal -->








                            <div id="email_login" class="email_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                                <div class="modal-body">

                                    <div class="modal-topbox" style="background-color: rgb(242,240,240); padding: 40px; margin: -15px -15px 0 0; float: right;width: 350px;height: 300px;">

                                        <div id="dd1" class="wrapper-dropdown-3" tabindex="1" style=" width:270px; height:45px; position: relative; left: 5px; top: 50px;">

                                            <div>
                                                <div id="dropdown-cover" class="dropdown_test_1"  style="float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -11px; padding-left: 35px; border-radius: 3px 0 0 3px;">
                                                    <div class="login-icon">
                                                        <i class="icon-facebook icon-large">
                                                        </i>
                                                    </div>   
                                                </div>
                                                <div  id="dropdown-cover" onclick="Facebook();" style="float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -9.5px; border-radius: 0 3px 3px 0;">
                                                    <div class="sign-in-with" >Sign In with Facebook</div>
                                                </div>
                                            </div>
                                            <ul class="dropdown"  style="width:270px">
                                                <li  onclick="Twitter();" ><a style="color:rgb(0,172,237)" href="#"><i class="icon-twitter icon-large"></i>Sign in with Twitter</a></li>
                                                <li  onclick="Google();" ><a style="color:rgb(211,72,54)" href="#"><i class="icon-google-plus icon-large"></i>Sign in with Google+</a></li>
                                                <li  onclick="Yahoo();" ><a style="color:rgb(123,0,153)" href="#"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>
                                                <li  onclick="Sina();" ><a style="color:rgb(245,213,0)" href="#"><img src='../../../images/sina.png' style='width: auto; height: 35px; float:left;margin: -3% -3% 0 6%;'>Sign in with Sina</a></li>
                                                <li  onclick="QQ();" ><a style="color:rgb(62,59,62)" href="#"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>
                                                <li  onclick="dismiss_modal_test();" ><a style="color:rgb(0,153,68)" href="#myModal"><i class="icon-envelope-alt icon-large"></i>Sign in with Email</a></li>
                                            </ul>
                                        </div>
                                        <div style="position: relative; left: 5px; top: 60px;">
                                            <p style="">Don't have an account yet?</p>
                                            <a style="" href="#email_register" onclick="dismiss_Join();"><b>Join Now</b></a>
                                        </div>
                                    </div>
                                    <div class="panelcircle" style="position: absolute; right: 47%; top: 38%;"><b>OR</b></div>

                                    <?PHP
                                    $model = new LoginForm;
                                    ?>
                                    <div class="modal-bottombox" style="background-color: white;float: left; width: 350px; height: 325px; margin: -40px 0px 0px -15px; padding: 29px 40px 25px 40px; border-radius: 6px 0 0 6px;">
                                        <img class="logonew"  src="../../../images/trendslogo(black).png"></img>
                                        <div style="margin:12px 0; font-size: 20px; color: #0088cc;">
                                            <p style="text-align:center; "><b>Login to Trends</b></p>
                                        </div>


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
                                            <div class="row rememberMe" style="margin-top: 5px; ">
                                                <?php echo $form->checkBox($model, 'rememberMe'); ?>
                                                <?php echo $form->label($model, 'keep me signed in'); ?>
                                                <?php echo $form->error($model, 'rememberMe'); ?>
                                            </div>


                                            <div style="float: right; position: relative; top: -18px;">
                                                <a href="#" role="button" class="btn" onclick="send();">Login</a>
                                            </div>

                                            <?php $this->endWidget(); ?>

                                        </div><!-- form -->

                                        <div style="font-size: 12px; width: 100%; margin-left: 30px; position: absolute;">
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
                                </div>
                            </div>




                            <!--EMIAL_REGISTER-->
                            <!-- Modal -->




                            <div id="email_register" class="register_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                                <div class="modal-body">

                                    <div class="modal-topbox" style="background-color: rgb(242,240,240); padding: 5px 0px 20px 0px; margin: -15px -15px 0px -15px;  ">
                                        <div style=" font-size: 22px; text-align: center;"> 
                                            <p><b>Sign Up for your Free Account!</b></p> 
                                        </div>

                                        <div id="dd2" class="wrapper-dropdown-3" tabindex="1" style=" width:270px; height:45px; position: relative; left: 23%; top:3px;">

                                            <div>
                                                <div id="dropdown-cover" class="dropdown_test_2"  style="float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -11px; padding-left: 35px; border-radius: 3px 0 0 3px;">
                                                    <div class="login-icon">
                                                        <i class="icon-facebook icon-large">
                                                        </i>
                                                    </div>   
                                                </div>
                                                <div  id="dropdown-cover" onclick="Facebook();" style="float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -9.5px; border-radius: 0 3px 3px 0;">
                                                    <div class="sign-in-with" >Sign In with Facebook</div>
                                                </div>
                                            </div>
                                            <ul class="dropdown"  style="width:270px">
                                                <li  onclick="Twitter();" ><a style="color:rgb(0,172,237)" href="#"><i class="icon-twitter icon-large"></i>Sign in with Twitter</a></li>
                                                <li  onclick="Google();" ><a style="color:rgb(211,72,54)" href="#"><i class="icon-google-plus icon-large"></i>Sign in with Google+</a></li>
                                                <li  onclick="Yahoo();" ><a style="color:rgb(123,0,153)" href="#"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>
                                                <li  onclick="Sina();" ><a style="color:rgb(245,213,0)" href="#"><img src='../../../images/sina.png' style='width: auto; height: 35px; float:left;margin: -3% -3% 0 6%;'>Sign in with Sina</a></li>
                                                <li  onclick="QQ();" ><a style="color:rgb(62,59,62)" href="#"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>
                                                <li  onclick="dismiss_modal_test();" ><a style="color:rgb(0,153,68)" href="#myModal"><i class="icon-envelope-alt icon-large"></i>Sign in with Email</a></li>
                                            </ul>
                                        </div>
                                        <div style="font-size: 12px; text-align: center;">
                                            <p>Don't worry , we'll never post without your permission.</p>
                                        </div>

                                    </div>

                                    <div class="panelcircle" style="position: absolute; right: 45%; top: 24%;"><b>OR</b></div>




                                    <div class="modal-bottombox" style="background-color: white;  height: 355px; width: 500px;margin: 0px 15px 0px -15px; padding: 35px 70px 30px 70px; border-radius: 0 0 6px 6px;">

                                        <div style="font-size: 14px; text-align:center ;padding: 0 0 5px 0;">
                                            <p><b>Sign Up with your Email Address:</b></p>
                                        </div>

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

                                            <div style="font-size: 12px; text-align: center; padding-top: 5px; padding-bottom: 10px;">
                                                <p>By clicking Sign Up you indicate that you have read and agreed to the <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy </a>.</p>
                                            </div>

                                            <div class="row buttons" style="text-align: center; ">

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


                                    </div>

                                </div>

                            </div>

                        </div>


                        <?php $this->endWidget(); ?>


                        <?php
                        if (Yii::app()->user->isGuest) {
                            $this->widget('bootstrap.widgets.TbNavbar', array(
                                'brand' => '<img class="logonew" style="position: relative; top: 0; margin:0;"  src ="../../../images/landing-trends.png"/>',
                                //    'collapse' => 'true',
                                'items' => array(
                                    '<p class="titleText"> Global  recommendations from </p>',
                                    '<div id="dd4" class="wrapper-dropdown-3" tabindex="1" style="top: -33px; background:none;border-radius: none;border: none;color:white;box-shadow: none;">
                                                <div class="SpanFontSetting dropdown_test_4" style="margin-right: 40px;" >Region</div>
                                                <ul class="dropdown" style="background: none repeat scroll 0% 0% rgb(45, 45, 45);border: 1px solid rgba(0, 0, 0, 0.17);">
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>Australia</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>New Zealand</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>India</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>China</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>America</a></li>
                                                </ul>
                                            </div>',
                                    '<div class="smallIcon">
                                        <a class="icon_a" href="#"><i class="icon-th icon-large" ></i></a>
                                            <a class="icon_b" href="#"><i class="icon-list-ul  icon-large" ></i></a>
                                                <a href="#" class="icon_c" ><i class="icon-search icon-large" ></i></a>
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
                                'brand' => '<img class="logonew" style="position: relative; top: 0; margin:0; "  src ="../../../images/landing-trends.png"/>',
                                'items' => array(
                                    '<p class="titleText">  Global  recommendations from </p>',
                                    '<div id="dd4" class="wrapper-dropdown-3" tabindex="1" style="top: -33px; background:none;border-radius: none;border: none;color:white;box-shadow: none;">
                                                <div class="SpanFontSetting dropdown_test_4" style="margin-right: 40px;">Region</div>
                                                <ul class="dropdown" style="background: none repeat scroll 0% 0% rgb(45, 45, 45);border: 1px solid rgba(0, 0, 0, 0.17);">
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>Australia</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>New Zealand</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>India</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>China</a></li>
                                                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>America</a></li>
                                                </ul>
                                            </div>',
                                    '<div style="position:relative; left:15%;"> 
                                <img id = "asdas" class = "loging_image" style="border-radius:3px; height:29px; " src = "' . $user_img . '"/>
                                    <p class = "loging_text">Hi!! &nbsp ' . $name . ' </p>
                                    </div>',
                                    '<div class="smallIcon">
                                        <a class="icon_a" href="#"><i class="icon-th icon-large" ></i></a>
                                            <a class="icon_b" href="#")><i class="icon-list-ul  icon-large" ></i></a>
                                                <a class="icon_c" onclick="show_search_bar();"><i class="icon-search icon-large" ></i></a>
                                                </div>',
                                    array(
                                        'class' => 'bootstrap.widgets.TbMenu',
                                        'htmlOptions' => array('class' => 'loging_table moveTop'),
                                        'items' => array(
                                            array('label' => '', 'url' => '#', 'items' => array(
                                                    array('label' => 'Ideabook', 'url' => array('/site/index')),
                                                    array('label' => 'Find Friends', 'url' => array('/site/index')),
                                                    array('label' => 'Settings', 'url' => array('/site/index')),
                                                    array('label' => 'Help Center', 'url' => array('/site/index')),
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
                        <div class="footer_contentbox">
                            <div class="footer-text-left">
                                <ul>
                                    <li><a href="#">About Trends</a></li>
                                    <li><a href="#">In the News</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Copyright</a></li> 
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Jobs</a></li>
                                </ul>
                            </div>
                            <div class="footer-text-left">
                                <ul>
                                    <li><a href="#">Buttons and Badges</a></li>
                                    <li><a href="#">Mobile Apps</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Advertise</a></li>
                                </ul>
                            </div>

                            <div style="text-align: center; padding: 20px 0; margin: 0 90px 0 100px; font-size: 13px; width: 160px; float: left;">
                                <img class="logonew" style="height: auto; position: relative; top: 0; margin:0;"  src ="../../../images/landing-trends.png"/>
                                <div style="padding-top: 15px;">
                                    <i class="socon icon-facebook-sign icon-3x"></i>
                                    <i class="socon icon-twitter-sign icon-3x" style=" padding: 0 27px;"></i>
                                    <i class="socon icon-rss icon-3x"></i>
                                </div>
                            </div>
                            <div class="footer-text-right">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Photos</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Find Local Pros</a></li>
                                    <li><a href="#">Ideabooks</a></li>
                                    <li><a href="#">Discussions</a></li>
                                </ul>
                            </div>
                            <div class="footer-text-right">
                                <ul>
                                    <li><a href="#">Your Trends</a></li>
                                    <li><a href="#">Your Ideabookds</a></li>
                                    <li><a href="#">Your Photos</a></li>
                                    <li><a href="#">Recommended</a></li>
                                    <li><a href="#">Photos</a></li>
                                    <li><a href="#">Edit Profile</a></li>
                                    <li><a href="#">Change Password</a></li>
                                    <li><a href="#">Sign Out</a></li>
                                </ul>
                            </div>

                        </div>
                    </div><!-- footer -->







                </body>
                </html>
