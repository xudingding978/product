


<div id="myModal" class="modal hide fade" aria-hidden="true">
    <div class="modal-header" style="background-color: rgb(242,240,240); padding:12px 0px; border-radius: 6px 6px 0 0;">
        <a class="close" style="margin:-11px 8px;" onclick="reset_login();" data-dismiss="modal" x>x</a>
    </div>
    <div class="modal-body" style="margin:-15px;" style='word-wrap:break-word'>
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




        <!--Email_REGISTER-->
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

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
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

</script>
