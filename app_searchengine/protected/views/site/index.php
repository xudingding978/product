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

<div id="" class="group">
    <div class="group"> 
        <div id='categories'>

            <div id="container" class="variable-sizes clearfix isotope">
                <?php $userProfile = UserProfile::model()->findByAttributes(array('USER_REC_ID' => Yii::app()->user->id)); ?>

                
                
                
                
                
                
                
                <div class="element alkali metal  height2 isotope-item">
                    <div class="image_load_bronze">
                        <img src="../../../images/photo_gallery/kit_1.jpg" />
                    </div>
                    <div class='comments'>
                          <img  class='user_profile' height="29px" src ="<?php echo $userProfile->PHOTO_URL ?>"/>
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
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" language="JavaScript" src="../../../js/search.js"></script>
<script type="text/javascript" language="JavaScript" src="../../../js/home.js"></script>