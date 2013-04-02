<?php
/* @var $this ShadowListingController */
/* @var $model ShadowListing */

$this->breadcrumbs=array(
	'Shadow Listings'=>array('index'),
	$model->REC_ID,
);

$this->menu=array(
	array('label'=>'List ShadowListing', 'url'=>array('index')),
	array('label'=>'Create ShadowListing', 'url'=>array('create')),
	array('label'=>'Update ShadowListing', 'url'=>array('update', 'id'=>$model->REC_ID)),
	array('label'=>'Delete ShadowListing', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->REC_ID),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage ShadowListing', 'url'=>array('admin')),
);
?>

<h1>View ShadowListing #<?php echo $model->REC_ID; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'REC_ID',
		'REC_DATETIME',
		'REC_TIMESTAMP',
		'CLIENT_REC_ID',
		'STATE',
		'LISTING_TYPE_REC_ID',
		'ITEM_ID',
		'DESCRIPTION',
		'IMAGE_URL',
		'PROOF_NAME',
		'PROOF_POSITION',
		'LISTING_COST_EXCL_GST',
		'LISTING_COST_INCL_GST',
		'TRANSACTION_TOTAL_EXCL_GST',
		'TRANSACTION_TOTAL_INCL_GST',
		'TOTAL_PAID_TO_DATE',
	),
)); ?>
