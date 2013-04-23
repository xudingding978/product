<?php
/* @var $this DomainsController */
/* @var $model Domains */

$this->breadcrumbs=array(
	'Domains'=>array('index'),
	$model->TITLE=>array('view','id'=>$model->REC_ID),
	'Update',
);

$this->menu=array(
	array('label'=>'List Domains', 'url'=>array('index')),
	array('label'=>'Create Domains', 'url'=>array('create')),
	array('label'=>'View Domains', 'url'=>array('view', 'id'=>$model->REC_ID)),
	array('label'=>'Manage Domains', 'url'=>array('admin')),
);
?>

<h1>Update Domains <?php echo $model->REC_ID; ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>