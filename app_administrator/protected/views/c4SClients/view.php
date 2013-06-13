<?php
/* @var $this C4SClientsController */
/* @var $model C4SClients */

$this->breadcrumbs=array(
	'C4 Sclients'=>array('index'),
	$model->C4S_ClientID,
);

$this->menu=array(
	array('label'=>'List C4SClients', 'url'=>array('index')),
	array('label'=>'Create C4SClients', 'url'=>array('create')),
	array('label'=>'Update C4SClients', 'url'=>array('update', 'id'=>$model->C4S_ClientID)),
	array('label'=>'Delete C4SClients', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->C4S_ClientID),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage C4SClients', 'url'=>array('admin')),
);
?>

<h1>View C4SClients #<?php echo $model->C4S_ClientID; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'C4S_ClientID',
		'DateCreated',
		'ClientName',
		'ArticleID',
		'SortOrder',
	),
)); ?>
