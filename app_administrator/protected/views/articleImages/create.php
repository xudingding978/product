<?php
/* @var $this ArticleImagesController */
/* @var $model ArticleImages */

$this->breadcrumbs=array(
	'Article Images'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List ArticleImages', 'url'=>array('index')),
	array('label'=>'Manage ArticleImages', 'url'=>array('admin')),
);
?>

<h1>Create ArticleImages</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>