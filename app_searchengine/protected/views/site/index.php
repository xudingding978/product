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
        //        data_value = data;
                getValue(data);
            }
        });
    }
    function getValue(data) {

    //    if (data_value !== null) {


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
	Set();
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

 <div id="loading" class="loading-invisible">
  <p> <img src="../../../images/loader.gif" /></p>
</div>

<script type="text/javascript">
  document.getElementById("loading").className = "loading-visible";
  var hideDiv = function(){document.getElementById("loading").className = "loading-invisible";};
  var oldLoad = window.onload;
  var newLoad = oldLoad ? function(){hideDiv.call(this);oldLoad.call(this);} : hideDiv;
  window.onload = newLoad;
</script>

<script type="text/javascript" language="JavaScript" src="../../../js/search.js"></script>
