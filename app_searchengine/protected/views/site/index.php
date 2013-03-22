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


    var data_value = null;
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

    }
        function switch_loading()
    {
        document.getElementById('display_loading').style.display = 'none';
        document.getElementById('loading_img').style.display = 'block';

    }
    function getValue(data) {

        //    if (data_value !== null) {
       
        for (var key in data) {

            var img = new Image();
 
            var image_src = data[key]['IMAGE_URL'];
            var des_src = data[key]['DESCRIPTION'];
            img.onload = loading;
            img.src = image_src;
//            var temp = img.height;
              
            var image_height = img.height / img.width * 180;

            var element_height = image_height + 160;
            console.log(key + ' ' + img.height);
            console.log(element_height);
<?PHP $userProfile = UserProfile::model()->findByAttributes(array('USER_REC_ID' => 93)); ?>
            var $newItems = $('<div class="element alkali metal   isotope-item"  style="height:' + element_height + 'px"> \n\
            <div id="image_container"  style="left: 15px;  top: 30px; width: 180px;height:' + image_height + 'px"> \n\
                    <img src=' + image_src + ' />\n\
            </div>\n\
            <p style="left: 15px;  bottom: 100px;">' + des_src + '</p>\n\
            <a href="#" style="left: 15px;  bottom: 78px; width:55px;white-space: nowrap;"><k class="icon-heart-empty"></k> <p style="left: 20px; ">12</p></a>\n\
            <a href="#" style="left: 75px;  bottom: 78px;width:55px;white-space: nowrap;"><k class="icon-comment-alt"></k> <p style="left: 20px; ">6</p></a>\n\
            <a href="#" style="left: 135px;  bottom: 78px;width:55px;white-space: nowrap;"><k class="icon-save"></k><p style="left: 20px; ">66</p></a>\n\
                <div id="comments" class="comments">\n\
                    <img style="width:35px; bottom:5px; left:5px;" src="<?PHP echo $userProfile->PHOTO_URL; ?>" />\n\
                    <p style="left: 50px;  bottom: 20px;white-space: nowrap;">by  <a href="#" > Trends ideas</a></p>\n\
                </div>\n\
            </div>');

            $('#container').append($newItems).isotope('insert', $newItems);

        }
//        }else{
//            
//             document.write("no data avaleble!!");
//            
//        }

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
