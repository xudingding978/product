<?php
if (Yii::app()->user->isGuest) {
    $userProfile = UserProfile::model()->findByAttributes(array('USER_REC_ID' => Yii::app()->user->id));
    if ($userProfile !== null) {
        $name = $userProfile->DISPLAY_NAME;
        $user_img = $userProfile->PHOTO_URL;
    };
}
?>
<!-- Top Navigation Menubar -->
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
                <div class="brand">
                    <a href="#">
                        <img class="logonew" style="position: relative; top: 0; margin:0;" src="../../../images/landing-trends.png">
                    </a>
                </div>
                
            <div id="title" class="title-strapline" style="width: 100px">
                <p class="titleText">Global  recommendations from </p>
            </div>
            <div id="dd4" class="wrapper-dropdown-3" tabindex="1" style="top: -33px; background:none;border-radius: none;border: none;color:white;box-shadow: none;">
                <div class="SpanFontSetting dropdown_test_4" style="margin-right: 40px;">Region</div>
                <ul class="dropdown" style="background: none repeat scroll 0% 0% rgb(45, 45, 45);border: 1px solid rgba(0, 0, 0, 0.17);">
                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>Australia</a></li>
                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>New Zealand</a></li>
                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>India</a></li>
                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>China</a></li>
                    <li><a href="#" style="margin:0; border-radius:0px;color: white;border-bottom: 1px solid black;padding: 10px;border-top: 1px solid rgb(66, 66, 66);box-shadow: none;"><i></i>America</a></li>
                </ul>
            </div>
            <div class="smallIcon">
                <a class="icon_a" href="#"><i class="icon-th icon-large"></i></a>
                <a class="icon_b" href="#"><i class="icon-list-ul  icon-large"></i></a>
                <a href="#" class="icon_c"><i class="icon-search icon-large"></i></a>
            </div>
            <!-- show if not logged into platform-->
            <?php if (Yii::app()->user->isGuest) { ?>
                <div id="guest-dd-menu">
                    <ul class="login_guest nav" data-toggle="modal" data-target="#myModal" >
                        <li><a href="/site/#/">Login Guest</a></li>
                    </ul>
                </div>
                <!-- user is logged in -->
            <?php } else { ?>
                <div id="user-header-menu">
                    <ul class="loging_table moveTop nav" data-toggle="modal" data-target="#myModal" id="myModal">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#"> 
                                <span class="caret"></span>
                            </a>
                            <ul id="user-dd-menu" class="dropdown-menu">
                                <li class="active">
                                    <a tabindex="-1" href="#">Ideabook</a>
                                </li>
                                <li class="active">
                                    <a tabindex="-1" href="#">Find Friends</a>
                                </li>
                                <li class="active">
                                    <a tabindex="-1" href="#">Settings</a>
                                </li>
                                <li class="active">
                                    <a tabindex="-1" href="#">Help Center</a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="#">Logout (<?php echo Yii::app()->user->name; ?>)</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            <?php }; ?>
        </div>
    </div>
</div>
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

   $(function()) {

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

    };
</script>