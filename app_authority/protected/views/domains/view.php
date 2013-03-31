<?php
/* @var $this DomainsController */
/* @var $model Domains */

$this->breadcrumbs=array(
	'Domains'=>array('index'),
	$model->TITLE,
);

$this->menu=array(
	array('label'=>'List Domains', 'url'=>array('index')),
	array('label'=>'Create Domains', 'url'=>array('create')),
	array('label'=>'Update Domains', 'url'=>array('update', 'id'=>$model->REC_ID)),
	array('label'=>'Delete Domains', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->REC_ID),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Domains', 'url'=>array('admin')),
);
?>

<h1>View Domains #<?php echo $model->REC_ID; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'REC_ID',
		'DOMAIN_NAME',
		'JSON_DATA',
		'PAYPAL_EMAIL',
		'TITLE',
	),
)); ?>
