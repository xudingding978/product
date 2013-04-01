<?php
/* @var $this ShadowListingController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Shadow Listings',
);

$this->menu=array(
	array('label'=>'Create ShadowListing', 'url'=>array('create')),
	array('label'=>'Manage ShadowListing', 'url'=>array('admin')),
);
?>

<h1>Shadow Listings</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
