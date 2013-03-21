<?php
/* @var $this TenantController */
/* @var $model Tenant */

$this->breadcrumbs=array(
	'Tenants'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Tenant', 'url'=>array('index')),
	array('label'=>'Manage Tenant', 'url'=>array('admin')),
);
?>

<h1>Create Tenant</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>