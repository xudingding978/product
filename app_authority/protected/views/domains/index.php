<?php
/* @var $this DomainsController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Domains',
);

$this->menu=array(
	array('label'=>'Create Domains', 'url'=>array('create')),
	array('label'=>'Manage Domains', 'url'=>array('admin')),
);
?>

<h1>Domains</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
