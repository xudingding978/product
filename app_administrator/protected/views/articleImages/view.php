<?php
/* @var $this ArticleImagesController */
/* @var $model ArticleImages */

$this->breadcrumbs=array(
	'Article Images'=>array('index'),
	$model->id,
);

$this->menu=array(
	array('label'=>'List ArticleImages', 'url'=>array('index')),
	array('label'=>'Create ArticleImages', 'url'=>array('create')),
	array('label'=>'Update ArticleImages', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete ArticleImages', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage ArticleImages', 'url'=>array('admin')),
);
?>

<h1>View ArticleImages #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'articleId',
		'heliumMediaId',
		'caption',
		'technicalSpecification',
		'sequence',
		'isExtra',
		'hero',
		'thumbnail',
		'preview',
		'infoLink',
		'original',
	),
)); ?>
