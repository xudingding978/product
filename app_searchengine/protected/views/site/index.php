<?php
/* @var $this SiteController */

$this->pageTitle = Yii::app()->name;
?>

<?php
if (Yii::app()->user->isGuest) {
    $this->widget('bootstrap.widgets.TbCarousel', array(
        'items' => array(
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_a.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_b.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_c.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_d.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_e.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_f.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_g.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_h.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_i.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_j.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_c.jpg'),
            array('image' => 'https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_k.jpg'),
        ),
    ));
    ?>


    <div class="tile_img" >
        <div id="dd3" class="wrapper-dropdown-3" tabindex="1" style="margin-left:73%; width:270px; height:45px;">

            <div>
                <div id="dropdown-cover" style="float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -10.5px; padding-left: 35px;">
                    <div class="login-icon">
                        <i class="icon-facebook icon-large">
                        </i>
                    </div>   
                </div>
                <div  id="dropdown-cover" onclick="Facebook();" style="float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -10px;">
                    <div class="sign-in-with" >Sign In with Facebook</div>
                </div>
            </div>
            <ul class="dropdown" style="width:270px">
                <li  onclick="Twitter();" ><a style="color:rgb(0,172,237)" href="#"><i class="icon-twitter icon-large"></i>Sign in with Twitter</a></li>
                <li  onclick="Google();" ><a style="color:rgb(211,72,54)" href="#"><i class="icon-google-plus icon-large"></i>Sign in with Google+</a></li>
                <li  onclick="Yahoo();" ><a style="color:rgb(123,0,153)" href="#"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>
                <li  onclick="Sina();" ><a style="color:rgb(245,213,0)" href="#"><img src='../../../images/sina.png' style='width: auto; height: 35px; float:left;margin: -3% -3% 0 6%;'>Sign in with Sina</a></li>
                <li  onclick="QQ();" ><a style="color:rgb(62,59,62)" href="#"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>
                <li  onclick="dismiss_modal_test();" ><a style="color:rgb(0,153,68)" href="#myModal"><i class="icon-envelope-alt icon-large"></i>Sign in with Email</a></li>
            </ul>
        </div>
        <div class="title_text" >
            <h1 >COLLECT YOUR ONLINE RESOURCE FOR KITCHENS,</h1>
            <h1 >PRODUCTS, SERVICES & IDEAS</h1>
            <p >Hundreds of videos, thousands of articles and tens of thousands of high quality images</p>
            <p >from around the world showcasing: Architecture, Kitchen Design, Bathroom Design,</p>
            <p >Interiors, Landscape Design and Commercial Design.</p>
        </div>
    </div>



    <?php
} else {
    ?>

    <div id="discovery_search_bar_wrapper">
        <div class="select_container_left">
            <ul class="discovery_select_left">
                <li>
                    <a href="#" >PRODUCTS</a>
                </li>
                <li>
                    <a href="#" >SERVICES</a>
                </li>
                <li>
                    <a href="#" >BRANDS</a>
                </li>
                <li>
                    <a href="#" >SUPPLIERS</a>
                </li>
            </ul>
        </div>

        <div id="discovery_search_bar">

            <input id="search_key" class="search_input" placeholder="All region in New Zealand" name="search_key" type="text"  />
            <input id="search_business" class="search_business" placeholder="Search by Business and keyword" type="text" />
            <a class="search_button" href="#"><i class="icon-book" ></i></a>
            <a class="view_control_list" href='#'><i class="icon-eye-open" ></i></a>
            <a class="view_control_gal"  href='#")'><i class="icon-film" ></i></a>
            <a  class="cancleIcon"  href="#" ><i class="icon-remove-sign" ></i></a>

        </div>
    </div>

<?PHP } ?>

