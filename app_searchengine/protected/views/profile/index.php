<?php
/* @var $this ProfileController */
/* @var $form CActiveForm  */

$this->pageTitle = Yii::app()->name . ' - Profile';
$this->breadcrumbs = array(
    'Profile',
);
?>

<body id="profilepage">
    <div style="background: #fff url('../images/texture.png') repeat; top: 0; left: 0;z-index: -1;width: 100%;height: auto; ">
        <div style="width: 100%; height: 500px; overflow: hidden;"> 
            <img src="../images/kichen_i.jpg" style="width: 100%; height:auto;">
        </div>
        <div class="profilewrapper" style="position: relative; width: 980px; height: auto; margin: auto; top: -200px; background: white; box-shadow: 4px 4px 13px; border-radius: 3px 3px 0 0;">


            <div class="profileaside" style="background-color: rgb(242,240,240); width: 300px; height: auto; padding: 10px; border-radius:3px 0 0 0;">
                <div class="profileaside_content" style="margin:20px;">

                    <div class="aside-profilepic" style="padding:5px; border-bottom: 1px solid #ccc;">
                        <img src="../images/profilepic.jpg" style="width: 200px; height:auto; display: block;margin: 10px auto; border:3px solid white;width: 200px; height:auto; display: block;margin: 20px auto; border:5px solid white;"> 
                        <a href="#question_modal" role="button" class="btn" data-toggle="modal" style="margin:10px auto;display: block;width: 150px;position: relative;">Follow</a>
                        <div style=" margin: 30px auto 20px;">
                            <a href="#"> <k class="icon-heart-empty icon-large"></k>23</a>
                            <a href="#"><k class="icon-facebook icon-large"></k></a>
                            <a href="#"><k class="icon-twitter icon-large"></k></a>
                            <a href="#"><k class="icon-google-plus icon-large"></k></a>
                        </div>
                    </div>

                    <div class="aside-contact" style="padding: 5px; border-bottom: 1px solid #ccc; border-top: 1px solid #fff;">
                        <table id="aside_contact" >
                            <tr>
                                <th>Contact:</th>
                                <th>Molly Brandenburg</th>
                            </tr>
                            <tr>
                                <th>Type:</th>
                                <th><a href="#">Interior designer</a></th>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <th>5B Volkner Place, Albany, <a href="#">Auckland</a></th>
                            </tr>
                            <tr>
                                <th>Phone:</th>
                                <th>(09) 4471400</th>
                            </tr>
                            <tr>
                                <th>Website:</th>
                                <th><a href="http://ikitchen.y8.co.nz">ikitchen.y8.co.nz</a></th>
                            </tr>

                        </table> 
                    </div>

                    <div class="follow" style="padding: 5px; border-bottom: 1px solid #ccc; border-top: 1px solid #fff;">
                        <div class="following" style="padding:5px;">
                            <h4><b>Following(<a href="#">43</a>)</b></h4>
                            <div class="folling_pic">
                               <a href="#"> <img src="../images/profilepic1.jpg"></a>
                               <a href="#"> <img src="../images/profilepic2.jpg"></a>
                                <a href="#"><img src="../images/profilepic3.jpg"></a>
                                <a href="#"><img src="../images/profilepic4.jpg"></a>
                               <a href="#"> <img src="../images/profilepic5.jpg"></a>
                               <a href="#"> <img src="../images/profilepic6.jpg"></a>
                               <a href="#"> <img src="../images/profilepic7.jpg"></a>
                              <a href="#">  <img src="../images/profilepic8.jpg"></a>
                            </div>
                        </div>
                        <div class="follower" style="padding: 5px;margin-bottom: 10px;">
                            <h4><b>Follower(<a href="#">134</a>)</b></h4>
                            <div class="folling_pic">
                                <a href="#"><img src="../images/profilepic8.jpg"></a>
                               <a href="#"> <img src="../images/profilepic7.jpg"></a>
                                <a href="#"><img src="../images/profilepic6.jpg"></a>
                                <a href="#"><img src="../images/profilepic5.jpg"></a>
                                <a href="#"><img src="../images/profilepic4.jpg"></a>
                                <a href="#"><img src="../images/profilepic3.jpg"></a>
                               <a href="#"> <img src="../images/profilepic2.jpg"></a>
                               <a href="#"> <img src="../images/profilepic1.jpg"></a>
                            </div>
                        </div>

                    </div>





                </div>
            </div>
            <div class="profilemain" style="float: left; width: 650px; word-wrap: break-word; padding: 40px 0 0 0;">

            </div>

        </div>

        <div class="profilebg"></div>
    </div>
</body>