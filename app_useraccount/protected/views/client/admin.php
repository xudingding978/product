<?php
/* @var $this ClientController */
/* @var $model Client */

$this->breadcrumbs=array(
	'Clients'=>array('index'),
	'Manage',
);

$this->menu=array(
	array('label'=>'List Client', 'url'=>array('index')),
	array('label'=>'Create Client', 'url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#client-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage Clients</h1>

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
	'id'=>'client-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
	'columns'=>array(
		'REC_ID',
		'REC_DATETIME',
		'REC_TIMESTAMP',
		'CLIENT_STATUS_REC_ID',
		'USER_ID',
		'BUSINESS_NAME',
		/*
		'USERNAME',
		'TRADING_AS_NAME',
		'IS_DELETED',
		'DELETED_BY',
		'DELETED_DATE',
		'ACTIVATION_CODE',
		'TELEPHONE_NO',
		'FREE_TELEPHONE_NO',
		'FAX_NO',
		'FREE_FAX_NO',
		'EMAIL_ADDRESS',
		'WEBSITE_ADDRESS',
		'PHYSICAL_ADDRESS_BUILDING_ADDRESS',
		'PHYSICAL_ADDRESS_STREET_ADDRESS',
		'PHYSICAL_ADDRESS_SUBURB',
		'PHYSICAL_ADDRESS_CITY',
		'PHYSICAL_ADDRESS_STATE',
		'PHYSICAL_ADDRESS_COUNTRY',
		'PHYSICAL_ADDRESS_POST_CODE',
		'PHYSICAL_ADDRESS_DPID',
		'PHYSICAL_ADDRESS_PXID',
		'PHYSICAL_ADDRESS_LATITUDE',
		'PHYSICAL_ADDRESS_LONGITUDE',
		'PHYSICAL_ADDRESS_HEIGHT',
		'PHYSICAL_ADDRESS_COMPLETE',
		'POSTAL_ADDRESS_BUILDING_ADDRESS',
		'POSTAL_ADDRESS_STREET_ADDRESS',
		'POSTAL_ADDRESS_CITY',
		'POSTAL_ADDRESS_SUBURB',
		'POSTAL_ADDRESS_STATE',
		'POSTAL_ADDRESS_COUNTRY',
		'POSTAL_ADDRESS_POST_CODE',
		*/
		array(
			'class'=>'CButtonColumn',
		),
	),
)); ?>