<script>
                    var imgHeight;
                    var imgWidth;
                    var image_src;
                    var des_src;
                    var des_src_array = new Array();
                    function Set()
                    {
                        $.ajax({
                            type: 'GET',
                            url: '<?php echo CController::createUrl('Site/GetDataFromItemtable'); ?>',
                            dataType: 'json',
                            success: function(data) {
                                //     alert(data);
                                getValue(data);
                            }
                        });
                    }

                    function loading()
                    {
                        document.getElementById('display_loading').style.display = 'block';
                        document.getElementById('loading_img').style.display = 'none';
                        imgHeight = this.height;
                        imgWidth = this.width;
                        console.log("this.height : " + this.height + " " + imgHeight + " " + image_src);
<?PHP
$dependency = new CDbCacheDependency('SELECT * FROM `tpl_user_profile` `t` WHERE `t`.`USER_REC_ID`=93 LIMIT 1');
$userProfile = UserProfile::model()->cache(1000, $dependency)->findByAttributes(array('USER_REC_ID' => 93));
?>



                        var image_height = this.height / this.width * 180;
                        var element_height = image_height + 160;
//            console.log(key + ' ' + img.height);
//            console.log(element_height);


                        var $newItems = $('<div class="element alkali metal   isotope-item"  style="height:' + element_height + 'px"> \n\
            <div id="image_container"  style="left: 15px;  top: 30px; width: 180px;height:' + image_height + 'px"> \n\
                    <a href="#item_detail"  data-toggle="modal" onclick="clear_modal();   call_items(' + this.id + '); generate_slide_img(' + this.id + '); switch_loading_modal();" ><img src=' + this.src + ' ></a>\n\
            </div>\n\
            <p style="left: 15px;  bottom: 100px;">' + this.description + '</p>\n\
            <a href="#" style="left: 15px;  bottom: 78px; width:55px;white-space: nowrap;"><k class="icon-heart-empty"></k> <p style="left: 20px; ">12</p></a>\n\
            <a href="#" style="left: 75px;  bottom: 78px;width:55px;white-space: nowrap;"><k class="icon-comment-alt"></k> <p style="left: 20px; ">6</p></a>\n\
            <a href="#" style="left: 135px;  bottom: 78px;width:55px;white-space: nowrap;"><k class="icon-save"></k><p style="left: 20px; ">66</p></a>\n\
                <div id="comments" class="comments">\n\
                    <img style="width:35px; bottom:5px; left:5px;" src="<?PHP echo $userProfile->PHOTO_URL; ?>" />\n\
                    <p style="left: 50px;  bottom: 20px;white-space: nowrap;">by  <a href="#" > Trends ideas</a></p>\n\
                </div>\n\
            </div>');
                        $('#container').append($newItems).isotope('insert', $newItems);
                        return true;
                    }
                    function switch_loading()
                    {
                        document.getElementById('display_loading').style.display = 'none';
                        document.getElementById('loading_img').style.display = 'block';
                    }


                    function switch_loading_modal()
                    {
                        document.getElementById("loading").className = "loading-visible";
                    }
                    function getValue(data) {



                        for (var key in data) {
                            if (data.hasOwnProperty(key)) {
                                var img = new Image();
                                image_src = data[key]['IMAGE_URL'];
                                des_src = data[key]['DESCRIPTION'];
                                client_id = data[key]['CLIENT_REC_ID'];

                                img.src = image_src;
                                img.description = des_src;
                                img.user_photo = "";
                                img.id = client_id;

                                img.onload = loading;
                                //            loading();


                                console.log("imgHeight : " + imgHeight + " " + "this.height : " + this.height + " " + image_src);
                            }

                        }
                    }

                    function clear_modal() {
                        $('#modal_insert .item:last-child').addClass('.active');

                        $('div').remove('#myCarousel');


                    }




                    $(document).ready(function() {
                        Set();

                        $(window).scroll(function() {

                            var oldLoad = function() {
                                document.getElementById("loading").className = "loading-visible";
                            };
                            var hideDiv = function() {
                                document.getElementById("loading").className = "loading-invisible";
                            };
                            if ($(this).scrollTop() >= ($(document).height() - $(window).height() - 250)) {

                            }
                        });
                    });

                    function call_items(id)
                    {
                        $.ajax({
                            type: 'GET',
                            url: '<?php echo CController::createUrl('Site/GetDataFromItemtable'); ?>',
                            dataType: 'json',
                            success: function(json_data) {
                                popup_items(json_data, id);
                            }
                        });
                    }
                    function popup_items(json_data, id) {


                        var $slide_frame = $('<div id="myCarousel" class="carousel slide" style="width:450px">\n\
                            <div id="modal_insert" class="carousel-inner" style="top:0px;"></div>\n\
                            <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>\n\
                            <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>\n\
                        </div>');
                        $('#img_slide').append($slide_frame);

                        var url_ary = new Array();
                        var img_name_ary = new Array();
                        var number = 0;
                        for (var ary_key in json_data) {
                            if (json_data.hasOwnProperty(ary_key)) {
                                console.log(json_data[ary_key]);
                                if (json_data[ary_key]['CLIENT_REC_ID'] == id) {

                                    url_ary[number] = json_data[ary_key]['IMAGE_URL'];
                                    $("#item_detail_modal").data("url", url_ary[number]);


                                    img_name_ary[number] = "pic" + number;
                                    var $album_img = $('<div class=" item"><img src="' + $("#item_detail_modal").data("url") + '" id="' + number + '" /></div>');
                                    $('#modal_insert').append($album_img);
                                    number = number + 1;
                                }
                            }
                        }
                        $(".album_status_bar .total_img").text("/" + number);
                        $("#modal_insert .item:first-child").addClass("active");
                        document.getElementById("loading").className = "loading-invisible";
                    }


                    function grab_slide_img()
                    {
                        $.ajax({
                            type: 'GET',
                            url: '<?php echo CController::createUrl('Site/GetDataFromItemtable'); ?>',
                            dataType: 'json',
                            success: function(json_data) {

                                slide_img_items(json_data);
                            }
                        });
                    }
                    function slide_img_items(json_data) {

                        var $slider_photo = $('<div class="slider_photo"></div>');

                        $('#new_slide').append($slider_photo);
                        var client_check;
                        var client_id_ary = [];
                        for (var ary_key in json_data) {

                            if (json_data.hasOwnProperty(ary_key)) {
                                client_check = true;
                                if (ary_key >= 1) {

                                    for (var i = 0; i <= ary_key; i++) {

                                        if (client_id_ary[i] == json_data[ary_key]['CLIENT_REC_ID']) {

                                            client_check = false;

                                        }
                                    }
                                    if (client_check) {
                                        client_id_ary[ary_key] = json_data[ary_key]['CLIENT_REC_ID'];

                                    }

                                } else {
                                    client_id_ary[ary_key] = json_data[ary_key]['CLIENT_REC_ID'];
                                }

                                if (client_check) {
                                    var $slide_img = $('<div class="slide" style="cursor:pointer;" onclick="reload_new_client_albem(' + json_data[ary_key]['CLIENT_REC_ID'] + ');  switch_loading_modal();"><img  src=' + json_data[ary_key]['IMAGE_URL'] + '></div>');
                                    $('.slider_photo').append($slide_img);
                                }
                            }

                        }
                        $('#new_slide .slider_photo').bxSlider({
                            slideWidth: 95,
                            minSlides: 1,
                            maxSlides: 4,
                            slideMargin: 10,
                            infiniteLoop: false,
                            hideControlOnEnd: true,
                            mode: 'horizontal'

                        });


                        // remove slide_img bullet
                        $('div').remove('.bx-pager');
                        //  alert("test2");
                    }

                    function reload_new_client_albem(id) {

                        //     alert("test " + id);
                        clear_modal();
                        call_items(id);



                    }
                    function enable_qustion_modal() {
                        $('#question_modal').attr('aria-hidden', 'false');
                        $('#question_modal').attr("style", "display:block");


//                        $('#img_slide #myCarousel').bind('slid', function() {
//                            alert("Slide Event");
//                        });
                    }

