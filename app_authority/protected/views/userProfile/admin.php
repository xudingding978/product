<?php
/* @var $this UserProfileController */
/* @var $model UserProfile */

$this->breadcrumbs=array(
	'User Profiles'=>array('index'),
	'Manage',
);

$this->menu=array(
	array('label'=>'List UserProfile', 'url'=>array('index')),
	array('label'=>'Create UserProfile', 'url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#user-profile-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage User Profiles</h1>

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
	'id'=>'user-profile-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
	'columns'=>array(
		'REC_ID',
		'REC_DATETIME',
		'REC_TIMESTAMP',
		'TENANT_REC_ID',
		'USER_REC_ID',
		'LOGIN_PROVIDER',
		/*
		'LOGIN_PROVIDER_IDENTIFIER',
		'IDENTIFIER',
		'PROFILE_URL',
		'WEBSITE_URL',
		'PHOTO_URL',
		'DISPLAY_NAME',
		'DESCRIPTION',
		'FIRST_NAME',
		'LAST_NAME',
		'GENDER',
		'LANGUAGE',
		'AGE',
		'BIRTH_DAY',
		'BIRTH_MONTH',
		'BIRTH_YEAR',
		'EMAIL',
		'EMAIL_VERIFIED',
		'PHONE',
		'COUNTRY',
		'REGION',
		'CITY',
		'ZIP',
		'POST_CODE',
		*/
		array(
			'class'=>'CButtonColumn',
		),
	),
)); ?>
