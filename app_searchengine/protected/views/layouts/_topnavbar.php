<!-- Top Navigation Menubar -->
<?php
if (Yii::app()->user->isGuest) {
    $this->widget('bootstrap.widgets.TbNavbar', array(
        'brand' => '<img class="logonew" style="position: relative; top: 0; margin:0;"  src ="../../../images/landing-trends.png"/>',
        //    'collapse' => 'true',
        'items' => array(
            '<p class="titleText">Global  recommendations from </p>',
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
            '<p class="titleText">Global  recommendations from </p>',
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