</script>




<?php
$user_info = UserProfile::model()->findByAttributes(array('USER_REC_ID' => 84));
?>




<div id="" class="group">
    <div class="group"> 
        <div id='categories'>

            <div id="container" class="variable-sizes clearfix isotope">
                <div id="question_modal" class=" question_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                    <div class="modal-body">


                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <p>This is the area to raise your question!!!!!!!!</p>


                        <textarea rows="4" placeholder="Pros are encouraged but not obligated to answer qusetions. Polite questions are more likely to receive responses."></textarea>
                        <button class="btn btn-small" type="button">Submit</button>
                    </div>

                </div>

                <!-- Modal -->
                <div id="item_detail" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="left:35%;top:40%;">

                    <div id="item_detail_modal"  class="modal-body" style="padding-left: 0px;padding-top: 0px;padding-bottom: 0px;">
                        <div id="img_slide" style="float:left;">


                            <!--                            <div id="myCarousel" class="carousel slide" style="width:450px">
                            
                                                             Carousel items 
                                                            <div id="modal_insert" class="carousel-inner" style="top:0px;">
                            
                            
                                                            </div>
                                                             Carousel nav 
                                                            <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                                                            <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
                                                        </div>-->




                            <!--       <div style="position:absolute;bottom:0px;left:0px;height: 50px ;background-color: rgba(255, 255, 255, 0.8);">
                                   </div>
                            -->

                        </div>
                        <div class="album_status_bar">
                            <div style="margin-left: 4%; margin-top: 3%;">
                                <a href="#"> <k class="icon-heart-empty icon-large"></k>23</a>
                                <a href="#"><k class="icon-comment-alt icon-large"></k>2</a>
                                <a href="#"><k class="icon-save icon-large"></k>3</a>

                            </div>
                            <p class="current_img" style="margin: -20px 0px 0px 85%; font-size: 25px;">3</p>
                            <p class="total_img"  style="margin: -20px 0px 0px 88%; font-size: 25px;"></p>
                        </div>
                        <div class="question_bar">
                            <a href="#question_modal" role="button" class="btn" data-toggle="modal" style="margin:10px;float:left;"><i class="icon-question-sign"></i> Ask a Question</a>
                            <div style="margin-left: 80%; margin-top: 3%;">
                                <a href="#"> <i class="icon-rss icon-large"></i></a>
                                <a href="#"><i class="icon-print icon-large"></i></a>
                                <a href="#"><i class="icon-facebook icon-large"></i></a>
                                <a href="#"><i class="icon-icon-print icon-large"></i></a>
                                <a href="#"><i class="icon-google-plus icon-large"></i></a>
                            </div>
                        </div>

                        <div  style="float:left ;position:relative;">
                            <a class="close"  data-dismiss="modal" x>x</a>

                            <div style="width:440px;overflow-y:scroll;margin-top:20px ;">

                                <div style=" text-align: center;background-color: #cbdccc;margin-top:-20px;padding-top:20px;padding-bottom:10px;">
                                    <h3>Want a Great Bedroom Design? Start With a Stunning Headboard!</h3>
                                    <p>A beautiful slab of wood becomes a unique headboard,
                                        setting the stage for a naturally elegant and simple bedroom design.</p>
                                </div>
                                <div  style=" text-align: center; margin-top: 20px;">

                                    <div >
                                        <a href="#"><img src="<?PHP echo $user_info->PHOTO_URL ?>"/></a>
                                    </div>
                                    <a href="#" style='margin-top:25%;'><?PHP echo $user_info->FIRST_NAME . " " . $user_info->LAST_NAME ?></a>
                                    <p><?PHP echo $user_info->DESCRIPTION ?></p>
                                </div>
                                <div>
                                    <button class="btn btn-large" style='margin-left:23%; padding-left:75px; padding-right: 75px;'  >Contact me</button>
                                </div>  

                                <div id="slide_img" style=" background-color: #cbdccc; margin-top: 20px;height:120px">
                                    <p style="margin-left:30px;padding-top: 8px;">Other Photos in <a href='#'>Bedroom</a> (547 photos):</p>
                                    <div id="new_slide" style="margin-left:7px;">




                                        <!--                                      <div class="slider_photo" >
                                                                                <div class="slide"><img onclick="" src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_a.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_b.jpg"></div>-->
                                     <!--                                            <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_c.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_d.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_e.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_f.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_g.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_h.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_i.jpg"></div>
                                                                                 <div class="slide"><img src="https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_j.jpg"></div>
                                                                             </div>-->
                                    </div>
                                </div>
                                <script>
                                    function generate_slide_img(id) {

                                        if ($('div').hasClass('bx-wrapper')) {

                                        } else {

                                            grab_slide_img();

                                        }
                                    }
                                </script> 
                                <div>

                                    <?php
                                    $image_example = json_encode(array('questions' => array(
                                            'question_text' => 'Where is the headboard from?',
                                            'question_comment_count' => 5,
                                            'question_likes' => array(
                                                'user_id' => 1,
                                                'user_comment' => 'Urban Hardwoods makes headboards like this. Here\'s one that looks very similar to the one above'
                                            )
                                    )));
                                    //                       echo var_dump($image_example, true);
                                    //                       $decoded = json_decode($image_example);
                                    //                     echo var_export($decoded);
                                    //                     print_r  $decoded;
                                    ?>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
        <div class='place_holder'></div>
        <div id='display_loading' class='display_btn' style="display: none">
            <?php
            $this->widget('bootstrap.widgets.TbButton', array(
                'label' => 'DISCOVER MORE',
                'type' => 'primary', // null, 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
                'size' => 'large', // null, 'large', 'small' or 'mini'
                'htmlOptions' => array(
                    'class' => 'pull-right',
                    'onclick' => "Set(); switch_loading();"
                ),
            ));
            ?>


        </div>
        <div id='loading_img'  class='loading_img' >
            <img class='loading_img_position' src="../../../images/loader.gif" />
        </div>
    </div>
