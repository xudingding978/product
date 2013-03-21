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


            var image_src = data[key]['IMAGE_URL'];
            var des_src = data[key]['DESCRIPTION'];
            //     var img = new getNewImg(image_src);
 



            d = document.createElement('div');
            $(d).html('text');
            $("#container").append($(d));
        }
    }


    function getNewImg(src)

    {
        var img = new Image();
        img.onload = function() {
            console.log(this.width + 'x' + this.height);
        };
        img.src = src;
        return img;

    }

    function findHHandWW() {
        imgHeight = this.height;
        imgWidth = this.width;
        return true;
    }




    window.onload = Set();
    $(document).ready(function() {

        $(window).scroll(function() {
            console.log($(this).scrollTop());
            if ($(this).scrollTop() >= ($(document).height() - $(window).height() - 100)) {
                var body_tag_css = {
                    "opacity": "1"
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

            </div>

        </div>
    </div>
</div>

<script type="text/javascript" language="JavaScript" src="../../../js/search.js"></script>
