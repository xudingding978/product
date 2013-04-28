<?php
/* @var $this ShadowListingController */
/* @var $model ShadowListing */

$this->breadcrumbs=array(
	'Shadow Listings'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List ShadowListing', 'url'=>array('index')),
	array('label'=>'Manage ShadowListing', 'url'=>array('admin')),
);
?>

<h1>Create ShadowListing</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>