</div>

</div>

<div id="loading" class="loading-invisible">
    <p> <img src="../../../images/loader.gif" /></p>
</div>
<div id="search-loading" class="search-loading-invisible" onclick='dismiss_search();'>
    <p></p>
</div>
<?PHP
if (Yii::app()->user->isGuest) {
    ?>



    <?php
}
?>
<div class="main-nav" id="main-nav" >

    <?php
    if (Yii::app()->user->isGuest) {
        ?>
        <a href="#"><i class="icon-user icon-2x"></i></a>
        <?php
    } else {
        $userProfile = UserProfile::model()->findByAttributes(array('USER_REC_ID' => Yii::app()->user->id));
        ?>
        <a href="#"><img src="<?PHP echo $userProfile->PHOTO_URL ?>"/></a>

        <?php
    }
    ?>
    <?php
    $this->widget('bootstrap.widgets.TbMenu', array(
        'htmlOptions' => array(
            'onclick' => 'testing2();',
            'class' => 'dropdown_left',
        ),
        'items' => array(
            array('icon' => 'icon-eye-open icon-2x', 'url' => '#', 'htmlOptions' => array('class' => 'dropdown_123',), 'items' => array(
                    array('label' => 'All Room &amp; Stlyes', 'url' => array('#')),
                    array('label' => 'Kitchen', 'url' => array('/site/index')),
                    array('label' => 'Bath', 'url' => array('/site/index')),
                    array('label' => 'Bedroom', 'items' => array(
                            array('label' => 'Bedroom Photos &gt;'),
                            array('label' => 'Browse all Bedroom Photos', 'url' => '#'),
                            array('label' => 'Bedroom Products'),
                            array('label' => 'Beds and Headboards', 'url' => '#'),
                            array('label' => 'Bedroom Benchess', 'url' => '#'),
                            array('label' => 'Dressers Chests and Bedroom Armories', 'url' => '#'),
                            array('label' => 'Makeup Mirrors', 'url' => '#'),
                            array('label' => 'Nightstands and Bedside Tables', 'url' => '#'),
                            array('label' => 'Sofa Beds', 'url' => '#'),
                            array('label' => 'Bedding', 'url' => '#'),
                            array('label' => 'Upholstery Fabric', 'url' => '#'),
                        ),),
                    array('label' => 'Living', 'url' => array('/site/index')),
                    array('label' => 'Dinging', 'url' => array('/site/index')),
                    array('label' => 'Outdoor', 'url' => array('/site/index')),
                    array('label' => 'Kids', 'url' => array('/site/index')),
                    array('label' => 'Home Office', 'url' => array('/site/index')),
                    array('label' => 'Storage & Closets', 'url' => array('/site/index')),
                    array('label' => 'Exterior', 'url' => array('/site/index')),
                    array('label' => 'More Rooms', 'url' => array('/site/index')),
                    array('label' => 'Lighting', 'url' => array('/site/index')),
                    array('label' => 'Accessories & Decor', 'url' => array('/site/index')),
                    array('label' => 'Windows & Doors', 'tabindex' => '-1', 'items' => array(
                            array('label' => 'Action1', 'url' => '#'),
                            array('label' => 'Action2', 'url' => '#'),
                            array('label' => 'Action3', 'url' => '#'),
                            array('label' => 'Action4', 'url' => '#'),
                            array('label' => 'Action5', 'url' => '#'),
                        ),
                    ),
                )
            ),
        )
    ));
    ?> 


    <a href="#"><i class="icon-folder-open-alt icon-2x"></i></a>
    <a href="#"><i class="icon-camera-retro icon-2x"></i></a>
    <a href="#"><i class="icon-desktop icon-2x"></i></a>
    <a href="#"><i class="icon-umbrella icon-2x"></i></a>
    <a href="#"><i class="icon-envelope icon-2x"></i></a>
