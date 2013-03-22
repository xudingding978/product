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

</script>



<div class="loading"></div>



            </div>

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
