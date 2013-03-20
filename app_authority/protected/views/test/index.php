<?php
/* @var $this TestController */

$this->breadcrumbs=array(
	'Test',
);
?>
<h1><?php echo $this->id . '/' . $this->action->id; ?></h1>

<p>
	You may change the content of this page by modifying
	the file <tt><?php echo __FILE__; ?></tt>. 

        <?php   echo '<pre>';
            //$domain = 'develop.devbox1'; 
          //  print_r(CHtml::listData(Tpl::model()->getImageUrl($id), 'IMAGE_URL', 'DESCRIPTION'));
//            $url_picker = new UrlPicker();
//            echo $url_picker->shortenURL($_SERVER['HTTP_HOST']);
        
             print_r(Listing::model()->getImageUrl("develop.devbox5"));  
            echo "--------------------------------------------------------"; 
            print_r(Listing::model()->findAll()); 
            
            
?>
</p>
