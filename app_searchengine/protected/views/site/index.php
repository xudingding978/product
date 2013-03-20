<?php
/* @var $this SiteController */

$this->pageTitle = Yii::app()->name;
?>

<?php
$this->widget('bootstrap.widgets.TbCarousel', array(
    'items' => array(
        array('image' => '../../../images/kichen_a.jpg'),
        array('image' => '../../../images/kichen_b.jpg'),
        array('image' => '../../../images/kichen_c.jpg'),
        array('image' => '../../../images/kichen_d.jpg'),
        array('image' => '../../../images/kichen_e.jpg'),
        array('image' => '../../../images/kichen_c.jpg'),
        array('image' => '../../../images/kichen_f.jpg'),
        array('image' => '../../../images/kichen_g.jpg'),
        array('image' => '../../../images/kichen_h.jpg'),
        array('image' => '../../../images/kichen_i.jpg'),
        array('image' => '../../../images/kichen_j.jpg'),
        array('image' => '../../../images/kichen_k.jpg'),
    ),
));
?>


<script>



    function Set()
    {
        $.ajax({
            type: 'POST',
            url: '<?php echo CController::createUrl('Site/GetDataFromItemtable'); ?>',
            dataType: 'json',
            success: function(data) {
                getValue(data);
            }
        });
    }
    function getValue(data) {

        for (var key in data) {

            var img = new Image();

            var image_src = data[key]['IMAGE_URL'];
            var des_src = data[key]['DESCRIPTION'];
            img.src = image_src;

            var image_height = img.height / img.width * 180;
            var element_height = image_height + 160;
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
    }




    window.onload = Set();

    $(document).ready(function() {

        $(window).scroll(function() {
            console.log($(this).scrollTop());
            if ($(this).scrollTop() >= ($(document).height() - $(window).height() - 100)) {
                var body_tag_css = {
                   "opacity":"1"
                }
                $(".loading").css(body_tag_css).fadeIn("slow"); 
                
                 Set();
                

            }
         //   $(".loading").removeClass(body_tag_css).fadeOut("slow"); 
        });


    });

</script>



<?php
$this->widget('bootstrap.widgets.TbButton', array(
    'label' => 'Primary',
    'type' => 'primary', // null, 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
    'size' => 'large', // null, 'large', 'small' or 'mini'
    'htmlOptions' => array('onclick' => 'Set();'),
));
?>
  <div class="loading"></div>

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
               
               
               
               
               
               
               
               
               
               
                               <div class="element alkaline-earth metal  height2 isotope-item" data-category="alkali-earth" data-symbol="Li">
               
                                   <div class="image_load_bronze">
                                       <img src="../../../images/photo_gallery/kit_2.jpg" />
                                   </div>
                                   <div class='comments'>
               
                                   </div>
               
                               </div>
                               <div class="element noble-gas width2 height3 metal isotope-item " >
               
               
                                   <div class="image_load_gold">
                                       <img src="../../../images/photo_gallery/kit_3.jpg" />
                                   </div>
                                   <div class='comments'>
               
                                   </div>
               
               
                               </div>
                               <div class="element alkaline-earth metal  height2 isotope-item" data-category="alkali-earth" data-symbol="Li">
               
               
               
                                   <div class="image_load_bronze">
                                       <img src="../../../images/photo_gallery/kit_4.jpg" />
                                   </div>
                                   <div class='comments'>
               
                                   </div>
               
                               </div>
                               <div class="element noble-gas width2 height3 metal isotope-item " >
               
               
                                   <div class="image_load_gold">
                                       <img src="../../../images/photo_gallery/kit_5.jpg" />
                                   </div>
               
                                   <div class='comments'>
               
                                   </div>
               
                               </div>
                               <div class="element alkali metal  height2 isotope-item">
               
               
               
                                   <div class="image_load_bronze">
                                       <img src="../../../images/photo_gallery/kit_6.jpg" />
                                   </div>
               
                                   <div class='comments'>
               
                                   </div>
                               </div>
                               <div class="element halogen metal  width2 height2 isotope-item">
               
               
                                   <div class="image_load_silvier">
                                       <img src="../../../images/photo_gallery/kit_5.jpg" />
                                   </div>
               
                                   <div class='comments'>
               
                                   </div>
                               </div>
                               <div class="element metalloid metal width2 height3 isotope-item">
               
               
                                   <div class="image_load_gold">
                                       <img src="../../../images/photo_gallery/kit_8.jpg" />
                                   </div>
               
                                   <div class='comments'>
               
                                   </div>
                               </div>
                               <div class="element alkali metal  width2 height2 isotope-item">
                                  
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_4.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_10.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkaline-earth metal  height2 isotope-item" data-category="alkali-earth" data-symbol="Li">
                                    
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_1.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas width2 height3 metal isotope-item " >
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_1.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element halogen metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_6.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element metalloid metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_5.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_4.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_7.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_4.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_6.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element halogen metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_10.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element metalloid metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_8.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_1.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_3.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_4.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkaline-earth metal  height2 isotope-item" data-category="alkali-earth" data-symbol="Li">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas width2 height3 metal isotope-item " >
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_10.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                    
                                                    </div>
                                                    <div class="element alkali metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_10.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element halogen metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_6.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element metalloid metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_7.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_1.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_3.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkaline-earth metal  height2 isotope-item" data-category="alkali-earth" data-symbol="Li">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_6.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas width2 height3 metal isotope-item " >
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_4.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                    
                                                    </div>
                                                    <div class="element alkali metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_3.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element halogen metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_5.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element metalloid metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_4.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_10.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_10.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkaline-earth metal  height2 isotope-item" data-category="alkali-earth" data-symbol="Li">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_1.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas width2 height3 metal isotope-item " >
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                    
                                                    </div>
                                                    <div class="element alkali metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_3.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element halogen metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element metalloid metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_1.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal  width2 height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_silvier">
                                                            <img src="../../../images/photo_gallery/kit_2.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element alkali metal width2 height3 isotope-item">
                                    
                                    
                                                        <div class="image_load_gold">
                                                            <img src="../../../images/photo_gallery/kit_3.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>
                                                    <div class="element noble-gas metal  height2 isotope-item">
                                    
                                    
                                                        <div class="image_load_bronze">
                                                            <img src="../../../images/photo_gallery/kit_5.jpg" />
                                                        </div>
                                    
                                                        <div class='comments'>
                                    
                                                        </div>
                                                    </div>-->
            </div>
             
        </div>
    </div>
</div>

<script type="text/javascript" language="JavaScript" src="../../../js/search.js"></script>
