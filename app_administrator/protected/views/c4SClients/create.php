<?php
/* @var $this C4SClientsController */
/* @var $model C4SClients */

$this->breadcrumbs=array(
	'C4 Sclients'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List C4SClients', 'url'=>array('index')),
	array('label'=>'Manage C4SClients', 'url'=>array('admin')),
);
?>

<h1>Create C4SClients</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>