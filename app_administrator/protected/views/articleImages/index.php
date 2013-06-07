<?php
/* @var $this ArticleImagesController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Article Images',
);

$this->menu=array(
	array('label'=>'Create ArticleImages', 'url'=>array('create')),
	array('label'=>'Manage ArticleImages', 'url'=>array('admin')),
);
?>

<h1>Article Images</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
