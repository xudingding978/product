<?php
/* @var $this ShadowListingController */
/* @var $model ShadowListing */

$this->breadcrumbs=array(
	'Shadow Listings'=>array('index'),
	$model->REC_ID=>array('view','id'=>$model->REC_ID),
	'Update',
);

$this->menu=array(
	array('label'=>'List ShadowListing', 'url'=>array('index')),
	array('label'=>'Create ShadowListing', 'url'=>array('create')),
	array('label'=>'View ShadowListing', 'url'=>array('view', 'id'=>$model->REC_ID)),
	array('label'=>'Manage ShadowListing', 'url'=>array('admin')),
);
?>

<h1>Update ShadowListing <?php echo $model->REC_ID; ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>