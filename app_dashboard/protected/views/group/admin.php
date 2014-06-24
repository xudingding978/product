<?php
/* @var $this ShadowListingController */
/* @var $model ShadowListing */

$this->breadcrumbs=array(
	'Shadow Listings'=>array('index'),
	'Manage',
);

$this->menu=array(
	array('label'=>'List ShadowListing', 'url'=>array('index')),
	array('label'=>'Create ShadowListing', 'url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#shadow-listing-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage Shadow Listings</h1>

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
	'id'=>'shadow-listing-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
	'columns'=>array(
		'REC_ID',
		'REC_DATETIME',
		'REC_TIMESTAMP',
		'CLIENT_REC_ID',
		'STATE',
		'LISTING_TYPE_REC_ID',
		/*
		'ITEM_ID',
		'DESCRIPTION',
		'IMAGE_URL',
		'PROOF_NAME',
		'PROOF_POSITION',
		'LISTING_COST_EXCL_GST',
		'LISTING_COST_INCL_GST',
		'TRANSACTION_TOTAL_EXCL_GST',
		'TRANSACTION_TOTAL_INCL_GST',
		'TOTAL_PAID_TO_DATE',
		*/
		array(
			'class'=>'CButtonColumn',
		),
	),
)); ?>
