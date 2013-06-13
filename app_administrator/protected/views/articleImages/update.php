<?php
/* @var $this ArticleImagesController */
/* @var $model ArticleImages */

$this->breadcrumbs=array(
	'Article Images'=>array('index'),
	$model->id=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List ArticleImages', 'url'=>array('index')),
	array('label'=>'Create ArticleImages', 'url'=>array('create')),
	array('label'=>'View ArticleImages', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage ArticleImages', 'url'=>array('admin')),
);
?>

<h1>Update ArticleImages <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>