<?php
/* @var $this UserProfileController */
/* @var $model UserProfile */

$this->breadcrumbs=array(
	'User Profiles'=>array('index'),
	$model->REC_ID,
);

$this->menu=array(
	array('label'=>'List UserProfile', 'url'=>array('index')),
	array('label'=>'Create UserProfile', 'url'=>array('create')),
	array('label'=>'Update UserProfile', 'url'=>array('update', 'id'=>$model->REC_ID)),
	array('label'=>'Delete UserProfile', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->REC_ID),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage UserProfile', 'url'=>array('admin')),
);
?>

<h1>View UserProfile #<?php echo $model->REC_ID; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'REC_ID',
		'REC_DATETIME',
		'REC_TIMESTAMP',
		'TENANT_REC_ID',
		'USER_REC_ID',
		'LOGIN_PROVIDER',
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
	),
)); ?>
