<?php
/* @var $this DomainsController */
/* @var $model Domains */

$this->breadcrumbs=array(
	'Domains'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Domains', 'url'=>array('index')),
	array('label'=>'Manage Domains', 'url'=>array('admin')),
);
?>

<h1>Create Domains</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>