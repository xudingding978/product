<?php
/* @var $this C4SClientsController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'C4 Sclients',
);

$this->menu=array(
	array('label'=>'Create C4SClients', 'url'=>array('create')),
	array('label'=>'Manage C4SClients', 'url'=>array('admin')),
);
?>

<h1>C4 Sclients</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
