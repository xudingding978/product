<?php
/* @var $this C4SClientsController */
/* @var $model C4SClients */

$this->breadcrumbs=array(
	'C4 Sclients'=>array('index'),
	'Manage',
);

$this->menu=array(
	array('label'=>'List C4SClients', 'url'=>array('index')),
	array('label'=>'Create C4SClients', 'url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#c4-sclients-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage C4 Sclients</h1>

<p>
You may optionally enter a comparison operator (<b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, <b>&gt;=</b>, <b>&lt;&gt;</b>
or <b>=</b>) at the beginning of each of your search values to specify how the comparison should be done.
</p>

<?php echo CHtml::link('Advanced Search','#',array('class'=>'search-button')); ?>
<div class="search-form" style="display:none">
<?php $this->renderPartial('_search',array(
	'model'=>$model,
)); ?>
</div><!-- search-form -->

<?php $this->widget('zii.widgets.grid.CGridView', array(
	'id'=>'c4-sclients-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
	'columns'=>array(
		'C4S_ClientID',
		'DateCreated',
		'ClientName',
		'ArticleID',
		'SortOrder',
		array(
			'class'=>'CButtonColumn',
		),
	),
)); ?>