</div>

<div class="page-wrap">

    <header class="main-header">
        <a href="#" class="open-menu">
            <i class="icon-circle-arrow-right"></i>
        </a>



    </header>



</div>



<script type="text/javascript">
                                    document.getElementById("loading").className = "loading-visible";
                                    var hideDiv = function() {
                                        document.getElementById("loading").className = "loading-invisible";
                                    };
                                    var oldLoad = window.onload;
                                    var newLoad = oldLoad ? function() {
                                        hideDiv.call(this);
                                        oldLoad.call(this);
                                    } : hideDiv;
                                    window.onload = newLoad;</script>

<script type="text/javascript" language="JavaScript" src="../../../js/search.js"></script>
<script type="text/javascript">
    var hasBeenClicked = false;
    function testing2() {

        $('.dropdown_left >li:first-child>ul ').attr("style", "margin:-170px 0px 0px 80px");
    }





    //  hover testing
    $(".main-nav").mouseover(function() {
        $(".main-nav").attr("style", "opacity:0.9;width: 80px");
        $(".open-menu").attr("style", "opacity:0");
        $('.main-nav').click(function() {

            hasBeenClicked = true;
            console.log("1 " + hasBeenClicked);
        });
    });
    $(".main-nav").mouseout(function() {

        if (!hasBeenClicked) {
            $(".main-nav").attr("style", "opacity:0.4;width: 10px;overflow:hidden");
            $(".open-menu").attr("style", "opacity:0.4");
        } else {
            hasBeenClicked = false;
        }
        //  hasBeenClicked = false;
    });


</script>
