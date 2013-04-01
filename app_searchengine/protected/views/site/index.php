<?php
/* @var $this SiteController */

$this->pageTitle = Yii::app()->name;
?>

<?php
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
                    <img src=' + this.src + ' />\n\
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

    function getValue(data) {



        for (var key in data) {
            var img = new Image();


            image_src = data[key]['IMAGE_URL'];
            des_src = data[key]['DESCRIPTION'];
            img.src = image_src;
            img.description = des_src;
            img.user_photo = "";
            img.like = "";
            img.onload = loading;
            //            loading();


            console.log("imgHeight : " + imgHeight + " " + "this.height : " + this.height + " " + image_src);



        }


    }






    $(document).ready(function() {
        Set();
        $(window).scroll(function() {
            //  console.log($(this).scrollTop());

            var oldLoad = function() {
                document.getElementById("loading").className = "loading-visible";
            };
            var hideDiv = function() {
                document.getElementById("loading").className = "loading-invisible";
            };
            if ($(this).scrollTop() >= ($(document).height() - $(window).height() - 250)) {



                //   oldLoad.call(this);

                //  Set();
            }
            // hideDiv.call(this);
        });


    });





</script>









<div id="" class="group">
    <div class="group"> 
        <div id='categories'>

            <div id="container" class="variable-sizes clearfix isotope">

                <!--
                               <div id="element" class="element alkali metal  height2 isotope-item">
                                   <div id="test1" class="image_load_bronze">
                                       <img src="../../../images/photo_gallery/kit_1.jpg" />
                                   </div>
                                   <div id="test2" class='comments'>
               
                                   </div>
                               </div>
               
               
              
                              </div>
                -->


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
<div class="tile_img" >
    <div id="dd3" class="wrapper-dropdown-3" tabindex="1" style="margin-left:76%;">
        <span>Select to login</span>
        <ul class="dropdown" style="width:220px">
            <li  onclick="Facebook();" ><a style="color:rgb(138,168,1)" href="#"><i class="icon-envelope icon-large"></i>Sign in with FaceBook</a></li>
            <li  onclick="Yahoo();" ><a style="color:rgb(138,32,50)" href="#"><i class="icon-truck icon-large"></i>Sign in with Yahoo</a></li>
            <li  onclick="QQ();" ><a style="color:rgb(32,168,34)" href="#"><i class="icon-plane icon-large"></i>Sign in with QQ</a></li>
            <li  onclick="Sina();" ><a style="color:rgb(138,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Sina</a></li>
            <li  onclick="Google();" ><a style="color:rgb(138,23,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Google+</a></li>
            <li  onclick="Twitter();" ><a style="color:rgb(55,168,189)" href="#"><i class="icon-plane icon-large"></i>Sign in with Twitter</a></li>
            <li  onclick="Email();" ><a style="color:rgb(90,168,32)" href="#"><i class="icon-plane icon-large"></i>Sign in with Email</a></li>
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

<a href="#" class="button" onclick="javascript:showElement('v-menu')">
<span>Click Here</span>
</a>
<ul id="v-menu" class="v-menu" style="display:none;">
<li><a href="p1.html">Technology</a></li>
<li><a href="p2.html">Design</a></li>
<li><a href="p3.html">Css Gallery</a></li>
<li><a href="p4.html">Entertainment</a></li>
<li><a href="p5.html">Programming</a></li>
</ul>

<script type="text/javascript">
function showElement(layer){
var myLayer = document.getElementById(layer);
if(myLayer.style.display=="none"){
myLayer.style.display="block";
myLayer.backgroundPosition="top";
} else {
myLayer.style.display="none";
}
}
</script>

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
    window.onload = newLoad;



</script>

<script type="text/javascript" language="JavaScript" src="../../../js/search.js"></script>
