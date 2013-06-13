<?php
/* @var $this C4SClientsController */
/* @var $model C4SClients */

$this->breadcrumbs=array(
	'C4 Sclients'=>array('index'),
	$model->C4S_ClientID=>array('view','id'=>$model->C4S_ClientID),
	'Update',
);

$this->menu=array(
	array('label'=>'List C4SClients', 'url'=>array('index')),
	array('label'=>'Create C4SClients', 'url'=>array('create')),
	array('label'=>'View C4SClients', 'url'=>array('view', 'id'=>$model->C4S_ClientID)),
	array('label'=>'Manage C4SClients', 'url'=>array('admin')),
);
?>

<h1>Update C4SClients <?php echo $model->C4S_ClientID; ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>